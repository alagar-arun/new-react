import React, { useState, useRef } from 'react';
import { useContext } from 'react';
import { CarsContext } from '../CarRent';
import { HiArrowLongDown, HiArrowLongUp } from 'react-icons/hi2'

const CarDetails = () => {
    const ref = useRef();
    const [carform, setCarform] = useState(false)
    const initialState = useContext(CarsContext);
    const [carsData, setCarsData] = useState(initialState);
    const [tempData, setTempData] = useState({
        car: "",
        startDate: "",
        endDate: "",
        driver: ""
    });


    const [customer, setCostomer] = useState([]);
    console.log(customer, "customer")


    const SortByPriceLow = () => {
        console.log(typeof (+carsData[0].price), "carsData")
        for (let i = 1; i < carsData.length; i++) {

            for (let j = i - 1; j > -1; j--) {

                if ((+carsData[j + 1].price) < (+carsData[j].price)) {

                    [carsData[j + 1], carsData[j]] = [carsData[j], carsData[j + 1]];

                }
            }
        };
        return setCarsData([...carsData])
    }

    const SortByPriceHigh = () => {
        for (let i = 1; i < carsData.length; i++) {

            for (let j = i - 1; j > -1; j--) {

                if ((+carsData[j + 1].price) > (+carsData[j].price)) {

                    [carsData[j + 1], carsData[j]] = [carsData[j], carsData[j + 1]];

                }
            }
        };
        return setCarsData([...carsData])
    }

    const oninputChange = (e) => {
        setTempData({
            ...tempData,
            [e.target.name]: e.target.value
        })
    }

    const ShowForm = () => {
        setCarform(!carform)
    }

    const cancel = () => {
        setCarform(false);
        setTempData({
            car: "",
            startDate: "",
            endDate: "",
            driver: ""
        })
    }

    const reduceCars = (e) => {
        e.preventDefault();
        if (tempData.car.length > 0) {
            console.log(tempData.car);
            const compare = carsData.filter((val) => {
                if (val.name == tempData.car && val.count!=0) {
                    val.count = (+val.count) - 1
                }
                else if(val.name == tempData.car && val.count==0){
                   alert("car is not available please book a another car")
                }
            })
            console.log(compare, "bbbbb");
        }
       
        setTempData({
            car: "",
            startDate: "",
            endDate: "",
            driver: ""
        });
        setCarform(false);
    }
    return (
        <>
            <div className={carform ? "car_book" : "car_book_none"}>
                <div className="car_input">
                    <label>Cars</label>
                    <select onChange={oninputChange} name="car" className="car_input" value={tempData.car}>
                        {carsData.map((option) => (
                            <option value={option.name}>{option.name}</option>
                        ))}
                    </select>
                </div>

                <div className="car_input">
                    <label>StartDate</label>
                    <input placeholder="data" type="date" name="startDate" onChange={oninputChange} className="car_input" value={tempData.startDate}></input>
                </div>

                <div className="car_input">
                    <label>EndDate</label>
                    <input placeholder="data" type="date" name="endDate" onChange={oninputChange} className="car_input" value={tempData.endDate}></input>
                </div>

                <div className="car_input">
                    <label>You need a Driver</label>
                    <select name="driver" onChange={oninputChange} className="car_input">
                        <option value="no">no</option>
                        <option value="yes">yes</option>
                    </select>
                </div>

                <button onClick={(e) => reduceCars(e)} style={{width:"106px"}}>Book</button>
                <button onClick={cancel} style={{backgroundColor:"red"}}>cancel</button>

            </div>
            <div className='allCars'>
                <div className='avilable_cars'>
                    <h2>AVAILABLE CARS</h2>
                    <button onClick={ShowForm} className="car_book_btn">Book</button>
                    <div className='sort_btn'>
                        <button onClick={SortByPriceLow} className="sort_btn ">Sort by rent <HiArrowLongDown /></button>
                        <button onClick={SortByPriceHigh} className="sort_btn">Sort by rent <HiArrowLongUp /></button>
                    </div>
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>model</th>
                                <th>mailage & fuel</th>
                                <th>price</th>
                                <th>Available Cars</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carsData.map((val, i) => {
                                    // console.log(val, "valll")
                                    return (
                                        <tr key={i}>
                                            <td>{val.name}</td>
                                            <td>{val.model}</td>
                                            <td>{val.mailage}</td>
                                            <td>{val.price}</td>
                                            <td>{val.count}</td>
                                            <td>{+val.count > 0 ? "Available" : "Not availabe"}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CarDetails