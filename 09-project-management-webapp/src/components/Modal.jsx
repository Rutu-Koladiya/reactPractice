import { createPortal } from "react-dom";
import Button from "./Button";

export default function Modal({ children, buttonCaption, ref }) {
  return createPortal(
    <dialog ref={ref} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
