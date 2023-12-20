import Local from './components/Local';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import Test from './components/Test';
import { createContext, useContext } from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HonoTower from './components/HonoTower';
import './App.css';
import Sudoku from '../src/components/Sudoku/Sudoku'
import SudokuGame from './components/SudokuGame/SudokuGame';
import Searching from './components/Searrching/Searching';
import UserDetails from './components/UserDetails/UserDetails';
import Sort from './components/Searrching/Sort';
import UserDisplay from './components/UserDetails/UserDisplay';
import JumpSearch from './components/Searrching/JumpSearch';
import Drag from './components/Drag/Drag';
import CarRent from './components/CarRent/CarRent';
export const userDet = createContext();

function App() {

  const [data, setData] = useState([
    {
      name: "Arun",
      id_number: "fgf001",
      role: "dev",
      entrytime: "6"
    },
    {
      name: "Raj",
      id_number: "fgf002",
      role: "dev",
      entrytime: "8"
    },
    {
      name: "Pugal",
      id_number: "fgf003",
      role: "dev",
      entrytime: "7"
    }
  ]);

  // console.log(data, 'ghghghgh');
  const datas = { data, setData }
  
  return (
    <div className="App">

      <BrowserRouter>
        <div className='user_navbar'>
          <Link to="/"><p>userForm</p></Link>
          <Link to="/user"><p>UserDetails</p></Link>
        </div>
        <userDet.Provider value={datas}>
          <Routes>
            <Route path='/' element={<UserDetails />}></Route>
            <Route path='/user' element={<UserDisplay />}></Route>
          </Routes>
        </userDet.Provider> 
      </BrowserRouter> 

      {/* <BrowserRouter>
      <Link to='/test'> <button to>test</button></Link>
        <nameCon.Provider value={'names'}>
          <Routes>
            <Route path='/' element={<Local />}></Route>
            <Route path='/test' element={<Test />}></Route>
          </Routes>
        </nameCon.Provider >
      </BrowserRouter>  */}


      {/* <HonoTower/> */}
      {/* <SudokuGame/>  */}

      {/* <Local/> */}
      {/* <Sudoku/> */}

      {/* <Sort/> */}
      {/* <Searching/> */}

      {/* <JumpSearch /> */}

      {/* <Drag/> */}

      {/* <CarRent/> */}

    </div>
  );
}

export default App;
