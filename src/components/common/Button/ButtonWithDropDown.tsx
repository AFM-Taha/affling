import { programTypes } from '@/assets/static-data/programTypes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

interface Props {
  menuHeading: string;
  menuItems: typeof programTypes;
  slugEndpoint?: string;
  children: string;
}

export default function ButtonWithDropDown({
  menuHeading,
  menuItems,
  slugEndpoint,
  children,
}: Props) {
  function convertToSlug(str: string) {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span className="font-bold hover:underline">{children}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{menuHeading}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menuItems.map((item) => {
          const slug = convertToSlug(item);
          return (
            <Link key={item} href={`/${slug}/${slugEndpoint || ''}`}>
              <DropdownMenuItem>{item}</DropdownMenuItem>
            </Link>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
