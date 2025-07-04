import React, { use, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [item, setItem] = useState("");
  const [listItem, setListItem] = useState([]);
  const [error, setError] = useState("");

  const [isEditing, setIsEditing] = useState("");
  const [newItem, setNewItem] = useState("");

  const inputRef = useRef();
  const lastItemRef = useRef();
  const editRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (editRef.current) {
      editRef.current.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    if (lastItemRef.current) {
      lastItemRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [listItem]);

  const handleAddItem = () => {
    if (item) {
      setListItem([...listItem, { id: uuidv4(), name: item }]);
      setItem("");
      setError("");
    } else {
      setError("Field must not be empty");
      inputRef.current.focus();
    }
  };

  const handleDeleteItem = (itemId) => {
    const filteredItem = listItem.filter(
      (listElement) => listElement.id !== itemId
    );
    setListItem(filteredItem);
  };

  const handleEditItem = (editId, currentName) => {
    setNewItem(currentName);
    setIsEditing(editId);
  };

  const handleClearLists = () => {
    setListItem([]);
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      handleAddItem();
    }
  };

  return (
    <div
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          inputRef.current.focus();
        }
      }} // to make sure to focus to input if the user click on white space
      className="flex flex-col max-w-lg bg-green-400 min-h-screen  pt-10 items-center m-auto"
    >
      <h1 className="text-2xl font-bold mb-20">MY TODO LIST</h1>
      <div className="flex justify-evenly max-w-md w-full bg-sky-400 p-4 relative">
        <input
          className="max-w-[300px] w-full"
          type="text"
          value={item}
          placeholder="Enter item"
          onKeyDown={handleEnterKey}
          onChange={(event) => setItem(event.target.value)}
          ref={inputRef}
        />
        <button
          onClick={handleAddItem}
          className="bg-blue-600 py-1 px-3 cursor-pointer"
        >
          Add
        </button>
        <div className="absolute -bottom-1 left-10">
          {error ? <p className="text-red-500">{error}</p> : null}
        </div>
      </div>
      <ul className="flex flex-col max-w-md w-full border border-black py-2 px-6">
        {listItem.map((myitem, index) => {
          return (
            <li
              key={myitem.id}
              ref={index === listItem.length - 1 ? lastItemRef : null}
              className="flex justify-between items-center m-1"
            >
              {isEditing === myitem.id ? (
                <input
                  type="text"
                  value={newItem}
                  onChange={(event) => setNewItem(event.target.value)}
                  ref={editRef}
                />
              ) : (
                <span>{myitem.name}</span>
              )}

              <div className=" border border-blue-600 space-x-2">
                <button
                  onClick={() => handleEditItem(myitem.id, myitem.name)}
                  className="bg-green-600 p-1 cursor-pointer"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDeleteItem(myitem.id)}
                  className="bg-red-600 p-1 cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
        {listItem.length > 0 ? (
          <button
            onClick={handleClearLists}
            className="text-red-500 border border-red-500 w-[150px] m-auto"
          >
            Clear lists
          </button>
        ) : null}
      </ul>
    </div>
  );
};

export default Todo;
