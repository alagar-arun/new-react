import React, { createContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './CarRent.css';
import AvailableCars from './Pages.js/AvailableCars';
import { CarsData } from './Pages.js/Data';
import Home from './Pages.js/Home';
import Nav from './Pages.js/Nav';
import OfficeTask from './Pages.js/OfficeTask';

export const CarsContext = createContext();
const CarRent = () => {
    return (
        <>
            <BrowserRouter>
                <CarsContext.Provider value={CarsData}>
                    <Nav/>
                    <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/cardetails' element={<AvailableCars />}></Route>
                        <Route path='/office' element={<OfficeTask />}></Route>
                    </Routes>
                </CarsContext.Provider>
            </BrowserRouter>
        </>
    )
}

export default CarRent