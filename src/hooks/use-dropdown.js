import { useState, useEffect, useCallback } from 'react';

export default function useDropdown(dropEl, actionEl) {

  const [drop, setDrop] = useState(true);

  const toggleDrop = useCallback(
    toggleState => {
      setDrop(toggleState !== undefined ? Boolean(toggleState) : !drop);
    },
    [drop]
  );

  const onWindowClick = useCallback(
    ev => {

      if (!drop) {
        toggleDrop(true);
      }
    },
    [drop]
  );

  const onEsc = useCallback(
    ev => {
      if (ev.keyCode === 27 && drop === true) {
        toggleDrop(true);
      }
    },
    [drop]
  );

  useEffect(() => {
    window.addEventListener("click", onWindowClick);
    return () => window.removeEventListener("click", onWindowClick);
  });

  useEffect(() => {
    window.addEventListener("keyup", onEsc);
    return () => window.removeEventListener("keyup", onEsc);
  });

  return [drop, toggleDrop];
}
