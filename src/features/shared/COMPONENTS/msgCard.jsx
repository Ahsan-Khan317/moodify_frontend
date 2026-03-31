import React, { useEffect } from "react";

const MessageCard = ({ msg, success, onClose }) => {

  // ✅ Auto remove after 3 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // remove message
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 left-4 sm:left-auto sm:w-auto z-50 flex justify-center sm:block">
      
      <div
        className={`px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg text-white w-full sm:min-w-70 max-w-sm
        ${success ? "bg-green-500" : "bg-red-500"}`}
      >
        <p className="font-semibold text-sm sm:text-base">
          {success ? "✅ Success" : "❌ Error"}
        </p>

        <p className="text-xs sm:text-sm mt-1 wrap-break-words">
          {msg}
        </p>
      </div>

    </div>
  );
};

export default MessageCard;