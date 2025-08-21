"use client";

import Error from "@/views/components/StateHandle/Error";

/**
 * ErrorPage component for displaying an error UI.
 *
 * @param error - The error object that triggered the error boundary.
 * @param reset - Function to reset the error boundary state.
 * @returns The rendered error component.
 */
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <Error />;
}
