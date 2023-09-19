import { Submenu, menus } from '@/assets/static-data/offers';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Menu1: React.FC<{ onSubmenuSelect: (submenuName: string) => void }> = ({
  onSubmenuSelect,
}) => {
  // State variables
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Function to handle menu click
  const handleMenuClick = (menuIndex: number) => {
    if (activeMenu === menuIndex) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuIndex);
    }
  };

  // Function to handle submenu selection
  const handleSubmenuSelect = (submenuName: string) => {
    onSubmenuSelect(submenuName);
    // Close the menu after selecting
    setActiveMenu(null);
  };

  // Function to filter submenus based on search query
  const filteredSubmenus = (submenus: Submenu) => {
    return submenus.filter((submenu) =>
      submenu.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="relative z-10 py-5">
      <div className=" bg-[#4E93D3] py-5 lg:rounded-full">
        <div className="relative z-10 px-5  lg:px-24">
          <div className="flex flex-col justify-around gap-y-5 lg:flex-row lg:gap-y-0">
            {menus.map((menu, index) => (
              <div key={menu.id} className="relative mr-4">
                <button
                  className="flex items-center gap-2 text-lg font-medium capitalize text-white lg:text-base"
                  onClick={() => handleMenuClick(index)}>
                  {menu.slug}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="8"
                    viewBox="0 0 11 8"
                    fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.09357 1.29918C1.2811 1.11171 1.5354 1.0064 1.80057 1.0064C2.06573 1.0064 2.32004 1.11171 2.50757 1.29918L5.80057 4.59219L9.09357 1.29918C9.18581 1.20367 9.29616 1.12749 9.41816 1.07508C9.54017 1.02267 9.67139 0.995088 9.80417 0.993934C9.93695 0.99278 10.0686 1.01808 10.1915 1.06836C10.3144 1.11864 10.4261 1.1929 10.52 1.28679C10.6139 1.38068 10.6881 1.49233 10.7384 1.61523C10.7887 1.73813 10.814 1.86981 10.8128 2.00259C10.8117 2.13537 10.7841 2.26658 10.7317 2.38859C10.6793 2.51059 10.6031 2.62094 10.5076 2.71318L6.50757 6.71318C6.32004 6.90066 6.06573 7.00597 5.80057 7.00597C5.5354 7.00597 5.2811 6.90066 5.09357 6.71318L1.09357 2.71318C0.906097 2.52566 0.800781 2.27135 0.800781 2.00618C0.800781 1.74102 0.906097 1.48671 1.09357 1.29918Z"
                      fill="white"
                    />
                  </svg>
                </button>
                {activeMenu === index && (
                  <div className="absolute z-20 mt-2 w-full rounded border border-gray-200 bg-white py-2 shadow-lg lg:w-[284px]">
                    <div className="mb-2 flex items-center border-b px-4 pb-2">
                      <div className="relative w-full">
                        <input
                          type="text"
                          placeholder={`Search ${menu.name}`}
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full rounded border border-gray-300 py-1 pl-3 pr-2"
                        />
                        <AiOutlineSearch
                          className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500"
                          style={{ pointerEvents: 'none' }}
                        />
                      </div>
                    </div>
                    {filteredSubmenus(menu.submenus).map(
                      (submenu, subIndex) => (
                        <div key={subIndex} className="px-4 py-2">
                          <div
                            className="flex cursor-pointer items-center justify-between"
                            onClick={() => handleSubmenuSelect(submenu.name)}>
                            <div className="flex space-x-2.5">
                              <input
                                type="checkbox"
                                name={`submenu-${menu.id}-${subIndex}`}
                                id={`submenu-${menu.id}-${subIndex}`}
                                readOnly
                              />
                              <p>{submenu.name}</p>
                            </div>
                            <p>{submenu.totalProduct}</p>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu1;
