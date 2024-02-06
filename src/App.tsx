import React, {useState, useEffect, useCallback} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Auth} from 'aws-amplify';

import {AppContext} from "./context/AppContext";
import {onError} from "./lib/error";
import {getUser} from './lib/user';
import Routes from './components/Routes/Routes';
import Header from "./components/Header/Header";

import './App.scss';
import {
  ResourceObj
} from "./types/app";
import {CategoryObj, defaultCategoryObj} from "./types/category";
import {defaultProfessionalObj, ProfessionalObj} from "./types/professional";
import {defaultUserObj, UserObj} from "./types/user";
import {defaultResponseObj, defaultSessionObj, ResponseObj, SessionObj} from "./types/api";

const App = () => {
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>('');
  const [isEditor, setIsEditor] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserObj>(defaultUserObj);
  // const [session, setSession] = useState<SessionObj>(defaultSessionObj);

  const onLoad = useCallback(async () => {
    try {
      const currentSession = await Auth.currentSession();
      const currentCredentials = await Auth.currentCredentials(); // Gives you IdentityId
      console.log({currentSession, currentCredentials})
      setIsAuthenticated(true);
      const token: string = await currentSession.getAccessToken().getJwtToken();
      setAccessToken(token);
      if (!currentUser.id) {
        const {data: userFromAPI}: {data: UserObj} = await getUser();
        // setCurrentUser(userFromAPI);
        setCurrentUser({
          ...userFromAPI,
          isEditor: userFromAPI.roles.includes('Editor'),
          isAdmin: userFromAPI.roles.includes('Admin'),
          isUser: userFromAPI.roles.includes('User'),
          isGuest: false
        });
      }
    } catch (e: any) {
      if (e !== 'No current user' && e.code !== 'UserNotFoundException') {
        onError(e);
      }
    }
    setIsAuthenticating(false);
  }, [currentUser.id])

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  useEffect(() => {
    if (isAuthenticated && currentUser.roles) {
      setIsEditor(currentUser.roles.includes('Editor'));
      setIsAdmin(currentUser.roles.includes('Admin'));
    } else {
      setIsEditor(false);
      setIsAdmin(false);
    }
  }, [isAuthenticated, currentUser])

  return (
    <div className="App">
      {isAuthenticating ? (
        <>
          {/*  Loading indicator or null here */}
        </>
      ) : (
        <>
          <AppContext.Provider value={{
            isAuthenticated, isEditor, isAdmin, currentUser, accessToken,
            setIsAuthenticated, setCurrentUser
          }}>
            <Router>
              <Header/>
              <div id="main-container">
                <Routes/>
              </div>
            </Router>
          </AppContext.Provider>
        </>
      )}
    </div>
  )
}

export default App;
