/** @format */

import { createContext, useContext, useState } from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios';
// const baseUrl= "http://0.0.0.0:8000"
const baseUrl = 'https://partyistic.herokuapp.com';

const tokenUrl = baseUrl + '/api/token/';
console.log(baseUrl);
const AuthContext = createContext();

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error('You forgot AuthProvider!');
  return auth;
}

export function AuthProvider(props) {
  const [state, setState] = useState({
    tokens: null,
    user: null,
    Login,
    Logout,
  });

  async function Login(email, password) {
    const response = await axios.post(tokenUrl, { email, password });
    console.log(response, 'responce');
    const decodedAccess = jwt.decode(response.data.access);
    console.log(decodedAccess, 'decodedacses');

    const newState = {
      tokens: response.data,
      user: {
        user_name: decodedAccess.user_name,
        email: decodedAccess.email,
        id: decodedAccess.user_id,
      },
    };
    setState((prevState) => ({ ...prevState, ...newState }));
  }

  function Logout() {
    const newState = {
      tokens: null,
      user: null,
    };
    setState((prevState) => ({ ...prevState, ...newState }));
  }

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}
