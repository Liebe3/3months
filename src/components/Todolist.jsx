import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { createPortal } from "react-dom";
import Todoitem from "./Todoitem";
import ConfrimationModalContents from "./Modal/ConfrimationModalContents";

const Todolist = () => {
  const [item, setItem] = useState("");
  const [listItem, setListItem] = useState([]);
  const [error, setError] = useState("");
  const [confirm, setConfirm] = useState(false);

  const inputRef = useRef();

  // To focus on input
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAddItem = () => {
    if (item) {
      setListItem([...listItem, { id: uuid(), name: item }]);
      setItem("");
      setError("");
    } else {
      setError("Input field must not be empty.");
    }
  };

  const handleDeleteItem = (deleteId) => {
    const filteredItem = listItem.filter((myitem) => myitem.id !== deleteId);
    setListItem(filteredItem);
  };

  const handleClearLists = () => {
    setListItem([]);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[650px] bg-[#273F4F] mt-20 rounded">
      <h1 className="font-bold text-4xl p-10 text-[#FE7743]">
        Veronica todo list
      </h1>
      <div className="flex items-center p-5 w-full max-w-[600px] space-x-5 relative">
        <input
          type="text"
          value={item}
          placeholder="Enter item"
          onChange={(event) => setItem(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && handleAddItem()}
          ref={inputRef}
          className="w-full max-w-[420px] p-2 ml-2 border border-white text-white placeholder-[#D7D7D7] rounded"
        />
        <button
          onClick={handleAddItem}
          className="p-2 bg-[#447D9B] rounded cursor-pointer text-[#FE7743]"
        >
          Add Item
        </button>
        {error && (
          <p className="absolute text-red-500 text-xs  opacity-75 bottom-0 left-9">
            {error}
          </p>
        )}
      </div>

      <ul className="flex flex-col items-center justify-evenly w-full max-w-[580px] p-2">
        {listItem.map((myitem) => {
          return (
            <Todoitem
              key={myitem.id}
              myitem={myitem}
              handleDeleteItem={handleDeleteItem}
            />
          );
        })}
      </ul>
      {listItem.length > 0 && (
        <>
          <button
            onClick={() => setConfirm(true)}
            className="border border-red-500 w-full max-w-[200px] my-4 bg-[#273F4F] text-white p-2 cursor-pointer "
          >
            Clear Lists
          </button>
          {confirm &&
            createPortal(
              <div className="fixed inset-0 flex items-center justify-center bg-white/50 bg-opacity-30 z-50">
                <ConfrimationModalContents
                  handleClearLists={handleClearLists}
                  onClose={() => setConfirm(false)}
                />
              </div>,
              document.body
            )}
        </>
      )}
    </div>
  );
};

export default Todolist;
