// import { Button } from "@/components/ui/button";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Logo from "./Logo";

const Mobile = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <SheetContent
        side="left"
        className="backdrop-blur-xl border-0 sm:rounded-tr-xl w-full sm:w-1/2 shadow-sm shadow-slate-800"
      >
        <SheetHeader>
          <SheetTitle>
            <SheetClose>
            <Logo />
          </SheetClose>
          </SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you are done.
          </SheetDescription>
        </SheetHeader>

        <SheetFooter></SheetFooter>
      </SheetContent>
    </div>
  );
};

export default Mobile;
