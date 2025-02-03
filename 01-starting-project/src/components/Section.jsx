export default function Section({title, children, ...props}) {
    return (<section {...props}>
        <h2>{title}</h2>
        {children}
    </section>);
}  // PROPS FORWARDING: so ...props ensure that all extra props that might be set on our custom section component, here will be forwarded to this buit-in section element!

// export default function Section({title, id, children}) {
//     return (<section id={id}>
//         <h2>{title}</h2>
//         {children}
//     </section>);
// }