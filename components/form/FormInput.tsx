import { Label } from "../ui/label";
import { Input } from "../ui/input";

type formInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeHolder?: string;
};
const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  placeHolder,
}: formInputProps) => {
  return <div>FormInput</div>;
};

export default FormInput;
