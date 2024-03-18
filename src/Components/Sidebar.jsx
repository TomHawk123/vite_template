import "./Sidebar.css";

const Sidebar = ({ icons }) => {
  return (
    <div className="sidebar">
      {icons.map((icon, index) => (
        <div
          key={index}
          draggable
          onDragStart={(e) =>
            e.dataTransfer.setData("icon", JSON.stringify(icon))
          }
        >
          {icon.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
