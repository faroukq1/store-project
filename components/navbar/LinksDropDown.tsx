import { links } from "@/app/utils/links";
import { CiMenuBurger } from "react-icons/ci";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import UserIcon from "./UserIcon";
import { Button } from "../ui/button";

const LinksDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <CiMenuBurger className="w-6 h-6" />
          <UserIcon />
        </Button>
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
