declare namespace JSX {
  interface IntrinsicElements {
    'radio-player': {
      host?: string;
      'stream-url'?: string;
      'refresh-interval'?: string;
      'show-controls'?: string;
      'show-history'?: string;
      children?: React.ReactNode;
    };
    'radio-player-banner': {
      host?: string;
      'stream-url'?: string;
      position?: string;
      fixed?: boolean;
      children?: React.ReactNode;
    };
  }
}
