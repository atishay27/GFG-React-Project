import "./productCard.css";

function ProductCard({ data }) {
  return (
    <div className="product-div">
      {console.log(data)}
      <div className="image-container">
        <img className="product-image" src={data.image}></img>
      </div>
      <div className="product-details">
        <hr className="ruler" />
        <div className="product-name">
          {data.title.length > 50
            ? `${data.title.slice(0, 50)}...`
            : data.title}
        </div>
        <hr className="ruler" />
        <div className="product-cost">₹ {parseInt(data.price * 80)}</div>
        <button className="buy-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
