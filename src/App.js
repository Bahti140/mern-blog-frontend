import { Routes, Route} from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from "@mui/material/Container";
import { Header } from "./components";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';



function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe()); 

  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route to path='/' element={<Home />}  />
          <Route to path='/posts/:id' element={<FullPost />}  />
          <Route to path='/posts/:id/edit' element={<AddPost />}  />
          <Route to path='/add-post' element={<AddPost />}  />
          <Route to path='/login' element={<Login />}  />
          <Route to path='/register' element={<Registration />}  />      
        </Routes>        
      </Container>
    </>
  );
}

export default App;
