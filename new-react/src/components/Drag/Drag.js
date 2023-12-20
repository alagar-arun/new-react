import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import './Drag.css'

const Drag = () => {
    async function fetchData() {
        console.log('data is ready to get')
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res);
            })
        console.log("data was getted")
    }
    useEffect(() => {
        fetchData()
    }, [])
    const ref1 = useRef()
    const ref2 = useRef();
    const [data, setData] = useState("data")
    const [state, setState] = useState(["item1", "item2", "item3", "item4"])
    const dragStart = (e, position) => {
        ref1.current = position
        console.log(position, "start")
    }
    const dragEnter = (e, position) => {
        ref2.current = position
        console.log(position, "enter")
    }
    const DragEnd = () => {
        const copyItems = [...state];
        const dragItem = copyItems[ref1.current];
        copyItems.splice(ref1.current, 1);
        copyItems.splice(ref2.current, 0, dragItem);
        ref1.current = null;
        ref2.current = null;
        setState(copyItems)
    }

    async function Clicked() {
        console.log("first");
        const data = await setTimeout(() => {
            console.log("second")
            // setData("secomd and chenge")
        }, 2000)
        console.log("third")
    }
    const touch = () => {
        console.log("fjkfjk");
    }
    return (
        <>
            {data}
            <div>
                {
                    state.map((data, index) => {
                        return (
                            <div key={index} className='div1' onDragStart={(e) => dragStart(e, index)} draggable={true} onDragEnter={(e) => dragEnter(e, index)} onDragEnd={DragEnd}>{data}</div>
                        )
                    })
                }
            </div>
            {/* <button onClick={Clicked}>Click</button>
            <button onMouseEnter={touch}>hover</button> */}
        </>
    )
}

export default Drag