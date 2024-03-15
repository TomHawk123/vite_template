import React from "react";
import Sidebar from "../Components/Sidebar";
import DropArea from "../Components/DropArea";

const DragAndDrop = () => {
  const icons = [
    { name: "Trash", id: 1 },
    { name: "Email", id: 2 },
    { name: "Info", id: 3 },
    // Add more icons as needed
  ];

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar icons={icons} />
      <DropArea />
    </div>
  );
};

export default DragAndDrop;
