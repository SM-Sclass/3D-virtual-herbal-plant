"use client";
import React, { useState } from "react";
import { Menu, MenuItem, HoveredLink } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

function Navbar({ className }) {
    const [active, setActive] = useState(null);
    
    return (
        <div 
            className={cn("fixed top-7 inset-x-0 max-w-2xl mx-auto z-50 shadow-lg bg-white rounded-full", className)} 
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home" href="/">
                    </MenuItem>
                </Link>
                <Link href={"/Explore"}>
                    <MenuItem setActive={setActive} active={active} item="Explore" href="/Explore">
                    </MenuItem>
                </Link>
                <Link href={"/Tour"}>
                    <MenuItem setActive={setActive} active={active} item="Tour" href="/Tour">
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Settings" href="">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/Bookmark">Bookmark</HoveredLink>
                        <HoveredLink href="/Profile">Profile</HoveredLink>
                        <HoveredLink href="/Logout">Logout</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>

    )
    ;
}

export default Navbar;
