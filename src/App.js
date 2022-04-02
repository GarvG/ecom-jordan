import './App.css';
import{Routes,Route} from "react-router-dom"
import Homepage from './Pages/Homepage';
import Products from './Pages/Products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to="/Home" element={<Homepage/>}/>
        <Route to="/Products" element={<Products/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
