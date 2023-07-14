// react
import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        !isScrolled ? "bg-[#141414]" : "bg-[#282727]"
      } transition-[background-color] duration-500 p-8 fixed top-0 w-screen z-10`}
    >
      <div className="flex space-x-2 md:space-x-10 items-center">
        <img
          src="https://static.tvmaze.com/images/tvm-header-logo.png"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden md:flex space-x-4">
          <li className={`text-white`}>Home</li>
        </ul>

        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none w-full">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Search Shows"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;