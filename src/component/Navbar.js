import React, { useState, useEffect } from 'react';
import logo from "../asset/img/Engtern_logo.png";
import { X, Plus, Menu } from 'lucide-react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');
  const [openDropdown, setOpenDropdown] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about" },
    {
      name: "Join us",
      link: "#",
      dropdown: [
        { name: "Student", link: "/join/student" },
        { name: "Teacher", link: "/join/teacher" },
        { name: "Intern", link: "/join/intern" },
      ],
    },
    {
      name: "Curriculum",
      link: "/curriculum",
      dropdown: [
        { name: "Kids", link: "/kids" },
        { name: "Adults", link: "/adult" },
      ],
    },
    { name: "Testimonials", link: "/testimonial" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    const path = window.location.pathname;
    const currentItem = menuItems.find(item => 
      item.link === path || (item.dropdown && item.dropdown.some(dropItem => dropItem.link === path))
    );
    if (currentItem) {
      setActiveItem(currentItem.name);
    }
  }, []);

  const handleClick = (itemName) => {
    if (openDropdown === itemName) {
      setOpenDropdown('');
    } else {
      setOpenDropdown(itemName);
    }
    setActiveItem(itemName);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md" role="navigation">
      {/* Desktop Navigation */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[100px]">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src={logo}
                alt="ENGTERN"
                className="mt-[-45px] w-[350px] h-auto sm:w-[700px] md:w-[400px]"
              />
            </a>
          </div>
          <div className="flex space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.link}
                  className={`py-2 text-[#00B6BC] hover:text-[#00B6BC]/80 relative group text-base
                    ${activeItem === item.name ? "text-[#EAB308]" : ""}
                  `}
                >
                  {item.name}
                  {item.dropdown && (
                    <svg
                      className="ml-1 w-4 h-4 inline"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-200
                      ${activeItem === item.name
                          ? "bg-[#EAB308]"
                          : "bg-transparent scale-x-0 group-hover:scale-x-100 group-hover:bg-[#00B6BC]"
                      }
                    `}
                  />
                </a>
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.link}
                          className={`block px-4 py-2 text-[#00B6BC] hover:text-[#00B6BC]/80 hover:bg-gray-100 text-base
                            ${activeItem === dropdownItem.name ? "text-[#EAB308]" : ""}
                          `}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
          <div className="flex-shrink-0 h-[80px]">
            <a href="/">
              <img
                src={logo}
                alt="ENGTERN"
                className="h-[270px] w-[230px] mt-[-110px]"
              />
            </a>
          </div>
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-700"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50">
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
              <div className="flex items-center h-[80px]">
                <img
                  src={logo}
                  alt="ENGTERN"
                  className="h-[270px] w-[230px] mt-[-40px]"
                />
              </div>
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="px-4 py-2">
              {menuItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-0">
                  <div
                    className="flex justify-between items-center py-4"
                    onClick={() => item.dropdown && handleClick(item.name)}
                  >
                    <a
                      href={item.dropdown ? "#" : item.link}
                      className={`text-xl ${
                        activeItem === item.name ? "text-[#00B6BC]" : "text-gray-900"
                      }`}
                      onClick={() => !item.dropdown && handleClick(item.name)}
                    >
                      {item.name}
                    </a>
                    {item.dropdown && (
                      <Plus className={`h-5 w-5 transition-transform ${
                        openDropdown === item.name ? "rotate-45" : ""
                      }`} />
                    )}
                  </div>
                  {item.dropdown && openDropdown === item.name && (
                    <div className="pl-4 pb-4">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.link}
                          className="block py-2 text-gray-600 hover:text-[#00B6BC]"
                          onClick={() => handleClick(dropdownItem.name)}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

