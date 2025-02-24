import { Link, useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('products')
    }
  return (
    <>
    {/* coz if we do like we have to reder it individually on every pages where needed */}
    {/* <MainNavigation /> */}
      <h1>My home page</h1>
      <p>
        Go to <Link to="products">the list of products</Link>.
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
