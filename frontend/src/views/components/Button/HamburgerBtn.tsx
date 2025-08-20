import React from 'react'
import { Menu, X } from 'lucide-react'

type HamburgerBtnProps = {
  open: boolean;
  toggleMenu: () => void;
};

const HamburgerBtn: React.FC<HamburgerBtnProps> = ({ open, toggleMenu }) => {
  return (
     <button
      className="md:hidden flex items-center px-2 py-1"
      onClick={toggleMenu}
      aria-label="Toggle menu"
      type="button"
    >
      {open ? (
        <X className="w-7 h-7 text-blue-700" strokeWidth={2.5} />
      ) : (
        <Menu className="w-7 h-7 text-blue-700" strokeWidth={2.5} />
      )}
    </button>
  )
}

export default HamburgerBtn