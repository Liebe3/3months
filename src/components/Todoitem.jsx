import React from "react";

const Todoitem = ({ myitem, handleDeleteItem }) => {
  return (
    <>
      <li className="flex items-center border-b border-b-white w-full py-2 space-x-8">
        <div className="flex w-full  max-w-[400px] p-2 text-white">
          {myitem.name}
        </div>
        <div className="flex  space-x-4 p-2 text-sm">
          <button className="p-2 bg-[#447D9B] rounded cursor-pointer text-[#FE7743] ">
            Edit
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
