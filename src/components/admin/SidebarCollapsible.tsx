import ThreeUsers from '@/assets/icons/ThreeUsers';
import { programTypes } from '@/assets/static-data/programTypes';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { useActiveSectionContext } from '@/context/active-section-context';
import Link from 'next/link';
// import { FaUsers } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { convertToSlug } from '../common/Button/ButtonWithDropDown';

export default function SidebarCollapsible() {
  const { activeSection, setActiveSection } = useActiveSectionContext();
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
          {programTypes.map((programType) => {
            return (
              <Link
                onClick={() => setActiveSection(programType)}
                key={programType}
                href={convertToSlug(programType)}
                className={`mt-5 block ${
                  activeSection === programType
                    ? 'text-lg font-medium text-gray-300 duration-200'
                    : ''
                }`}>
                <li>{programType}</li>
              </Link>
            );
          })}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}
