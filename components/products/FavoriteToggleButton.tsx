import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";

const FavoriteToggleButton = ({ productID }: { productID: string }) => {
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
      <span className="hidden">{productID}</span>
    </Button>
  );
};

export default FavoriteToggleButton;
