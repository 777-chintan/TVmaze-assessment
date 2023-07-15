// react
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

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
        !isScrolled ? "bg-[#141414]" : "bg-[#414040]"
      } transition-[background-color] duration-500 p-8 fixed top-0 w-screen z-10`}
    >
      <div className="flex space-x-2 md:space-x-10 items-center">
        <img
          src="https://static.tvmaze.com/images/tvm-header-logo.png"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="flex space-x-4">
          <li
            className={`text-white cursor-pointer hover:scale-105 transition duration-200`}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
