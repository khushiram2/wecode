import './App.css';
import { Route , Routes} from "react-router-dom"
import { Amazon } from './Amazon';
import { Flipcart } from './Flipcart';
import { Snapdeal } from './Snapdeal';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';



function App() {
  const navigate=useNavigate()
  return (
    <div className="App">
      <AppBar  position="static">
      <Toolbar  disableGutters>
        <div className='d-flex'>
      <Button
       variant="contained"
       onClick={()=>navigate("/amazon")}
        >Amazon</Button>
      <Button 
       variant="contained"
      onClick={()=>navigate("/flipcart")}
      >Flipcart</Button>
      <Button 
       variant="contained"
      onClick={()=>navigate("/snapdeal")}
       >Snapdeal</Button>
       </div>
      </Toolbar>
      </AppBar>
      <div className='container'>
      <Routes>
      
        <Route path='/amazon'   element={<Amazon/>}  />
        <Route path='/flipcart' element={<Flipcart/>}  />
        <Route path='/snapdeal' element={<Snapdeal/>}  />
       
      </Routes>
      </div>
    </div>
  );
}

export default App;
