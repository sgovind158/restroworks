import React from 'react';
import LoadingIcon from '../svg/LoadingIcon';

/**
 * A loading indicator component that displays a spinning SVG icon and a "Loading..." message.
 *
 * @returns {JSX.Element} The loading UI, centered both vertically and horizontally.
 *
 * @remarks
 * - Uses Tailwind CSS classes for styling and animation.
 * - Intended to be used as a placeholder while content is loading.
 */
const LoadingCom = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-white">
      <div className="flex flex-col items-center">
        <LoadingIcon/>
        <div className="text-blue-600 text-lg font-semibold animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default LoadingCom;