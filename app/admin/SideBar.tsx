"use client";
import { adminLinks } from "../utils/links";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside>
      {adminLinks.map(({ href, label }) => {
        const isActivePage = pathname === href;
        const variant = isActivePage ? "default" : "ghost";
        return (
          <Button
            key={href}
            asChild
            variant={variant}
            className="w-full mb-2 capitalize font-normal justify-start"
          >
            <Link href={href}>{label}</Link>
          </Button>
        );
      })}
    </aside>
  );
};

export default SideBar;
