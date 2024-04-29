import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PasswordRecovery } from './components/passwordRecovery/passwordRecovery';
import Login from './components/userLogin/login';
import Register from './components/userRegistration/register';
import Dashboard from './components/dasgboard/dashboard';
import Error from './components/dasgboard/error';
import Header from './pages/header';
import Password from './components/passwordRecovery/password';
import Questions from './components/passwordRecovery/questions';
import PasswordReset from './components/passwordRecovery/passwordmail';
import DashboardPassword from './components/dasgboard/passwordDashboard';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';
// import { useNavigate } from "react-router-dom"
// import { useEffect, useContext, useState } from "react";
// import { LoginContext } from './components/contextprovider/context';


function App() {
  // const [data, setData] = useState(false);

  // const { logindata, setLoginData } = useContext(LoginContext);


  // const history = useNavigate();

  // const DashboardValid = async () => {
  //   let token = localStorage.getItem("usersdatatoken");

  //   const res = await fetch("http://localhost:5001/validuser", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": token
  //     }
  //   });

  //   const data = await res.json();

  //   if (data.status == 401 || !data) {
  //     console.log("user not valid");
  //   } else {
  //     console.log("user verify");
  //     setLoginData(data)
  //     history("/dash");
  //   }
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     DashboardValid();
  //     setData(true)
  //   }, 2000)

  // }, [])
  return (
    <div className="App">
      {/* <Header></Header> */}
      {/* <Questions></Questions> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register></Register>}></Route>
          <Route path='/recovery' element={<PasswordRecovery></PasswordRecovery>}></Route>
          {/* <Route path='/password' element={<Password></Password>}></Route> */}
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/questions' element={<Questions></Questions>}></Route>

          {/* <Route path='/questions/:id/:token' element={<Questions></Questions>}></Route> */}
          <Route path='/passwordReset' element={<PasswordReset></PasswordReset>}></Route>
          {/* <Route path='/*' element={<Error></Error>}></Route> */}
          <Route path='/dash' element={<DashboardPassword></DashboardPassword>}></Route>
        </Routes>
      </BrowserRouter>
      {/* {
        data ? (
          <>
              <Header></Header>
              <Routes>
                <Route path='/' element={<Register></Register>}></Route>
                <Route path='/recovery' element={<PasswordRecovery></PasswordRecovery>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/*' element={<Error></Error>}></Route>
                <Route path='/dash' element={<Dashboard></Dashboard>}></Route>
              </Routes>
          </>

        ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      }
   */}
    </div>

  );
}

export default App;
