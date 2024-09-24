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
  return (
    <div className="mb-2">
      <Label htmlFor={name}>{label || name}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeHolder}
        required
      />
    </div>
  );
};

export default FormInput;
