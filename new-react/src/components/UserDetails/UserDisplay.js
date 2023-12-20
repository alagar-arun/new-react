import React, { useContext, useState } from 'react'
import { userDet } from '../../App';
import "./UserDetails.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const UserDisplay = () => {
    const dataed = useContext(userDet);
    const userValue = [...dataed.data]
    console.log(userValue, "userValue");
    const [search, setSearch] = useState("");
    const [searchCheck, setSearchCheck] = useState(true);
    const [arr, setArr] = useState([]);
    const [nameSearch, setNameSearch] = useState("")
    console.log(nameSearch, "arrr")

    // const FindtheUser = () => {
    //     if (search === "" || search === 0) {
    //         return -1
    //     }
    //     if (search <= 16) {
    //         const result = dataed.data.filter((detail) => {
    //             return +detail.entrytime <= search
    //         });
    //         console.log(result, "result");
    //         dataed.setData([...result])
    //     }
    // }

    // const showSearchResult = () => {
    //     setSearch(search);
    //     FindtheUser()
    //     setSearch("");
    // }
    
    const searchInputChange = (e) => {
        setSearch(+e.target.value);
    }

    return (
        <div className='all_data'>

            <div className='search'>
                <center>
                    <input placeholder='enter the entryTime' value={search} onChange={searchInputChange}></input>
                    {/* <button onClick={showSearchResult}>search</button> */}
                    {/* <button onClick={() => backbutton(data)}>back</button> */}
                    <input className='name_input' placeholder='Enter the name' value={nameSearch} onChange={(e) => setNameSearch(e.target.value)}></input>
                </center>
            </div>

            <div>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Role</th>
                            <th>entrytime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userValue.filter((user) => {
                                if (nameSearch) {
                                    if (nameSearch == "") {
                                        return user
                                    }
                                    if (user.name.toUpperCase().includes(nameSearch.toUpperCase())) {
                                        return user
                                    }
                                }
                                else {
                                    if (search == "") {
                                        return user
                                    }
                                    if (user.entrytime <= search) {
                                        return user
                                    }
                                }

                            })
                                .sort((a, b) => {
                                    return (+a.entrytime) - (+b.entrytime)
                                }).map((val, i) => {
                                    console.log(val, "valll")
                                    return (
                                        <tr key={i}>
                                            <td>{val.name}</td>
                                            <td>{val.id_number}</td>
                                            <td>{val.role}</td>
                                            <td>{val.entrytime.length==1?"0":""}{val.entrytime} : 00{val.entrytime<12?"am":"pm"}</td>
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
                {/* {
                    userValue.sort((a,b)=>{
                        return (+a.entrytime)-(+b.entrytime)
                    }).map((val, i) => {
                        console.log(val, "valll")
                     
                        return (
                            <div className='user_details card' key={i}>
                                <h5>{val.name}</h5>
                                <p>id: {val.id_number}</p>
                                <p>Role: {val.role}</p>
                                <span>entrytime: <span className='entrytime'>{val.entrytime}</span>AM</span>
                            </div>
                          
                        )
                    })
                } */}
            </div>
        </div>
    )
}

export default UserDisplay