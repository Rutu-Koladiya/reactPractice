import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
      {/* so it'll back relative to path mtlb -1 and we can also use route which will redirect to main page */}
      <p><Link to=".." relative="path">Back</Link></p>
    </>
  );
}

export default ProductDetailsPage;
