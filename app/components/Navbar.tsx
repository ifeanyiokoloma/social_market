import { GiHamburgerMenu } from "react-icons/gi";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import Mobile from "./Mobile";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="h-12 flex flex-col justify-center fixed w-full bg-dark-gold">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="sm"
              variant="ghost"
              className="hover:text-black active:text-black"
            >
              <GiHamburgerMenu className=" hover:text-black" size={20} />
            </Button>
          </SheetTrigger>
          <Mobile />
        </Sheet>
        <Button
          variant="outline"
          className="border-zinc-300 border text-zinc-300 font-normal text-sm uppercase"
          size="sm"
          asChild
        >
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
