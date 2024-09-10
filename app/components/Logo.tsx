import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ clx }: { clx?: string }) => {
  return (
    <Button variant="ghost" asChild>
      <Link href="/" className={`${clx} flex items-center shadow-2xl shadow-slate-800`}>
        <div className="relative w-[60px] h-[60px]">
          <Image src="/medal.png" width={60} height={60} alt="medal" />
        </div>
        <h1 className="text-gold font-semibold">Medals</h1>
      </Link>
    </Button>
  );
};

export default Logo;
