import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

interface NavItemProps extends ComponentProps<typeof Link> {
  icon?: ReactNode;
}

export default function NavItem({ children, icon, ...props }: NavItemProps) {
  return (
    <Link
      {...props}
      className="
        group relative flex items-center gap-3 rounded-l-xl
        px-4 py-3 text-sm font-medium text-gray-700
        transition-all duration-200 ease-out
        hover:bg-white hover:text-blue-700 
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-blue-500
        focus-visible:ring-offset-2
      "
    >
      {icon && (
        <span className="flex h-9 w-9 items-center justify-center rounded-lg">
          {icon}
        </span>
      )}

      <span>{children}</span>
    </Link>
  );
}
