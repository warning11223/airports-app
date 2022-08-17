import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'

import './App.css';
import Navigation from "./pages/Navigation";
import Auth from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
import AirportDetailPage from "./pages/AirportDetailPage";
import {useSelector} from "react-redux";
import {RootState} from "./store";



const App: React.FC = () => {
    const { isAuth } = useSelector((state: RootState) => state.auth)


    return (
      <>
          <Navigation />
          <Routes>
              <Route path='/' element={isAuth ? <MainPage /> : <Navigate to="/auth" replace={true} />}/>
              <Route path='/auth' element={<Auth />}/>
              <Route path='/airports/:id' element={<AirportDetailPage />}/>
          </Routes>
      </>

  );
}

export default App;
