import React from 'react';
import { Alert } from 'antd';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Alert
          message="Component Error"
          description="Something went wrong loading this component."
          type="error"
        />
      );
    }

    return this.props.children;
  }
} 