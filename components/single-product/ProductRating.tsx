import { FaStar } from "react-icons/fa";

const ProductRating = ({ productID }: { productID: string }) => {
  //temp
  const rating = 4.5;
  const count = 25;
  const className = `flex gap-1 items-center text-md mt-1 mb-4`;
  const countValue = `(${count}) reviews`;
  return (
    <span className={className}>
      <FaStar className="w-3 h-3" /> {rating} {countValue}
      <span className="hidden">{productID}</span>
    </span>
  );
};

export default ProductRating;
