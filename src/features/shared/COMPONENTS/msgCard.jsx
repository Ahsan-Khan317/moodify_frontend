import React, { useEffect } from "react";

const MessageCard = ({ msg, success, onClose }) => {

  // ✅ Auto remove after 3 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4 flex justify-center">
      
      <div
        className={`px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg text-white w-full max-w-md
        ${success ? "bg-green-500" : "bg-red-500"}`}
      >
        <p className="font-semibold text-sm sm:text-base text-center">
          {success ? "✅ Success" : "❌ Error"}
        </p>

        <p className="text-xs sm:text-sm mt-1 text-center wrap-break-words">
          {msg}
        </p>
      </div>

    </div>
  );
};

export default MessageCard;