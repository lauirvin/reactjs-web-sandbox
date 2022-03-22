declare global {
  interface Window {
    DocumentTouch: never;
  }
}
const isTouchDevice = (): boolean =>
  !!(
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      (window.DocumentTouch &&
        typeof document !== 'undefined' &&
        document instanceof window.DocumentTouch))
  ) || !!(typeof navigator !== 'undefined' && navigator.maxTouchPoints);

export default isTouchDevice;
