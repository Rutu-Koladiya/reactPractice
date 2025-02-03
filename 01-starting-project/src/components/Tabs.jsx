export default function Tabs({ children, buttons, buttonsContainer = 'menu'}) {
const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
// if we passed directly buttonsContainer then it will looking for a built-in element called buttonsContainer coz it's starting with a lowercase so we create a varible with uppercase ButtonsContainer which can be used as a custom component or directly we can dive props in uppercase
