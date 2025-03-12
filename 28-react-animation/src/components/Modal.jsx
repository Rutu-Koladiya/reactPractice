import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  // for reusing
  // const hiddenAnimationState = { opacity: 0, y: 30 }
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      {/* initial for starting style */}
      {/* no animation while ending coz whenevre IsCreatingNewChallenge turned false it's instantly removed from the DOM */}

      {/* another way of reusing --> variants */}

      {/* Variants cannot just be used
      for defining and reusing animation states,but instead they can also be used to trigger animations deep inside of a component tree by just setting an animation to a certain variant on an ancestor component. */}
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        // initial={hiddenAnimationState}
        // animate={{ opacity: 1, y: 0 }}
        // exit={hiddenAnimationState}
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
