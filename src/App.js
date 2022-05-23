import { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoadingAuth, setLoadingAuth] = useState(true);
  useEffect(() => {
    if(localStorage.getItem('auth')){
      setIsAuth(true);
    }
    setLoadingAuth(false);
  }, [])
  return (
    <AuthContext.Provider value={{isAuth, setIsAuth, isLoadingAuth}}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;