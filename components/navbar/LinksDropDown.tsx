import { links } from "@/app/utils/links";
import { CiMenuBurger } from "react-icons/ci";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const LinksDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CiMenuBurger className="text-2xl" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2" align="center" sideOffset={10}>
        {links.map((link) => {
          return (
            <DropdownMenuItem key={link.href} asChild>
              <Link href={link.href}>{link.label}</Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropDown;
