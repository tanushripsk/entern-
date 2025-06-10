import React, { useState, useEffect } from "react";
import logo from "../asset/img/Engtern_logo.png";
import { X, Plus, Menu } from "lucide-react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");
  const [openDropdown, setOpenDropdown] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
    { name: "Curriculum", link: "/curriculum" },
    { name: "Testimonials", link: "/testimonial" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    const path = window.location.pathname;
    const currentItem = menuItems.find(
      (item) =>
        item.link === path ||
        (item.dropdown && item.dropdown.some((d) => d.link === path))
    );
    if (currentItem) {
      setActiveItem(currentItem.name);
    }
  }, []);

  const handleClick = (itemName) => {
    if (openDropdown === itemName) {
      setOpenDropdown("");
    } else {
      setOpenDropdown(itemName);
    }
    setActiveItem(itemName);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeModal = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/9163985423866?text=${encodeURI(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
    closeModal();
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[99999] bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="bg-[#31A7D4] p-6 text-white rounded-t-lg relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-200"
              >
                ✕
              </button>
              <h2 className="text-sm mb-2">Engtern: English Made Easy</h2>
              <h3 className="text-2xl font-bold">Book A Demo Now</h3>
            </div>
            <div className="p-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Your name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Your email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  type="tel"
                  placeholder="Your number"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message (optional)"
                  className="w-full p-3 border border-gray-300 rounded-md resize-none h-24"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-[#208a91] text-white rounded-md hover:bg-[#47bcc5]"
                >
                  Submit via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <nav className="bg-white sticky top-0 z-50 shadow-md">
        {/* Desktop */}
        <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[100px]">
          <div className="flex justify-between items-center h-full">
            <div className="flex-shrink-0">
              <a href="/">
                <img
                  src={logo}
                  alt="ENGTERN"
                  className="mt-[-45px] ml-[-65px] w-[350px] h-auto sm:w-[700px] md:w-[400px]"
                />
              </a>
            </div>
            <div className="flex space-x-8 items-center">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.link}
                    className={`py-2 text-[#00B6BC] hover:text-[#00B6BC]/80 text-base ${
                      activeItem === item.name ? "text-[#EAB308]" : ""
                    }`}
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
                  </a>
                  {item.dropdown && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.link}
                            className="block px-4 py-2 text-[#00B6BC] hover:text-[#00B6BC]/80 hover:bg-gray-100 text-base"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={() => setShowModal(true)}
                className="bg-teal-500 text-white px-8 py-2 rounded-md hover:bg-teal-600 transition-colors"
              >
                Book A Demo
              </button>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
            <div className="flex-shrink-0 h-[80px]">
              <a href="/">
                <img
                  src={logo}
                  alt="ENGTERN"
                  className="h-[270px] w-[230px] mt-[-100px]"
                />
              </a>
            </div>
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {isMenuOpen && (
            <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
              <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
                <img src={logo} alt="ENGTERN" className="h-[230px] mt-[-40px]" />
                <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700">
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
                        <Plus
                          className={`h-5 w-5 transition-transform ${
                            openDropdown === item.name ? "rotate-45" : ""
                          }`}
                        />
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
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full bg-[#208a91] text-white py-2 rounded mt-4 text-lg"
                >
                  Book A Demo
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
