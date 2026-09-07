import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('Application render error', error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="app-error" id="main-content">
          <div>
            <p className="font-mono text-orange">SYSTEM RECOVERY</p>
            <h1>Something went wrong</h1>
            <p>The page could not be displayed. Reload the site or contact us if the problem continues.</p>
            <button className="btn btn-orange" type="button" onClick={() => window.location.reload()}>
              Reload website
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
