import { flushSync } from "react-dom";

export function viewTransition(fn: () => void) {
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      flushSync(() => {
        fn();
      });
    });
  } else {
    fn();
  }
}
