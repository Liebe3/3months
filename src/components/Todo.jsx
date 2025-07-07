import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [item, setItem] = useState("");
  const [listItem, setListItem] = useState([]);
  const [error, setError] = useState("");

  const [isEditing, setIsEditing] = useState(null); // stores the ID of the todo being edited
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
    if (item.trim() !== "") {
      setListItem([...listItem, { id: uuidv4(), name: item }]);
      setItem("");
      setError("");
    } else {
      setError("Field must not be empty");
      inputRef.current.focus();
    }
  };

  const handleDeleteItem = (itemId) => {
    setListItem(listItem.filter((todo) => todo.id !== itemId));
  };

  const handleEditItem = (editId, currentName) => {
    setNewItem(currentName);
    setIsEditing(editId);
  };

  const handleSaveEdit = () => {
    setListItem(
      listItem.map((todo) =>
        todo.id === isEditing ? { ...todo, name: newItem } : todo
      )
    );
    setIsEditing(null);
    setNewItem("");
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
      }}
      className="flex flex-col max-w-lg bg-green-400 min-h-screen pt-10 items-center m-auto"
    >
      <h1 className="text-2xl font-bold mb-20">MY TODO LIST</h1>

      <div className="flex justify-evenly max-w-md w-full bg-sky-400 p-4 relative">
        <input
          className="max-w-[300px] w-full"
          type="text"
          value={item}
          placeholder="Enter item"
          onKeyDown={handleEnterKey}
          onChange={(e) => setItem(e.target.value)}
          ref={inputRef}
        />
        <button
          onClick={handleAddItem}
          className="bg-blue-600 py-1 px-3 cursor-pointer"
        >
          Add
        </button>
        <div className="absolute -bottom-1 left-10">
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>

      <ul className="flex flex-col max-w-md w-full border border-black py-2 px-6">
        {listItem.map((todo, index) => (
          <li
            key={todo.id}
            ref={index === listItem.length - 1 ? lastItemRef : null}
            className="flex justify-between items-center m-1"
          >
            {isEditing === todo.id ? (
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                ref={editRef}
              />
            ) : (
              <span>{todo.name}</span>
            )}

            <button
              onClick={() => {
                if (isEditing === todo.id) {
                  handleSaveEdit(); // Save when editing
                } else {
                  handleEditItem(todo.id, todo.name); // Edit when not editing
                }
              }}
              className={`p-1 cursor-pointer ${
                isEditing === todo.id ? "bg-yellow-600" : "bg-green-600"
              }`}
            >
              {isEditing === todo.id ? "Save" : "Edit"}
            </button>

            <button
              onClick={() => handleDeleteItem(todo.id)}
              className="bg-red-600 p-1 cursor-pointer"
            >
              Delete
            </button>
          </li>
        ))}

        {listItem.length > 0 && (
          <button
            onClick={handleClearLists}
            className="text-red-500 border border-red-500 w-[150px] m-auto mt-4"
          >
            Clear lists
          </button>
        )}
      </ul>
    </div>
  );
};

export default Todo;
