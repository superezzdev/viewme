import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Menu,
  X,
  Home,
  UserRound,
  Code2,
  FolderKanban,
  Eye,
  Map,
  Mail,
} from "lucide-react";

// NAVBAR COMPONENT
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [mouseX, setMouseX] = useState(null);

  const dockRef = useRef(null);

  // SCROLL DETECTION

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  NAVIGATION ITEMS
  const navLinks = [
    { label: "Home", icon: Home },
    { label: "About", icon: UserRound },
    { label: "Skills", icon: Code2 },
    { label: "Projects", icon: FolderKanban },
    { label: "Vision", icon: Eye },
    { label: "Journey", icon: Map },
    { label: "Contact", icon: Mail },
  ];

  //  TRACK MOUSE POSITION INSIDE DOCK

  const handleDockMouseMove = (e) => {
    if (!dockRef.current) return;

    const rect = dockRef.current.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
  };
  const handleDockMouseLeave = () => {
    setMouseX(null);
  };

  return (
    <>
      {/* MAIN NAVBAR  */}

      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300    
          ${
            isScrolled
              ? `
                bg-slate-950/70
                backdrop-blur-3xl
                border-b border-white/10
                py-2
              `
              : `
                bg-transparent
                py-4
              `
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* LOGO  */}

            <div>
              <img
                src="fulllogo.png"
                alt="Future Gen Logo"
                className="h-12 w-auto object-contain "
              />
            </div>

            {/* DESKTOP DOCK  */}

            <div className="hidden md:flex flex-1 justify-center">
              <motion.div
                ref={dockRef}
                onMouseMove={handleDockMouseMove}
                onMouseLeave={handleDockMouseLeave}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="
                  relative
                  flex items-end
                  gap-2
                  px-4 py-3
                  rounded-[28px]

                  bg-white/10
                  backdrop-blur-3xl

                  border border-white/10

                  shadow-[0_20px_60px_rgba(0,0,0,0.45)]

                  before:absolute
                  before:inset-0
                  before:rounded-[28px]
                  before:bg-linear-to-b
                  before:from-white/20
                  before:to-transparent
                  before:pointer-events-none
                "
              >
                {navLinks.map(({ label, icon: Icon }) => (
                  <DockItem
                    key={label}
                    label={label}
                    icon={Icon}
                    href={`#${label.toLowerCase()}`}
                    mouseX={mouseX}
                    dockRef={dockRef}
                  />
                ))}
              </motion.div>
            </div>

            {/* MOBILE NAVBAR  */}

            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="
                  p-2 rounded-xl
                  text-white
                  hover:bg-white/10
                  transition
                "
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* DESKTOP THEME TOGGLE  */}
            <div className="hidden md:flex"></div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU  */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="
        md:hidden
        fixed top-18 right-4
        z-40
        w-[min(92vw,340px)]
        max-h-[calc(100vh-88px)]
        overflow-y-auto
        rounded-3xl
        border border-white/10
        bg-[rgba(74,92,106,0.35)]
        backdrop-blur-3xl
        shadow-[0_24px_80px_rgba(0,0,0,0.35)]
      "
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
              flex items-center gap-3
              px-4 py-3
              rounded-2xl
              text-slate-100
              hover:bg-white/10
              transition-all duration-200
            "
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// DOCK ITEM COMPONENT

const DockItem = ({ label, icon: Icon, href, mouseX, dockRef }) => {
  // Reference to current icon.

  const itemRef = useRef(null);

  // Distance between mouse and icon center.

  const [distance, setDistance] = useState(999);

  //  CALCULATE DISTANCE FROM CURSOR

  useEffect(() => {
    /*
      If mouse left dock,
      reset everything.
    */
    if (!itemRef.current || !dockRef.current || mouseX === null) {
      setDistance(999);
      return;
    }

    /*
      Dock dimensions.
    */
    const dockRect = dockRef.current.getBoundingClientRect();

    /*
      Current icon dimensions.
    */
    const rect = itemRef.current.getBoundingClientRect();

    /*
      Center point of icon.
    */
    const itemCenter = rect.left - dockRect.left + rect.width / 2;

    /*
      Distance from mouse to icon center.
    */
    setDistance(Math.abs(mouseX - itemCenter));
  }, [mouseX, dockRef]);

  // FISHEYE SCALE CALCULATION

  /*
    This creates REAL macOS style scaling.

    Closer icons grow larger.
    Neighbor icons grow slightly.

    Formula explanation:
    - distance / 90 decreases growth
    - max prevents negative values
    - min caps maximum scale
  */

  const scale =
    mouseX === null ? 1 : Math.max(1, Math.min(2.4, 2.5 - distance / 90));

  /*
    Dynamic icon container size.
  */
  const size = 52 + (scale - 1) * 42;

  /*
    Lift icons upward while magnified.
  */
  const translateY = scale > 1.05 ? -14 * (scale - 1) : 0;

  return (
    <motion.a
      ref={itemRef}
      href={href}
      whileTap={{ scale: 0.9 }}
      className="
        relative
        flex items-end justify-center
        group
      "
      aria-label={label}
    >
      {/* =====================================================
          TOOLTIP
          ===================================================== */}

      <span
        className="
          absolute top-full left-1/2
          -translate-x-1/2

          mt-3

          opacity-0
          translate-y-2

          group-hover:opacity-100
          group-hover:translate-y-0

          transition-all duration-200

          whitespace-nowrap

          rounded-lg

          bg-black/80
          px-3 py-1.5

          text-xs font-medium text-white

          backdrop-blur-xl
        "
      >
        {label}
      </span>

      {/* =====================================================
          ICON CONTAINER
          ===================================================== */}

      <motion.div
        animate={{
          width: size,
          height: size,
          y: translateY,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 16,
          mass: 0.55,
        }}
        className="
          relative

          flex items-center justify-center

          rounded-2xl

          bg-linear-to-b
          from-white/15
          to-white/5

          border border-white/10

          backdrop-blur-xl

          shadow-[0_8px_30px_rgba(0,0,0,0.35)]

          overflow-hidden

          hover:border-cyan-400/40
        "
      >
        {/* ================================================
            HOVER GLOW
            ================================================ */}

        <div
          className="
            absolute inset-0

            opacity-0
            group-hover:opacity-100

            transition-opacity duration-300

            bg-linear-to-tr
            from-cyan-500/10
            via-blue-500/10
            to-purple-500/10
          "
        />

        {/* ================================================
            ICON
            ================================================ */}

        <Icon
          style={{
            width: 22 + (scale - 1) * 4,
            height: 22 + (scale - 1) * 4,
          }}
          className="
            relative z-10

            text-slate-100
            group-hover:text-cyan-300

            transition-all duration-200
          "
        />
      </motion.div>
    </motion.a>
  );
};

export default Navbar;
