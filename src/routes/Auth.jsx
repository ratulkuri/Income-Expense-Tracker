import WebRoutes from './WebRoutes';

const Auth = () => {
    // let loggedIn = localStorage.getItem('sessionId') ? true : false;
    let loggedIn = true;

    if (loggedIn) {
        return (
          <>
            <WebRoutes />
          </>
        )
    }

    // return (
    //     <Routes>
    //         <Route exact path={'/*'} element={<Login />} />
    //         <Route path={'/login'} element={<Login />} />
    //         <Route path={'/registration'} element={<SignUp />} />
    //         <Route path={'/forget-password'} element={<ForgetPassword />} />
    //     </Routes>
    // );
}

export default Auth