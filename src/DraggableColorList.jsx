import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";

const DraggableColorList = SortableContainer(({ colors, removeColorBox }) => {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((c, idx) => (
        <DraggableColorBox
          index={idx}
          key={c.name}
          color={c.color}
          name={c.name}
          handleDelete={() => removeColorBox(c.name)}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
