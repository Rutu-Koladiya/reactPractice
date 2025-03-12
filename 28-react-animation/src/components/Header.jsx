import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import NewChallenge from "./NewChallenge.jsx";

export default function Header() {
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();

  function handleStartAddNewChallenge() {
    setIsCreatingNewChallenge(true);
  }

  function handleDone() {
    setIsCreatingNewChallenge(false);
  }

  return (
    <>
      {/* it used as a wrapper around code that conditionally displays or removes elements so framer motion make sure it's not remove instantly, but insted it'll check if there's some elemnt that has an exit animation and if it finds such an elementx, will play that animation first before removing this */}
      <AnimatePresence>
        {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
      </AnimatePresence>

      <header id="main-header">
        <h1>Your Challenges</h1>
        {/* onHoverStart={} onHoverEnd={} --> lot unnecesary work so it gives some apecial props*/}
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: '#8b11f0' }}
          transition={{ type: "spring", stiffness: 500 }}
          onClick={handleStartAddNewChallenge}
          className="button"
        >
          Add Challenge
        </motion.button>
      </header>
    </>
  );
}
