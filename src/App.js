import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Sets from './pages/Sets/sets';
import SignUp from './pages/SignUp/signup';
import Test from './pages/Test/test';
import Create from './pages/Create/create';

function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        {/*created 2 home paths one for when you start page other for the link not sure if that is proper way? */}
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/sets' element={<Sets />} />
        <Route path='/create' element={<Create />} />
        <Route path='/test' element={<Test />} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='*' component={<Home />} />
    </Routes>
    </Router>
);
}
  
export default App;