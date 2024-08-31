'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

export default function NavLink({ href, children }) {
    const path = usePathname();
    const currentClasses = path.startsWith(href) ? `${classes["active"]} ${classes["link"]}` : classes["link"];

    return <Link href={href} className={currentClasses}>
        <span>{children}</span> 
    </Link>;
};