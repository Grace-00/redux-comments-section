import { useEffect, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";
import './modal.css'

const modalRoot = document.getElementById('modal') as HTMLElement;

type ModalProps = {
  children: ReactNode
};

const Modal = ({ children }: ModalProps) => {
  // create div element only once using ref
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) elRef.current = document.createElement("div");

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const el = elRef.current!; // non-null assertion because it will never be null
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

  return createPortal(<div className="modal">{children}</div>, elRef.current);
}

export default Modal