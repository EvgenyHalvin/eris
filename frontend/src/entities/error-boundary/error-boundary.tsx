import { Component, ErrorInfo, ReactNode } from 'react';

import styles from './error-boundary.module.css';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={styles.wrap}>
          <p className={styles.message}>
            Sorry, something went wrong. Please refresh the page or try visiting
            application later.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
