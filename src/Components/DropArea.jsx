import React, { useState } from "react";

const DropArea = () => {
  const [droppedIcons, setDroppedIcons] = useState([]);
  const [draggedIcon, setDraggedIcon] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const icon = JSON.parse(e.dataTransfer.getData("icon"));

    const dropAreaRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - dropAreaRect.left;
    const y = e.clientY - dropAreaRect.top;

    if (draggedIcon) {
      // Rearrange existing icon
      setDroppedIcons(
        droppedIcons.map((i) =>
          i.name === draggedIcon.name ? { ...i, x, y } : i
        )
      );
      setDraggedIcon(null);
    } else {
      // Place new icon
      setDroppedIcons((prev) => [...prev, { ...icon, x, y }]);
    }
  };

  const handleDragStart = (e, icon) => {
    setDraggedIcon(icon);
    e.dataTransfer.setData("icon", JSON.stringify(icon));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        width: "80%",
        float: "right",
        minHeight: "100vh",
        position: "relative",
        minWidth: "80vw",
        border: "1px solid #000",
      }}
    >
      {droppedIcons.map((icon, index) => (
        <div
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, icon)}
          style={{
            position: "absolute",
            left: `${icon.x}px`,
            top: `${icon.y}px`,
            textDecoration:
              draggedIcon && draggedIcon.name === icon.name
                ? "line-through"
                : "none",
          }}
        >
          {icon.name}
        </div>
      ))}
    </div>
  );
};

export default DropArea;
