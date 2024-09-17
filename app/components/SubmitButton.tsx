import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" className="uppercase">
      Sign in
    </Button>
  );
};

export default SubmitButton;
