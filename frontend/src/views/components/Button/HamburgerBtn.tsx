import React from 'react'
import { Menu, X } from 'lucide-react'

type HamburgerBtnProps = {
  open: boolean;
  toggleMenu: () => void;
};

/**
 * HamburgerBtn is a button component that toggles between a hamburger menu icon and a close (X) icon.
 *
 * @param open - A boolean indicating whether the menu is open. If true, the close (X) icon is shown; otherwise, the hamburger menu icon is shown.
 * @param toggleMenu - A callback function invoked when the button is clicked to toggle the menu state.
 *
 * @remarks
 * - The button is only visible on mobile devices (`md:hidden`).
 * - Uses `Menu` and `X` icons to visually represent the menu state.
 * - Includes accessible `aria-label` for screen readers.
 */
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