import React from "react";

const ConfirmationModalButton = ({ handleClearLists, onClose }) => {
  return (
    <>
      <button
        onClick={onClose}
        className="bg-red-500 py-2 px-3 text-sm cursor-pointer rounded"
      >
        Cancel
      </button>
      <button
        onClick={() => {
          handleClearLists();
          onClose();
        }}
        className="bg-green-400 p-2 px-3 text-sm cursor-pointer rounded"
      >
        Okay
      </button>
    </>
  );
};

export default ConfirmationModalButton;
