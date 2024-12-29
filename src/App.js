// import logo from './logo.svg';
import { ThemeProvider } from '@emotion/react';
import './App.css';
import { CssBaseline } from '@mui/material';

import darkTheme from './Theme/Theme';
import CustomerRoutes from './Routers/CustomerRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './component/State/Authentication/Action';

function App() {

  const dispatch = useDispatch();
  const jwt=localStorage.getItem("jwt");
  const {auth} = useSelector(store=>store);
  console.log("auth in home", auth);
  

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt))
  },[auth.jwt])

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
          <CustomerRoutes/>
      </ThemeProvider>

    </div>
  );
}

export default App;
