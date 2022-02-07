import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import LayoutEm from './components/Layout/LayoutEm';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup'
import Signin from './components/pages/Signin';
import HomeEm from './components/pages/HomeEm';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout Context={Home}/>}></Route>
          <Route path='/signup' element={<Layout Context={Signup}/>}></Route>
          <Route path='/signin' element={<Layout Context={Signin}/>}></Route>
          <Route path='/em' element={<LayoutEm Context={HomeEm}/>}></Route>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
