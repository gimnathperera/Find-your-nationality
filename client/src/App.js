import jwt_decode from 'jwt-decode';
import ReduxToastr from 'react-redux-toastr';

import DefaultLayout from './views/DefaultLayout';
import setJWTToken from './security/setJWT';
import './App.css';
const App = () => {
  const token = localStorage.getItem('token');

  if (token) {
    setJWTToken(token);

    const decodedToken = jwt_decode(token);

    const current_time = Date.now() / 1000;

    if (decodedToken.exp < current_time) {
      localStorage.clear();
      setJWTToken(false);
    }
  }

  return (
    <div className='App'>
      <ReduxToastr />
      <DefaultLayout />
    </div>
  );
};

export default App;
