import React from "react";

/**
 * Renders the Restroworks logo as an SVG icon.
 *
 * The icon consists of a blue circular background with a bold white "R" centered within it.
 *
 * @returns {JSX.Element} The SVG logo icon component.
 */
const LogoIcon = () => {
  return (
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="16" fill="#2563eb" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fontSize="18"
        fill="white"
        fontWeight="bold"
      >
        R
      </text>
    </svg>
  );
};

export default LogoIcon;
