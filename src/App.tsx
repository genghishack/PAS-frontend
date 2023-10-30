import React, {useState, useEffect, useCallback} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Auth} from 'aws-amplify';

import {AppContext} from "./context/AppContext";
import {onError} from "./libs/errorLib";
import {getUser} from './libs/userLib';
import Routes from './components/Routes/Routes';
import Header from "./components/Header/Header";

import './App.scss';
import {defaultUserObj, ResourceObj, UserObj} from "./types/App";

const App = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isEditor, setIsEditor] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserObj>(defaultUserObj);
  const [resources, setResources] = useState<ResourceObj[]>([]);

  const onLoad = useCallback(async () => {
    try {
      await Auth.currentSession();
      setIsAuthenticated(true);
      if (!currentUser.id) {
        const {data: user} = await getUser();
        setCurrentUser(user);
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
            isAuthenticated, setIsAuthenticated, isEditor, isAdmin,
            currentUser, setCurrentUser, resources, setResources
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
