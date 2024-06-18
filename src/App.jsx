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
            <Route path='/Portfolio-in-React-Vite/' element={<Home />} />
            <Route path='/Portfolio-in-React-Vite/sobre' element={<Sobre />} />
            <Route path='/Portfolio-in-React-Vite/projeto/login' element={<Login />} />
            <Route path='/Portfolio-in-React-Vite/projeto/register' element={<Register />} />
            <Route path='/Portfolio-in-React-Vite/projeto/forgotpassword' element={<ForgotPassword />} />
            <Route path='/Portfolio-in-React-Vite/projeto/srmackfly' element={<SrMackfly />}/>
            <Route path='/Portfolio-in-React-Vite/projeto/pecaOnline' element={<PecaOnline />} />
            <Route path='/Portfolio-in-React-Vite/projeto/contato' element={<Contato />} />
            <Route path='/Portfolio-in-React-Vite/projeto/sobre' element={<SobreProject />} />
            <Route path='/Portfolio-in-React-Vite/projeto/error' element={<Error />} />
          </Routes> 
        </Provider>
    </BrowserRouter>
  );
}

export default App;
