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
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import SignOutLink from "./SignOutLink";

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
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <span className="w-full text-left">Login</span>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <span className="w-full text-left">Register</span>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>

        <SignedIn>
          {links.map((link) => {
            return (
              <DropdownMenuItem key={link.href} asChild>
                <Link href={link.href}>{link.label}</Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropDown;
