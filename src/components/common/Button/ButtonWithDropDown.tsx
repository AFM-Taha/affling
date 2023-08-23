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
  menuItems: string[];
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
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
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
