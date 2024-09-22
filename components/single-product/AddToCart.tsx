import { Button } from "../ui/button";

const AddToCart = ({ productID }: { productID: string }) => {
  return (
    <Button className="mt-8 capitalize" size="lg">
      Add to cart
    </Button>
  );
};

export default AddToCart;
