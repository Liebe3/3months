import React from "react";

import ConfirmationModalButton from "./ConfirmationModalButton";

const ConfrimationModalContents = ({ onClose, handleClearLists }) => {
  return (
    <div className="w-full max-w-[400px] min-h-[150px] bg-[#D7D7D7] rounded">
      <div className="p-3 shadow-sm">
        <h1 className="font-bold">Clear Lists</h1>
      </div>
      <div className="p-3">
        <p>Are you sure you want to clear the Lists?</p>
      </div>
      <div className="flex justify-end space-x-3 w-full p-2 pr-6">
        <ConfirmationModalButton
          handleClearLists={handleClearLists}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default ConfrimationModalContents;
