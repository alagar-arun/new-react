// import React from 'react'
import React, { useContext, useRef, useState } from 'react'
import { userDet } from '../../../App';
import backgroungimg from '../../Assets/apple.jpg'
import InputAtom from '../../Atoms/Inputs/Index';
export default function Form() {

    const dataed = useContext(userDet)
    const reference = useRef();
    const [buttonChecking, setButtonChecking] = useState(true);

    const initialState = {
        name: "",
        id_number: "",
        role: "",
        entrytime: ""
    }

    const [value, setValue] = useState(initialState);
    console.log(value, "value");


    const inputChange = (e) => {

        // console.log(e.target.placeholder, "event");

        if (value.name == "" && value.id_number == "" && value.role == "" && value.entrytime == "") {
            setButtonChecking(true)
        }
        else {
            setButtonChecking(false);

        }

        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    }

    const updateUser = (e) => {
        e.preventDefault()
        dataed.setData([...dataed.data, value]);
        setValue(initialState);
        reference.current.focus();
    }
    

  return (
    <div className='backgroundimg'>
    <h1>Enter Your Details</h1>

    <div className='user_inputs'>
        <input ref={reference} placeholder='enter your Name' name='name' value={value.name} onChange={inputChange}  ></input>
       <InputAtom placeholder='enter your id_number' name='id_number' value={value.id_number} onChange={inputChange}/>
        {/* <input ></input> */}
        <input placeholder='enter your role' name='role' value={value.role} onChange={inputChange}></input>
        <input placeholder='enter your entrytime' name='entrytime' type="number" value={value.entrytime} onChange={inputChange}></input>
        <button onClick={updateUser} disabled={buttonChecking}>submit</button>
    </div>
</div>
  )
}
