# GlucoTrack CGM Platform — Complete Application Overview

## 1. Purpose of this document

This document explains what the GlucoTrack application is, how its parts work together, what happens during each user journey, where data is stored, and which features are fully connected versus currently simulated or represented by sample data.

The repository is a development-stage Continuous Glucose Monitoring (CGM) platform. It contains a patient-facing mobile application, a web API and SQL Server data layer, a Bluetooth Low Energy (BLE) hardware simulator, and a small Bluetooth capability diagnostic utility.

> Important: this is not currently a certified medical device. Several dashboard values and clinical views are demonstrations. It must not be used for diagnosis or treatment decisions without completing validation, security review, regulatory work, and integration with an approved CGM algorithm and hardware.

## 2. Product summary

GlucoTrack is designed to let a patient:

1. Create an account or sign in.
2. Complete a patient profile and select glucose units.
3. Select a supported CGM model.
4. Grant Bluetooth permission and scan for a sensor.
5. Connect to the sensor and verify its firmware, serial number, battery, temperature, and measurement state.
6. Register the verified device with the backend.
7. View a dashboard containing current glucose, trends, history, reports, alerts, and profile information.
8. Log meal, insulin, and activity events locally in the current session.
9. Export or share a PDF report.
10. Follow an in-app “Rule of 15” timer and open the phone dialer for an emergency caregiver.

The intended end-to-end architecture is:

```text
CGM sensor or Windows simulator
        │ BLE (FFF0 service)
        ▼
.NET MAUI patient app
        │ HTTPS/HTTP REST + JWT
        ▼
ASP.NET Core Web API
        │ Entity Framework Core
        ▼
Microsoft SQL Server
```

## 3. Repository components

| Component | Location | Responsibility |
|---|---|---|
| Patient application | `CGM_Frontend/Userapp` | Cross-platform .NET MAUI UI, authentication, onboarding, BLE connection, dashboard, and report generation |
| Frontend tests | `CGM_Frontend/CGM.PatientApp.Tests` | Tests for the BLE protocol parser, unit conversion, models, and email-related behavior |
| Backend API | `CGM_Backend/CGM.Api` | Authentication, profiles, devices, sensors, glucose measurements, summaries, alerts, and database health |
| Database scripts | `CGM_Backend/Database` | SQL Server schema and seed data |
| BLE simulator | `CGM.BleSimulator` | Windows GATT peripheral that imitates the diagnostic interface of a CGM device |
| BLE capability checker | `BlePeripheralCheck` | Reports whether the Windows Bluetooth adapter supports central and peripheral roles |

## 4. Technology stack

### Patient application

- .NET MAUI targeting Android, iOS, Mac Catalyst, and Windows.
- C# and XAML with an MVVM structure.
- CommunityToolkit.Mvvm for observable state and commands.
- CommunityToolkit.Maui for UI helpers.
- SkiaSharp/LiveCharts-related packages for chart rendering.
- MAUI `SecureStorage` for access tokens, refresh tokens, user session data, and encrypted cache entries.
- MAUI `Preferences` for non-secret configuration and onboarding/device flags.
- Native Android BLE APIs for real scanning, GATT discovery, commands, and notifications.

### Backend

- ASP.NET Core 10 Web API.
- Entity Framework Core with Microsoft SQL Server.
- JWT bearer authentication.
- Password hashing through the application password-hasher service.
- Rotating, hashed refresh tokens.
- SMTP/email service for welcome and password-reset emails.
- Swagger UI in development.
- Fixed-window rate limiting on authentication endpoints.

### Hardware simulation

- .NET Windows application using Windows GATT server APIs.
- Advertises service `FFF0` with command/notification characteristic `FFF1` and history notification characteristic `FFF2`.

## 5. Application startup and service configuration

The mobile app starts with `AppShell`, whose initial route is the splash page. Dependency injection is configured in `MauiProgram.cs`.

The app reads configuration from environment settings and an optional `.env` file:

| Setting | Meaning | Typical default |
|---|---|---|
| `CGM_API_BASE_URL` | Backend base URL | Android: `http://127.0.0.1:5232/`; desktop: `http://localhost:5232/` |
| `CGM_USE_MOCK_SERVICES` | Uses mock account, profile, device, and BLE services when true | `false` |
| `CGM_USE_REAL_BLE` | Allows real Android BLE while other services are mocked | `true` preference fallback |
| `CGM_ALLOW_BLE_SIMULATOR` | Permits the development simulator to pass the scan filter | `false` |

In normal API mode, the app uses `ApiAuthService`, `ApiProfileService`, and `ApiDeviceService`. On Android it uses `AndroidBleService`. On non-Android platforms, real BLE is represented by `UnavailableBleService`; therefore the implemented real BLE workflow is Android-specific. Mock mode replaces these dependencies with deterministic development services.

## 6. Complete user journey

### 6.1 Splash and session routing

The splash page waits briefly for the branded transition and checks the saved authentication session.

- No valid session: navigate to Login.
- Authenticated but profile incomplete: navigate to Complete Profile.
- Authenticated and profile complete, but no configured device flag: navigate to Device Selection.
- Authenticated with profile and device configured: navigate to Dashboard.
- Unexpected startup failure: fail safely back to Login.

The configured-device startup check is based on the local `cgm_device_configured` preference. The dashboard separately asks the API for the user’s first registered device.

### 6.2 Registration

The sign-up page collects full name, email, optional phone number, password, password confirmation, and terms acceptance. The app validates basic completeness, email shape, a minimum six-character password, matching passwords, and terms acceptance.

The API then:

1. Rejects a duplicate email.
2. Hashes the password.
3. Creates the user and a patient profile.
4. Marks that initial profile as complete in the current backend implementation.
5. Attempts to send a welcome email in the background.
6. Issues an access token and refresh token.
7. Stores only the refresh-token hash in SQL Server.
8. Returns the authenticated user and tokens.

The app stores tokens and serialized session information in secure storage, then takes the user to Complete Profile.

### 6.3 Login and saved session

The login page submits email, password, remember-me, and optional device information. The API verifies the password and active-account state, records the last login time, creates a refresh-token record, and returns JWT credentials.

After login, the app routes according to profile/device status. Access and refresh tokens are stored in secure storage. The API supports refresh-token rotation; reuse of a revoked/replaced token causes active sessions for that user to be revoked.

Google and Apple buttons exist in the UI, but production social authentication is intentionally unavailable until platform OAuth client IDs and redirect URIs are configured. Mock mode can demonstrate these flows. The current backend controller also does not expose the `api/auth/social` route expected by the mobile API client.

### 6.4 Forgot and reset password

The user enters an email address. The backend invalidates previous unused reset records, creates a six-digit OTP and a long reset token, gives them a 15-minute lifetime, stores them, and attempts to send the reset email.

The reset screen can verify the OTP and submit either the OTP or long token with a new password. On success, the backend:

- hashes and replaces the password;
- marks the reset token as used; and
- revokes all active refresh-token sessions.

Unlike many public systems, the current forgot-password endpoint explicitly returns “not found” for an unknown email. That behavior can reveal whether an account exists and should be reconsidered for production.

### 6.5 Profile completion

The profile screen loads the signed-in user’s name and lets the patient choose `mg/dL` or `mmol/L`, supply a phone number, and select notification options. The profile API persists name, phone, date of birth when supplied, preferred glucose unit, theme, and language.

Notification toggles are currently carried in the frontend request model but are not persisted by the backend profile DTO/entity path. After a successful save, the app opens Device Selection.

### 6.6 Device selection and preparation

The app presents two locally defined supported device families:

- **Disposable CGM (`G-AA`)** — described as an all-in-one sensor for up to 14 days.
- **Reusable CGM (`G-PA0 / G-PA1`)** — described as a rechargeable transmitter with replaceable sensors.

The user can select one, read preparation guidance, or skip pairing and enter the dashboard. Selection details are stored in preferences for the next screens; selecting a type does not itself create a database record.

### 6.7 Bluetooth permission and scanning

On Android, the app checks BLE support and Bluetooth state, then requests:

- `BLUETOOTH_SCAN` and `BLUETOOTH_CONNECT` on Android 12/API 31 and newer; or
- location permission on older Android versions.

The scanner runs in low-latency mode. Results are filtered by supported CGM name rules. A simulator is accepted only when simulator access is enabled and its advertisement matches the expected service/name logic. Duplicate Bluetooth addresses are ignored. The chosen Bluetooth address and display name are placed in preferences for the connection page.

### 6.8 BLE connection and device verification

The connection sequence performs these operations:

1. Connect to the selected Android BLE device.
2. Discover GATT service `0000FFF0-0000-1000-8000-00805F9B34FB`.
3. Find `FFF1`, which must support write and notify.
4. Find optional/history characteristic `FFF2` and enable notifications when available.
5. Subscribe to `FFF1` notifications through the standard Client Characteristic Configuration descriptor (`2902`).
6. Exchange five framed diagnostic commands in order.

| Command | Meaning in the app | Parsed result |
|---|---|---|
| `E7` | Read firmware version | ASCII firmware string |
| `E8` | Read serial number | ASCII device serial |
| `E1` | Read battery voltage | Unsigned 16-bit millivolts |
| `E2` | Read device temperature | Signed raw value divided by 10 °C |
| `E3` | Read measurement state | Measuring flag, elapsed time, latest sequence number |

Frames use the protocol parser’s header, length, command, payload, and checksum validation. The command service waits for the matching notification response and rejects malformed or mismatched responses.

When all diagnostics succeed, the app builds a verified `CgmDeviceInfo`, saves diagnostic values locally, sets the configured-device preference, and posts the device to `POST /api/devices/register`. The backend either updates a matching serial-number device owned by the user or creates a new device record. The UI then shows Connection Success and opens the dashboard.

### 6.9 Dashboard

The dashboard is a single page with five internal tabs: Home, History, Reports, Alerts, and Profile.

#### Home

The home view shows:

- time-aware greeting and patient name;
- device connection badge and last communication age;
- current glucose hero card with unit and trend arrow;
- color changes for in-range, high, urgent-high, and low values;
- selectable 3-hour, 6-hour, 12-hour, and 24-hour trend views;
- average, highest, lowest, and time-in-range summary cards;
- a seven-day calendar strip;
- sensor/battery/synchronization status; and
- quick event buttons for meal, insulin, and activity.

At present, device identity/status comes from `GET /api/devices`, and name/unit come from authentication/profile services. However, current glucose, chart points, daily summaries, calendar percentages, and most sensor-duration text are generated from fixed frontend datasets. If mock mode is active, a timer changes the displayed glucose slightly every five seconds.

#### History

The user can select Today, 7D, 14D, or 30D and tap readings for a detail page. The current lists are generated locally from sample values. The existing backend `GET /api/glucose/history` endpoint is not yet connected to this screen.

#### Reports

The user can select 7D, 14D, 30D, 90D, or a custom period. Summary values such as average glucose, highest/lowest glucose, estimated A1C, variability, and time in range are currently sample calculations/data in the view model rather than backend-derived patient analytics.

The report service can create a local PDF-like report artifact for export and invoke the platform share sheet. This should be validated on every target platform before production distribution.

#### Alerts

The UI includes All, Critical, Unread, and Info filters, alert detail navigation, and hypoglycemia guidance. The backend has real alert storage and read-state endpoints, but the dashboard does not currently call them. Displayed alert content/filtering is presently frontend presentation behavior.

The “Rule of 15” control starts a 15-minute countdown. When it completes, the app asks the user to recheck glucose. The caregiver action opens the device phone dialer; a production caregiver contact workflow and persisted emergency number are not implemented.

#### Profile

The profile view displays the account name/email, allows logout, and provides navigation/actions for account-related sections. Logout calls the API to revoke the submitted refresh token when possible, then removes the local access token, refresh token, and session data.

Quick events added through the Meal, Insulin, and Activity buttons are inserted into the in-memory `RecentEvents` collection. They are not currently stored in SQL Server and disappear when the view model/app session is recreated.

## 7. Backend API behavior

All endpoints except authentication and health require a valid JWT. User-owned queries use the token’s name-identifier/subject claim to prevent cross-user access.

| Area | Method and route | What it does |
|---|---|---|
| Auth | `POST /api/auth/register` | Creates a user/profile and returns tokens |
| Auth | `POST /api/auth/login` | Validates credentials and returns tokens |
| Auth | `POST /api/auth/forgot-password` | Creates and emails a 15-minute reset code/token |
| Auth | `POST /api/auth/verify-reset-code` | Checks reset OTP validity |
| Auth | `POST /api/auth/reset-password` | Changes password and revokes sessions |
| Auth | `POST /api/auth/refresh-token` | Rotates refresh token and issues a new access token |
| Auth | `POST /api/auth/logout` | Revokes one refresh token |
| Auth | `DELETE /api/auth/account` | Deletes the current user and owned clinical/device records |
| Profile | `GET /api/profile` | Returns the current patient profile |
| Profile | `PUT /api/profile` | Updates profile fields and completion state |
| Devices | `GET /api/devices` | Lists the user’s registered devices |
| Devices | `POST /api/devices/register` | Registers or updates a CGM device |
| Devices | `PUT /api/devices/{id}/status` | Updates connection and battery state |
| Devices | `DELETE /api/devices/{id}` | Removes an owned device when allowed |
| Sensors | `GET /api/sensors/active` | Gets the current active/warming sensor |
| Sensors | `POST /api/sensors/start` | Starts a sensor session and defines warmup/expiry |
| Glucose | `POST /api/glucose/measurement` | Saves one unique sequence-number reading |
| Glucose | `POST /api/glucose/sync-bulk` | Inserts missing readings in a batch |
| Glucose | `GET /api/glucose/history` | Returns recent readings, optionally by sensor |
| Glucose | `GET /api/glucose/summary` | Computes a 24-hour glucose summary |
| Alerts | `GET /api/alerts` | Lists alerts with severity/unread filters |
| Alerts | `PUT /api/alerts/{id}/read` | Marks an owned alert as read |
| Health | `GET /api/health/db-check` | Checks SQL connectivity and reports latency |

### Measurement and alert rules

For a single uploaded reading, the backend verifies sensor ownership and ignores a duplicate `(SensorId, SequenceNumber)`. It updates the sensor’s latest sequence and reading time. It creates:

- a Critical low-glucose alert at `<= 70`; or
- a Warning high-glucose alert at `>= 180`.

The bulk-sync path de-duplicates and updates sensor state, but currently does **not** run the automatic alert-generation logic used by the single-measurement path.

The summary endpoint uses readings from the last 24 hours and calculates latest, average, minimum, maximum, and percentage between 70 and 180 inclusive. If there are no readings, it currently returns a fixed demonstration summary (`112` current, `96` average, `64` low, `152` high, `82%` time in range) instead of an empty/no-data response.

## 8. Database model

SQL Server stores eight main entity groups:

| Entity | Important data and relationship |
|---|---|
| `Users` | Identity, normalized unique email, password hash/provider data, status, timestamps |
| `PatientProfile` | One-to-one with user; phone, DOB, gender, unit, target settings/theme/language/completion |
| `CGMDevices` | User-owned device metadata, serial, model, BLE name, firmware, battery, connection state |
| `Sensors` | Device/user-owned wear session, warmup, activation, expiry, last reading, latest sequence |
| `GlucoseMeasurements` | User/sensor reading, unique sensor sequence, glucose/trend/status and raw diagnostics |
| `Alerts` | User alert with optional sensor/measurement links, severity, reading, time, and read state |
| `RefreshTokens` | Hashed session tokens, expiry, revocation, replacement chain, device information |
| `PasswordResetTokens` | Email, OTP, long token, expiry, and used state |

Indexes enforce unique emails, unique non-null device serial numbers, unique readings by sensor/sequence, and fast user/time, sensor/time, and unread-alert queries. Relationships generally restrict deletion of clinical/device records, while account deletion explicitly removes dependent records in a controlled order.

## 9. BLE simulator behavior

The Windows simulator checks that the local Bluetooth adapter supports the peripheral role, creates the FFF0 service, and advertises it. It listens for writes on FFF1 and responds through notifications.

Its diagnostic responses contain development values for firmware, serial number, battery, temperature, and measurement status. FFF2 is created for the history/multi-frame shape, but the current simulator does not provide a continuous stream of live glucose measurements or a complete historical transfer workflow.

The `BlePeripheralCheck` utility is a separate prerequisite test. It prints whether the default Windows adapter supports central and peripheral BLE roles. Peripheral support is required for the PC to behave like a sensor.

## 10. Security and privacy controls already present

- Passwords are hashed rather than stored as plaintext.
- Access tokens are validated for issuer, audience, signature, and exact lifetime with zero clock skew.
- Refresh tokens are random, stored as hashes on the server, rotated, and revocable.
- Authentication endpoints are limited to 10 requests per minute per remote IP.
- API data access is scoped to the authenticated user.
- Mobile credentials/session tokens use secure storage.
- Local cache entries use secure storage and expiry envelopes.
- Production enables HSTS and HTTPS redirection.
- CORS accepts only configured origins; no origins are enabled when the setting is empty.
- Password reset records expire after 15 minutes and become single-use.
- Password change revokes existing sessions.

This does not by itself make the application production- or healthcare-compliant. Missing work includes a threat model, audit logging, consent and privacy lifecycle, key/secret management, certificate pinning decision, mobile hardening, abuse controls, backup/restore plans, clinical validation, accessibility validation, and the applicable HIPAA/GDPR/regulatory program.

## 11. What is real, simulated, or incomplete

| Capability | Current status |
|---|---|
| Email registration/login | Implemented against API and SQL Server |
| JWT and refresh sessions | Implemented |
| Password reset email/OTP | Implemented, dependent on SMTP configuration |
| Profile read/update | Implemented |
| Android BLE scan/GATT setup | Implemented |
| E7/E8/E1/E2/E3 verification | Implemented for real device/mock/simulator responses |
| Device registration | Implemented |
| Sensor session API | Implemented on backend, not integrated into mobile pairing flow |
| Measurement upload/history/summary API | Implemented on backend |
| Mobile live glucose ingestion | Not wired end to end |
| Glucose conversion algorithm from raw WE1 signal | Not implemented; intentionally no fabricated clinical calculation |
| D1 start-measurement command | Explicitly not implemented |
| D3/history read command | Explicitly not implemented |
| Simulator continuous glucose stream | Not implemented |
| Dashboard charts/history/summary | Primarily fixed/demo frontend data |
| Dashboard backend glucose integration | Not implemented |
| Backend alert display in mobile app | Not implemented |
| Meal/insulin/activity persistence | In-memory only |
| Push/local glucose notifications | Interfaces/settings exist, end-to-end behavior not implemented |
| Google/Apple production sign-in | Not configured/available |
| PDF export/share | Implemented as a local frontend workflow; platform QA still needed |
| Non-Android real BLE | Unavailable in current implementation |

## 12. End-to-end development run

Three processes are used for the full Android development demonstration:

1. Start SQL Server and the backend on port 5232.
2. Start the Windows BLE simulator on a Bluetooth adapter with peripheral support.
3. Use `adb reverse tcp:5232 tcp:5232`, build/install the Android app, and launch it on a physical phone.

The backend needs `DB_CONNECTION_STRING` and a JWT secret of at least 32 bytes. The mobile app must enable simulator discovery when testing with the Windows peripheral. HTTP cleartext is permitted by the development Android network configuration; production should use HTTPS.

See the root `README.md` for exact commands and troubleshooting steps.

## 13. Recommended next implementation sequence

To turn the current prototype into a true end-to-end CGM application, the most direct sequence is:

1. Implement the approved raw-signal-to-glucose calculation boundary or consume already-calculated glucose from supported hardware.
2. Implement live `B0` measurement handling and D1/D3 device operations.
3. Start/register a backend sensor session during pairing.
4. Add mobile glucose/history/sensor/alert services and connect the dashboard to the existing APIs.
5. Upload live and recovered measurements with offline queueing and idempotent bulk sync.
6. Generate alerts consistently for both single and bulk ingestion and deliver local/push notifications.
7. Persist patient-entered meals, insulin, activities, caregiver settings, and alert preferences.
8. Replace no-data demo summaries with explicit empty states.
9. Configure and validate social sign-in only if required.
10. Complete clinical, security, privacy, accessibility, reliability, and regulatory validation before real patient use.

## 14. Short status statement

The project currently demonstrates a strong end-to-end foundation: secure accounts, patient profiles, real Android BLE discovery, device diagnostic verification, API-backed device registration, SQL persistence, and a polished multi-tab clinical dashboard. The principal remaining gap is the middle of the clinical data pipeline: live sensor measurements are not yet converted, synchronized, and rendered from real backend data. Until that bridge is completed, the dashboard should be understood as a UI/UX demonstration around a functioning authentication, device, and backend foundation.
