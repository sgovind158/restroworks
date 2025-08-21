"use client";
import React from "react";
import { ToastContainer } from "react-toastify";

/**
 * Renders a Toast notification container using the `ToastContainer` component.
 *
 * The toast notifications are displayed at the bottom-center of the screen,
 * automatically close after 5 seconds, and include a visible progress bar.
 * Notifications are not stacked with the newest on top, and clicking does not close them.
 * The container is not right-to-left, supports pausing on focus loss and hover,
 * and is draggable. The theme is set to "light".
 *
 * @returns {JSX.Element} The Toast notification container component.
 */
const Toast = () => {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default Toast;
