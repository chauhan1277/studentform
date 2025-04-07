// import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Frm from './components/form-design/frm';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Frm />}/>
      </Routes>
  );
}

export default App;
