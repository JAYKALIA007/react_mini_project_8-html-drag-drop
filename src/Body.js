const Body = () => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("application/my-app", event.target.id);
    event.dataTransfer.effectAllowed = "move";
  };
  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const draggable_item = event.dataTransfer.getData("application/my-app");
    const drop_target = document.getElementById("drop_container");
    drop_target.appendChild(document.getElementById(draggable_item));
  };
  return (
    <div>
      <p>Body component</p>
      <div className="container">
        <div
          className="drag_container"
          id="drag_container"
          draggable="true"
          onDragStart={(event) => handleDragStart(event)}
        >
          Draggable item
        </div>
        <div
          className="drop_container"
          id="drop_container"
          onDragOver={(event) => handleDragOver(event)}
          onDrop={(event) => handleDrop(event)}
        >
          Drop container
        </div>
      </div>
    </div>
  );
};

export default Body;
