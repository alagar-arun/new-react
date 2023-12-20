import React, { useState } from 'react'
import { workersTask } from './Data';
import "./Office.css";
import { BsFillBackspaceReverseFill } from "react-icons/bs";

const OfficeTask = () => {
  const initialState = {
    task: "",
    cost: "",
    duration: "",
    description: "",
    // id:
  }
  const [addTask, setAddTask] = useState(false)
  const [data, setData] = useState(initialState);
  const [workersTasks, setWorkersTasks] = useState(workersTask);
  console.log(workersTasks, "data");

  const Addtask = () => {
    setAddTask(!addTask)
  }

  const changeInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const SubmitTask = (e) => {
    e.preventDefault();
    setWorkersTasks([...workersTasks, data]);
    setData(initialState);
    setAddTask(!addTask)
  }

  const durationSort = () => {
    for (var i = 1; i < workersTasks.length; i++) {
      for (var j = i - 1; j > -1; j--) {
        if (parseInt((workersTasks[j + 1].duration)) < parseInt(workersTasks[j].duration)) {
          [workersTasks[j + 1], workersTasks[j]] = [workersTasks[j], workersTasks[j + 1]]
        }
      }
    }
    return setWorkersTasks([...workersTasks])
  }

  const taskComplete = (data) => {
    const completeData = workersTasks.filter((val, index) => { return index !== data });
    console.log(completeData, "comp");
    setWorkersTasks([...completeData])
  }
  const CancelTask = () => {
    setAddTask(false)
  }
  return (
    <>
      <div className='workers'>
        <div className={addTask ? "create_task" : "create_task_none"}>
          <input placeholder='task' value={data.task} name="task" onChange={changeInput}></input>
          <input placeholder='cost' value={data.cost} name="cost" onChange={changeInput} type="number"></input>
          <input placeholder='duration' value={data.duration} name="duration" onChange={changeInput} ></input>
          <textarea placeholder='description' value={data.description} name="description" onChange={changeInput}></textarea><br></br>
          <button onClick={SubmitTask} className='submit_task'>Submit</button><br></br>
          <button onClick={CancelTask} className='submit_task_1'>Cancel</button>
        </div>

        <button onClick={Addtask} className="add_task">Addtask</button>
        <button onClick={durationSort} className="taskbtn">Sort by a time duration</button>

        <h3>Weekly Task for Workers</h3>
        <div className='workers_allCard'>
          {
            workersTasks.map((data, i) => {
              // console.log(data, "data")
              return (
                <div className='card workrs_task' key={i}>
                  <h4>{data.task}</h4>
                  <p>Amount need  {data.cost}$</p>
                  <p>Time duration {data.duration}hours</p>
                  <p>{data.description}</p>
                  <button onClick={() => taskComplete(i)}>complete</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default OfficeTask