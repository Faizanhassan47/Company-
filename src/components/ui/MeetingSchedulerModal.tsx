import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, Check, ArrowRight, ShieldCheck, Download, ExternalLink } from 'lucide-react';
import './MeetingSchedulerModal.css';

interface MeetingSchedulerModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEmail?: string;
  defaultName?: string;
}

const CALL_TYPES = [
  {
    id: 'discovery',
    title: '30-Min Architectural Discovery Call',
    desc: 'Evaluate system requirements, scalability targets, and technical feasibility.'
  },
  {
    id: 'erp',
    title: 'SAP & ERP Migration Consultation',
    desc: 'Discuss Service Layer, automated GRN, warehouse sync, and legacy integrations.'
  },
  {
    id: 'sow',
    title: 'Fixed SOW & Milestone Workshop',
    desc: 'Review deliverables, team allocation, and production launch timeline.'
  }
];

export const MeetingSchedulerModal: React.FC<MeetingSchedulerModalProps> = ({
  isOpen,
  onClose,
  defaultEmail = '',
  defaultName = '',
}) => {
  const [selectedType, setSelectedType] = useState('discovery');
  const [name, setName] = useState(defaultName);
  const [email, setEmail] = useState(defaultEmail);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('14:00 GMT');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [calendarData, setCalendarData] = useState<{
    googleUrl: string;
    outlookUrl: string;
    office365Url: string;
    icsContent: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const chosenType = CALL_TYPES.find(t => t.id === selectedType);
    const title = `Tekmora Solutions: ${chosenType ? chosenType.title : 'Architectural Discovery'}`;
    const details = `Tekmora Discovery Consultation with ${name || 'Client'}.\n\nSession: ${chosenType?.title}\nScope: ${chosenType?.desc}\nLead Email: ${email}\n\nMeeting link will be dispatched prior to session. Contact: info@tekmorasolution.com`;
    
    const hourMap: Record<string, number> = {
      '10:00 GMT': 10,
      '14:00 GMT': 14,
      '16:00 GMT': 16,
      '19:00 GMT': 19,
    };
    const targetHour = hourMap[time] ?? 14;
    
    let baseDate: Date;
    if (date) {
      baseDate = new Date(`${date}T00:00:00Z`);
    } else {
      baseDate = new Date();
      baseDate.setDate(baseDate.getDate() + 1);
    }
    baseDate.setUTCHours(targetHour, 0, 0, 0);
    const endDate = new Date(baseDate.getTime() + 30 * 60 * 1000);

    const formatGoogle = (dt: Date) => dt.toISOString().replace(/-|:|\.\d\d\d/g, '');
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${formatGoogle(baseDate)}/${formatGoogle(endDate)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent('Tekmora Virtual Briefing Room (Google Meet)')}`;
    const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(title)}&startdt=${baseDate.toISOString()}&enddt=${endDate.toISOString()}&body=${encodeURIComponent(details)}&location=${encodeURIComponent('Tekmora Virtual Briefing Room')}`;
    const office365Url = `https://outlook.office.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(title)}&startdt=${baseDate.toISOString()}&enddt=${endDate.toISOString()}&body=${encodeURIComponent(details)}&location=${encodeURIComponent('Tekmora Virtual Briefing Room')}`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Tekmora Solutions//Discovery Scheduler//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:REQUEST',
      'BEGIN:VEVENT',
      `SUMMARY:${title}`,
      `DESCRIPTION:${details.replace(/\n/g, '\\n')}`,
      `DTSTART:${formatGoogle(baseDate)}`,
      `DTEND:${formatGoogle(endDate)}`,
      'LOCATION:Tekmora Virtual Briefing Room',
      'ORGANIZER;CN="Tekmora Solutions":mailto:info@tekmorasolution.com',
      `ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=ACCEPTED;CN=${name || 'Client'}:mailto:${email}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    setCalendarData({ googleUrl, outlookUrl, office365Url, icsContent });

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          projectType: `Discovery Session: ${chosenType?.title}`,
          timeline: `Scheduled Slot: ${date || 'Next Business Day'} at ${time}`,
          budget: 'Discovery Phase (Complimentary)',
          requirements: `Client scheduled an architectural discovery session.\nFocus: ${chosenType?.title}\nSlot: ${date || 'Flexible'} @ ${time}`,
          ndaRequested: true,
        })
      });
    } catch {
      // non-blocking
    } finally {
      setIsSubmitting(false);
      setIsBooked(true);
    }
  };

  const handleDownloadIcs = () => {
    if (!calendarData?.icsContent) return;
    const blob = new Blob([calendarData.icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'tekmora-discovery-session.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReset = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="booking-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
        >
          <motion.div
            className="booking-modal"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
          >
            <div className="booking-modal-header">
              <div className="booking-modal-title" id="booking-modal-title">
                <Calendar size={15} className="text-orange" />
                <span>SCHEDULE ARCHITECTURAL DISCOVERY CALL</span>
              </div>
              <button
                type="button"
                className="booking-modal-close"
                onClick={handleReset}
                aria-label="Close scheduler"
              >
                <X size={16} />
              </button>
            </div>

            {isBooked ? (
              <div className="booking-success-view">
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22c55e' }}>
                  <Check size={22} />
                </div>
                <h4>Discovery Call Reserved</h4>
                <p>
                  We have registered your session for <strong>{name}</strong>. A confirmation has been routed to <strong>{email}</strong>.
                </p>

                <div className="calendar-sync-card">
                  <div className="calendar-sync-header">
                    <Calendar size={13} className="text-orange" />
                    <span>1-CLICK CALENDAR SYNC</span>
                  </div>
                  <div className="calendar-sync-buttons">
                    <a
                      href={calendarData?.googleUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cal-btn cal-btn-google font-mono"
                    >
                      <ExternalLink size={12} />
                      <span>Google Calendar</span>
                    </a>
                    <a
                      href={calendarData?.outlookUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cal-btn cal-btn-outlook font-mono"
                    >
                      <ExternalLink size={12} />
                      <span>Outlook Web</span>
                    </a>
                    <a
                      href={calendarData?.office365Url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cal-btn cal-btn-o365 font-mono"
                    >
                      <ExternalLink size={12} />
                      <span>Office 365</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleDownloadIcs}
                      className="cal-btn cal-btn-ics font-mono"
                    >
                      <Download size={12} />
                      <span>Download .ICS File</span>
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-secondary btn-sm font-mono mt-2"
                  onClick={handleReset}
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="booking-modal-body">
                  <div>
                    <label className="booking-label">01 // SELECT SESSION TYPE</label>
                    <div className="booking-type-grid">
                      {CALL_TYPES.map(type => (
                        <div
                          key={type.id}
                          className={`booking-type-card ${selectedType === type.id ? 'is-active' : ''}`}
                          onClick={() => setSelectedType(type.id)}
                        >
                          <div style={{ marginTop: 2 }}>
                            {selectedType === type.id ? (
                              <Check size={14} className="text-orange" />
                            ) : (
                              <div style={{ width: 14, height: 14, borderRadius: '50%', border: '1px solid var(--border-medium)' }} />
                            )}
                          </div>
                          <div>
                            <h5>{type.title}</h5>
                            <p>{type.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="booking-form-row">
                    <div>
                      <label className="booking-label" htmlFor="booking-name">Your Name *</label>
                      <input
                        id="booking-name"
                        type="text"
                        required
                        className="booking-input"
                        placeholder="e.g. Alex Morgan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="booking-label" htmlFor="booking-email">Work Email *</label>
                      <input
                        id="booking-email"
                        type="email"
                        required
                        className="booking-input"
                        placeholder="alex@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="booking-form-row">
                    <div>
                      <label className="booking-label" htmlFor="booking-date">Preferred Date</label>
                      <input
                        id="booking-date"
                        type="date"
                        className="booking-input"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="booking-label" htmlFor="booking-time">Time Window (UTC/GMT)</label>
                      <select
                        id="booking-time"
                        className="booking-select"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      >
                        <option value="10:00 GMT">10:00 AM GMT (Morning)</option>
                        <option value="14:00 GMT">02:00 PM GMT (Afternoon)</option>
                        <option value="16:00 GMT">04:00 PM GMT (Late Afternoon)</option>
                        <option value="19:00 GMT">07:00 PM GMT (Evening)</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    <ShieldCheck size={14} className="text-orange" />
                    <span>Protected under Tekmora Mutual NDA protocol.</span>
                  </div>
                </div>

                <div className="booking-modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary font-mono"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-orange font-mono"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Connecting...</span>
                    ) : (
                      <>
                        <span>Confirm & Schedule</span>
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
