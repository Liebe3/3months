import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [item, setItem] = useState("");
  const [listItem, setListItem] = useState([]);

  const handleAddItem = () => {
    setListItem([...listItem, { id: uuidv4(), name: item }]);
    setItem("");
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      handleAddItem();
    }
  };

  const handleDeleteItem = (itemId) => {
    const filteredItem = listItem.filter(
      (listElement) => listElement.id !== itemId
    );
    setListItem(filteredItem);
  };
  return (
    <div className="flex flex-col max-w-lg bg-green-400 min-h-screen  pt-10 items-center m-auto">
      <h1 className="text-2xl font-bold mb-20">MY TODO LIST</h1>
      <div className="flex justify-evenly max-w-md w-full bg-sky-400 p-4">
        <input
          className="max-w-[300px] w-full"
          type="text"
          value={item}
          placeholder="Enter item"
          onKeyDown={handleEnterKey}
          onChange={(event) => setItem(event.target.value)}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <ul className="flex flex-col max-w-md w-full border border-black py-2 px-6">
        {listItem.map((myitem) => {
          return (
            <li
              key={myitem.id}
              className="flex justify-between items-center m-1"
            >
              {myitem.name}
              <div className=" border border-blue-600 space-x-2">
                <button className="bg-green-600 p-1 ">Edit</button>
                <button
                  onClick={() => handleDeleteItem(myitem.id)}
                  className="bg-red-600 p-1"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
