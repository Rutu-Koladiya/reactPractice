import { createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";

const AcoordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AcoordionContext);

  if (!ctx) {
    throw new Error(
      "Accordion-related components must be wrapped by <Acoordian>."
    );
  }

  return ctx;
}

export default function Accordian({ children, className }) {
  const [openItemId, setOpenItemId] = useState();

  function toggleItem(id) {
    setOpenItemId(prevId => prevId === id ? null : id)
  }

//   function openItem(id) {
//     setOpenItemId(id);
//   }

//   function closeItem() {
//     setOpenItemId(null);
//   }

  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AcoordionContext value={contextValue}>
      <ul className={className}>{children}</ul>
    </AcoordionContext>
  );
}

Accordian.Item = AccordionItem