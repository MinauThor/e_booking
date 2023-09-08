import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomeScreen from './views/HomeScreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/home' exact Component={HomeScreen} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
