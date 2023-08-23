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
  label: string;
  menuHeading: string;
  menuItems: string[];
}

export default function ButtonWithDropDown({
  label,
  menuHeading,
  menuItems,
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
      <DropdownMenuTrigger>{label}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{menuHeading}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menuItems.map((item) => {
          const slug = convertToSlug(item);
          return (
            <Link key={item} href={`/${slug}`}>
              <DropdownMenuItem>{item}</DropdownMenuItem>
            </Link>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
