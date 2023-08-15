import ThreeUsers from '@/assets/icons/ThreeUsers';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import Link from 'next/link';
// import { FaUsers } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

export default function SidebarCollapsible() {
  return (
    <Collapsible>
      <CollapsibleTrigger>
        <div className="flex items-center">
          <ThreeUsers className="mx-4 ml-6" />
          {/* <FaUsers size={20} className="mx-4" /> */}
          <h2>All Customers</h2>
          <FiChevronDown className="ml-16" size={16} />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="ml-[90px] mt-5 font-gordita text-[#808291]">
          <li className="mt-5 hover:underline">
            <Link href="#">Affiliate Network</Link>
          </li>
          <li className="mt-5 hover:underline">
            <Link href="#">Affiliate Program</Link>
          </li>
          <li className="mt-5 hover:underline">
            <Link href="#">Advertising Network</Link>
          </li>
          <li className="mt-5 hover:underline">
            <Link href="#">Tracking Software</Link>
          </li>
          <li className="mt-5 hover:underline">
            <Link href="#">Marketing Spy Tools</Link>
          </li>
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}
