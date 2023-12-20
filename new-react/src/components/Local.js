
import React, { useContext, useState, useRef } from 'react';
import './Local.css'
const Local = () => {
  const initialState = [1, 2, 3, 4, 5, 6];
  const [state, setState] = useState(["Arun", "raja", "ram", "gokul"]);
  const [data, setData] = useState(initialState);
  const [search, setSearch] = useState("")
  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
  }

  const dragenter = (e, position) => {
    dragOverItem.current = position;
  }

  const drop = (e) => {
    const copyListItems = [...data];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setData(copyListItems);
  }
  return (
    <div>
      {
        data.map((val, i) => {
          return (
            <div key={i} className="repeate"
              draggable
              onDragStart={(e) => dragStart(e, i)}
              onDragEnter={(e) => dragenter(e, i)}
              onDragEnd={drop}
            >{val}</div>
          )
        })
      }
      <input placeholder='search here' value={search} ></input>
      {
        state.map((val) => {
          return (
            <div>{val}</div>
          )
        })

      }
    </div>
  )
}

export default Local