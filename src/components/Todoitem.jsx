import React, { useEffect, useState } from "react";

const Todoitem = ({ myitem, handleDeleteItem, handleEditItem, editRef }) => {
  const [newItem, setNewItem] = useState(myitem.name);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditing && editRef.current) {
      editRef.current.focus();
    }
  }, [isEditing]);

  const onEdit = () => {
    if (newItem) {
      handleEditItem(myitem.id, newItem);
      setIsEditing(false);
      setError("");
    } else {
      setError("Input field must not be empty.");
    }
  };

  return (
    <>
      <li className="flex items-center border-b border-b-white w-full py-2 space-x-8">
        <div className="flex w-full  max-w-[400px] p-2 text-white relative">
          {isEditing ? (
            <input
              value={newItem}
              onChange={(event) => setNewItem(event.target.value)}
              onKeyDown={(event) => event.key === "Enter" && onEdit()}
              ref={editRef}
              className="w-full max-w-[420px] p-2 ml-2 border border-white text-white placeholder-[#D7D7D7] rounded"
            />
          ) : (
            <p>{myitem.name}</p>
          )}
          {error && (
            <p className="absolute text-red-500 text-xs  opacity-75 -bottom-2 left-5">
              {error}
            </p>
          )}
        </div>

        <div className="flex space-x-4 p-2 text-sm">
          <button
            onClick={() => {
              isEditing ? onEdit() : setIsEditing(true);
            }}
            className="p-2 bg-[#447D9B] rounded cursor-pointer text-[#FE7743] "
          >
            {isEditing ? "Save" : "Edit"}
          </button>
          <button
            onClick={() => handleDeleteItem(myitem.id)}
            className="p-2 bg-[#447D9B] rounded cursor-pointer text-[#FE7743]"
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default Todoitem;
