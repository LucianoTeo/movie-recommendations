'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";

type NavLinkProps = {
  href: string
  icon: React.ReactNode
  label: string
}

export function NavLink({ href, icon, label }: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href} className={`flex items-center text-gray-700 gap-2 ${isActive && 'text-orange-700'}`}>
      {icon}
      {label}
    </Link>
  );
}