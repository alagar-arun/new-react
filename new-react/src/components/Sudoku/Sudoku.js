import React, { useRef } from 'react';
import './Sudoku.css';
import { useState } from 'react';

const Sudoku = () => {

    const Time = new Date();
    console.log(Time,"Time");


    // Time---------------------------------------------------------------------------------------------

    const initialState = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [numbers, setNumbers] = useState(initialState);

    const [inputval, setInputval] = useState();
    const [inputval1, setInputval1] = useState();
    // console.log(inputval1, "data");


    const [checkval, setCheckval] = useState("");
    const [checkval1, setCheckval1] = useState("");

    const [moves, setMoves] = useState(0);

    const reference = useRef();
    const reference1 = useRef();
    const reference2 = useRef();
    // console.log(moves);

    const addsytle = useRef()

    const Reset = (e) => {
        // reference.current.style.backgroundColor = ""
        e.preventDefault()
        setMoves(0);
        setInputval("");
        setInputval1("");
    }

    // if (inputval != null) {
    //     reference.current.style.backgroundColor = "yellowgreen"
    // }

    const inputUpdate = (ans) => {
        // const ans = reference.current;
        setCheckval(ans)
        console.log(ans, "ans");



    }

    const inputUpdate1 = (ans1) => {
        // const ans1 = reference1.current.value;
        console.log(ans1, "uuid");
        setCheckval1(ans1);

    }

    const getGame = (data) => {
        setMoves((pre) => pre + 1)
        // setCheckval(data)

        // switch ("") {
        //     case checkval:
        //         return setInputval(data);
        //         break;
        //     case checkval1:
        //         return setInputval1(data);
        //         break;
        //     default:
        //         break;
        // }

        if (checkval == 1) {
            setInputval(data);
            setCheckval('')
        }
        if (checkval1 == 2) {
            setInputval1(data);
            setCheckval1('')
        }


    }
    const Addbackground = () => {
        addsytle.current.className = "addBackColor"
    }

    return (
        <>
            <div className='sudoku'>
                <div className='sudoku_left'>

                    <div className='boxes'>
                        <div className='numberBox' ref={addsytle} onClick={Addbackground}>
                            <div>
                                <input className='input1' value={inputval} ref={reference} onClick={() => inputUpdate(1)}></input>
                                <input className='input1' value={3}></input>
                                <input className='input1' value={inputval1} ref={reference1} onClick={() => inputUpdate1(2)}    ></input>
                            </div>
                            <div>
                                <input className='input1' value={6}></input>
                                <input className='input1' value={7}></input>
                                <input className='input1' value={""}></input>
                            </div>
                            <div>
                                <input className='input1' value={""}></input>
                                <input className='input1' value={8}></input>
                                <input className='input1' value={1}></input>
                            </div>
                        </div>
                        <div className='numberBox'>
                            <div>
                                <input className='input1' value={2}></input>
                                <input className='input1' value={""}></input>
                                <input className='input1' value={3}></input>
                            </div>
                            <div>
                                <input className='input1' value={7}></input>
                                <input className='input1' value={""}></input>
                                <input className='input1' value={""}></input>
                            </div>
                            <div>
                                <input className='input1' value={8}></input>
                                <input className='input1' value={""}></input>
                                <input className='input1' value={9}></input>
                            </div>
                        </div>
                        <div className='numberBox'>
                            <div>
                                <input className='input1' value={4}></input>
                                <input className='input1' value={6}></input>
                                <input className='input1' value={""}></input>
                            </div>
                            <div>
                                <input className='input1' value={9}></input>
                                <input className='input1' value={""}></input>
                                <input className='input1' value={2}></input>
                            </div>
                            <div>
                                <input className='input1' value={1}></input>
                                <input className='input1' value={""}></input>
                                <input className='input1' value={""}></input>
                            </div>
                        </div>
                    </div>


                    <div className='boxes'>
                        <div className='numberBox'>
                            <div>
                                <input className='input1' value={""}></input>
                                <input className='input1' value={9}></input>
                                <input className='input1' value={1}></input>
                            </div>
                            <div>
                                <input className='input1' value={""}></input>
                                <input className='input1' value={7}></input>
                                <input className='input1' value={2}></input>
                            </div>
                            <div>
                                <input className='input1' value={""}></input>
                                <input className='input1' value={8}></input>
                                <input className='input1' value={5}></input>
                            </div>
                        </div>
                        <div className='numberBox'>
                            <div>
                                <input className='input1' value={4}></input>
                                <input className='input1' value={8}></input>
                                <input className='input1' value={""}></input>
                            </div>
                            <div>
                                <input className='input1' value={2}></input>
                                <input className='input1' value={1}></input>
                                <input className='input1' value={""}></input>
                            </div>
                            <div>
                                <input className='input1' value={""}></input>
                                <input className='input1' value={3}></input>
                                <input className='input1' value={9}></input>
                            </div>
                        </div>
                        <div className='numberBox'>
                            <div>
                                <input className='input1' value={""}></input>
                                <input className='input1' value={6}></input>
                                <input className='input1' value={9}></input>
                            </div>
                            <div>
                                <input className='input1' value={""}></input>
                                <input className='input1' value={5}></input>
                                <input className='input1' value={3}></input>
                            </div>
                            <div>
                                <input className='input1' value={""}></input>
                                <input className='input1' value={8}></input>
                                <input className='input1' value={""}></input>
                            </div>
                        </div>
                    </div>

                    <div className='boxes'>
                        <div className='numberBox'>
                            <div>
                                <input className='input1' value={2}></input>
                                <input className='input1' value={6}></input>
                                <input className='input1' value={""}></input>
                            </div>
                            <div>
                                <input className='input1' value={5}></input>
                                <input className='input1' value={4}></input>
                                <input className='input1' value={""}></input>
                            </div>
                            <div>
                                <input className='input1' value={""}></input>
                                <input className='input1' value={""}></input>
                                <input className='input1' value={1}></input>
                            </div>
                        </div>
                        <div className='numberBox'>
                            <div>
                                <input className='input1' value={6}></input>
                                <input className='input1' value={8}></input>
                                <input className='input1' value={""}></input>
                            </div>
                            <div>
                                <input className='input1' value={""}></input>
                                <input className='input1' value={6}></input>
                                <input className='input1' value={7}></input>
                            </div>
                            <div>
                                <input className='input1' value={2}></input>
                                <input className='input1' value={1}></input>
                                <input className='input1' value={""}></input>
                            </div>
                        </div>
                        <div className='numberBox'>
                            <div>
                                <input className='input1' value={5}></input>
                                <input className='input1' value={""}></input>
                                <input className='input1' value={1}></input>
                            </div>
                            <div>
                                <input className='input1' value={8}></input>
                                <input className='input1' value={9}></input>
                                <input className='input1' value={""}></input>
                            </div>
                            <div>
                                <input className='input1' value={""}></input>
                                <input className='input1' value={7}></input>
                                <input className='input1' value={""}></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sudoku_right'>
                    <div>
                        <button className='btn btn-primary play_btn'>Play</button>
                        <button className='btn btn-secondary play_btn ms-4' onClick={Reset}>reset</button>
                        <button className='btn btn-danger play_btn ms-4'>Back</button>
                    </div>
                    <div className='keyboard'>
                        {
                            numbers.map((val, i) => {
                                // console.log(val)
                                return (
                                    <button className='num_btn' onClick={() => getGame(val)} key={i}>{val}</button>
                                )
                            })
                        }
                    </div>
                    <p className='move'>{moves} moves</p>
                </div>
            </div>
            <button className='solve'>Solve the Game</button>
        </>
    )
}

export default Sudoku