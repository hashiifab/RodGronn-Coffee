import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Location", path: "/location" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-background/95 backdrop-blur-lg shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-coffee-accent hover:scale-105 transition-transform duration-300 flex items-center"
          >
            <img src="/logo.svg" width={35} alt="Logo" className="mr-2" />
            RodGronn
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover-lift text-lg ${
                  location.pathname === link.path
                    ? "text-coffee-accent font-semibold"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/6289647643221"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="bg-white text-center w-48 rounded-2xl h-12 relative text-black text-xl font-semibold group"
                type="button"
              >
                <div className="bg-coffee-medium rounded-xl h-10 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    height="20px"
                    width="20px"
                    className="transform rotate-180" // Membalikkan arah panah
                  >
                    <path
                      d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
                <p className="translate-x-6 text-lg">Reserve Now</p>
              </button>
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="lg:hidden text-foreground p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg py-6 shadow-lg animate-fade-down">
            <div className="container mx-auto px-4 flex flex-col space-y-6">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg ${
                    location.pathname === link.path
                      ? "text-coffee-accent font-semibold"
                      : "text-foreground/80"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/reserve">
                <p className="hover-lift text-lg text-coffee-accent font-semibold hover:text-coffee-accent/80">
                  Reserve
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
