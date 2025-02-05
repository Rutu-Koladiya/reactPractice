// React Portals are a powerful feature in React that allows you to render components outside the current React tree hierarchy. With portals, you can easily render elements into different parts of the DOM, such as modals, tooltips, or any other component that needs to break out of the component's container.

// directlt ref will not worked in older version of react for that we have to import forwardRef and wrap around ResultModal fun, const ResultModal = forwardRef( function ResultModal({ result, targetTime }, ref) {
// ......
// })
// export default ResultModal

// import { useRef } from "react";

import { createPortal } from 'react-dom';

export default function ResultModal({ ref ,targetTime, remainingTime, onReset }) {
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2); // convert remainingtime ms to s
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100); // covert targettime to milisecond coz remaining time is in ms
    // const dialog = useRef();
    
    // userImperativeHandle(ref, () => {
    //     return {
    //         open() {
    //             dialog.current.showModal();
    //         }
    //     }
    // }) just for info 

    return createPortal(
        <dialog ref={ref}className="result-modal" onClose={onReset}>
            {userLost && <h2>You Lost!</h2>}
            {!userLost && <h2>You Score: {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form method="dialog">
                <button onSubmit={onReset}>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
}

// when we add form like this, with the method set to dialog, inside of a dialogue, a button that submits the from like this close button, will close the dialogue without extra JS.