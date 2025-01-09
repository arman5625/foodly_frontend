// import logo from './logo.svg';
import { ThemeProvider } from '@emotion/react';
import './App.css';
import { CssBaseline } from '@mui/material';

import darkTheme from './Theme/Theme';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './State/Authentication/Action';
import { findCart } from './State/Cart/Action';
import Routers from './Routers/Routers';
import { getRestaurantByUserId } from './State/Restaurant/Action';

function App() {

  const dispatch = useDispatch();
  const jwt=localStorage.getItem("jwt");
  const {auth} = useSelector(store=>store);
  

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt))

    dispatch(findCart(jwt));
  },[auth.jwt])

useEffect(()=>{
      dispatch(getRestaurantByUserId(auth.jwt || jwt));
},[auth.user])

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
          <Routers/>
      </ThemeProvider>

    </div>
  );
}

export default App;
