import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`padding-x w-full transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-black shadow-md"
          : "py-8 bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex justify-between items-center max-container">
        
        {/* LOGO */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            className="m-0 w-[129px] h-[29px]"
            src={headerLogo}
            alt="logo"
          />
        </motion.a>

        {/* DESKTOP NAV */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-xl:gap-8 max-lg:hidden">
          {navLinks.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={item.href}
                className="font-montserrat text-lg text-red-700 font-semibold hover:text-electric-blue transition duration-300 relative group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-electric-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex gap-2 text-lg font-medium font-montserrat max-lg:hidden">
          <motion.a
            href="#!"
            className="hover:text-coral-red transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Sign in
          </motion.a>
          <span className="text-white/50">/</span>
          <motion.a
            href="#!"
            className="hover:text-coral-red transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Explore now
          </motion.a>
        </div>

        {/* MOBILE ICON */}
        <motion.div
          className="hidden max-lg:block cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={hamburger} alt="menu" width={25} height={25} />
        </motion.div>
      </nav>

      {/* MOBILE MENU */}
      <motion.div
        className="max-lg:block overflow-hidden"
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg text-white hover:text-electric-blue transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}

          <li className="flex gap-2">
            <a
              href="#!"
              className="hover:text-coral-red transition duration-300"
            >
              Sign in
            </a>
            <span className="text-white/50">/</span>
            <a
              href="#!"
              className="hover:text-coral-red transition duration-300"
            >
              Explore now
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Nav;