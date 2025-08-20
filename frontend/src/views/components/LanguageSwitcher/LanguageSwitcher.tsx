"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { locales } from "./data";



export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-1 px-3 py-1 bg-gray-200 rounded hover:bg-blue-100 transition-colors">
            <Globe className="w-5 h-5 text-blue-700" />
            <span>{locales.find((l) => l.code === currentLocale)?.label}</span>
            <ChevronDown className="w-4 h-4 ml-1 text-blue-700" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
          {locales.map((l) => (
            <DropdownMenuItem
              key={l.code}
              onClick={() => switchLocale(l.code)}
              disabled={l.code === currentLocale}
              className={
                l.code === currentLocale
                  ? "bg-blue-600 text-white cursor-default"
                  : ""
              }
            >
              {l.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
