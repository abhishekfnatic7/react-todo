import React, { useState } from 'react';


function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([1, 2, 3]);
  const [editIndex, setEdintIndex] = useState(null);
  const [editIndexValue, setEdintIndexValue] = useState("");
  const handleAdd = () => {
    setList((prev) => [...prev, todo])
    setTodo("");
  }
  const handleEdit = (index) => {
    setEdintIndex(index);
    setEdintIndexValue(list[index]);
  }
  const handleUpdate = (index, value) => {
    const todoList = [...list];
    todoList[index] = value;
    setList(todoList)
    setEdintIndex(null);
    setEdintIndexValue("");
  }
  const handleDelete = (index) => {
    console.log(index)
    return setList(list.filter((indexvalue, indexa) => indexa !== index));
  }
  return (
    <>
      <input type="text" name="" id="" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button type='button' onClick={handleAdd}>Add</button>
      {list.map((value, index) => (
        <p key={index}>
          {index === editIndex ? <>

            <input type="text" name='updatevalue' id='updatevalue' value={editIndexValue} onChange={(e) => setEdintIndexValue(e.target.value)} />
            <button type='button' onClick={() => handleUpdate(index, editIndexValue)}>Update</button>
          </> : <> <span>{value}</span>
            <button type='button' style={{ marginLeft: "20px" }} onClick={() => handleEdit(index)}>Edit</button>
            <button type='button' onClick={() => handleDelete(index)}>Delete</button>
          </>}

        </p>
      ))}
    </>
  );
}

export default App;
