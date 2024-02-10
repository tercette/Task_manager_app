import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }) {
  useEffect(() => {
    const modalRoot = document.getElementById("modal-root");
    const dialog = document.createElement("dialog");
    modalRoot.appendChild(dialog);

    return () => {
      modalRoot.removeChild(dialog);
    };
  }, []);

  return createPortal(
    <dialog open>{children}</dialog>,
    document.getElementById("modal-root")
  );
}
