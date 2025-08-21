import Link from "next/link";
import React from "react";

/**
 * Functional component that renders a custom 404 error page.
 *
 * Displays a message indicating the requested page was not found,
 * and provides a link to navigate back to the homepage.
 *
 * @returns {JSX.Element} The rendered 404 error page component.
 */
const F404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh]">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default F404;
