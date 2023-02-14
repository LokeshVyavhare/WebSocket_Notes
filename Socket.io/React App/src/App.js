import { Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './Components/Auth/Signin';
import SignUp from './Components/Auth/SignUp';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
