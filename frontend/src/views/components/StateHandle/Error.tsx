import React from 'react'

/**
 * Error component displays a generic error message and provides a button to reload the page.
 *
 * @remarks
 * This component can be used as a fallback UI for error boundaries or error states in your application.
 * The reset function currently reloads the page, but you can replace it with custom error recovery logic.
 *
 * @returns {JSX.Element} A styled error message with a "Try again" button.
 */
const Error = () => {
  // Define a reset function or replace with your actual reset logic
  const reset = () => {
    window.location.reload();
  };

  return (
    <div className="text-center py-20">
      <h1 className="text-2xl text-red-500">Something went wrong</h1>
      <p className="mt-2 text-gray-600">{/* error.message can be replaced with a static message or passed as a prop */}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  )
}

export default Error