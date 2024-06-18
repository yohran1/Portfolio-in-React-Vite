import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Login from './components/project/user/Login';
import Sobre from './components/pages/Sobre';
import Register from './components/project/user/Register';
import ForgotPassword from './components/project/user/ForgotPassword';
import SrMackfly from './components/project/components/pages/SrMackfly';
import PecaOnline from './components/project/components/pages/PecaOnline';
import Contato from './components/project/components/pages/Contato'
import SobreProject from './components/project/components/pages/Sobre';
import Error from './components/layout/Error';
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import loginReducer from './components/project/reducers/loginReducer'

const store = configureStore({
  reducer: {
    login: loginReducer
  }
})

function App() {
  return ( 
    <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/projeto/login' element={<Login />} />
            <Route path='/projeto/register' element={<Register />} />
            <Route path='/projeto/forgotpassword' element={<ForgotPassword />} />
            <Route path='/projeto/srmackfly' element={<SrMackfly />}/>
            <Route path='/projeto/pecaOnline' element={<PecaOnline />} />
            <Route path='/projeto/contato' element={<Contato />} />
            <Route path='/projeto/sobre' element={<SobreProject />} />
            <Route path='/projeto/error' element={<Error />} />
          </Routes> 
        </Provider>
    </BrowserRouter>
  );
}

export default App;
