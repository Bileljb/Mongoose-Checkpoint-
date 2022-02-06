import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEdit from './components/AddEdit';
import Home from './components/Home';
import List from './components/List';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/list' element={<List/>}></Route>
        <Route path='/form' element={<AddEdit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
