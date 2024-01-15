import './App.css'
import { BrowserRouter,Routes,Route ,Navigate} from 'react-router-dom';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard'
import { Navigation } from './components/navigation';



function App(){

  return (
        
        <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route  path='/SignUp' element={<Register/>}/>
          <Route  path='/LogIn' element={<Login/>}/>
          <Route  path='/Dashboard' element={<Dashboard/>}/>
        </Routes>
        
        </BrowserRouter>
  )
}

export default App