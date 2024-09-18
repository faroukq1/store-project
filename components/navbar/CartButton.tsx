import Link from "next/link";
import { Button } from "../ui/button";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = async () => {
  // here rending how much items in the databse
  const numItemsInCart = 12;
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <FaShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
};

export default CartButton;
