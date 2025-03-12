import { useAccordionContext } from "./Accordian";

export default function AccordionItem({ id, title, children, className }) {
  const { openItemId, openItem, closeItem, toggleItem } = useAccordionContext();

  const isOpen = openItemId === id;

  //   function handleCick() {
  //     if (isOpen) {
  //       closeItem();
  //     } else {
  //       openItem(id);
  //     }
  //   }

  return (
    <li className={className}>
      <h3 onClick={() => toggleItem(id)}>{title}</h3>
      <div
        className={
          isOpen ? "accordion-item-content open" : "accordion-item-content"
        }
      >
        {children}
      </div>
    </li>
  );
}
