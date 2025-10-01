declare global {
  interface Window {
    ttq?: {
      track: (event: string, data?: Record<string, any>) => void;
      page?: () => void;
      // (optional) add other methods if you use them
    };
  }
}
export {};