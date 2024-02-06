import React, {useCallback, useEffect, useState} from "react";
import {Auth} from "aws-amplify";
import {useNavigate} from "react-router-dom";

import {AuthContext} from "../context/AuthContext";
import {useAppContext} from '../context/AppContext';
import {useFormFields, useIsMountedRef} from "../lib/hooks";
import {getUser} from "../lib/user";
import {onError} from "../lib/error";
import Signup from "../components/Auth/Signup";
import SignupConfirmation from "../components/Auth/SignupConfirmation";
import ResetPassword from "../components/Auth/ResetPassword";
import ResetPasswordConfirmation from "../components/Auth/ResetPasswordConfirmation";
import ResetPasswordSuccess from "../components/Auth/ResetPasswordSuccess";
import ForceResetPassword from "../components/Auth/ForceResetPassword";
import Login from '../components/Auth/Login';

import './Auth.scss';

const AuthContainer = () => {
  const navigate = useNavigate();
  const isMountedRef = useIsMountedRef();
  const {setIsAuthenticated, currentUser, setCurrentUser} = useAppContext()
  const [authPhase, setAuthPhase] = useState('login');
  const [isLoading, setIsLoading] = useState(false);
  const [newUser, setNewUser] = useState(null);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    name: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
    resetCode: "",
    confirmationCode: "",
  });

  const clearPassword = useCallback(() => {
    fields.password = '';
  }, [fields]);

  const clearSensitiveFields = useCallback(() => {
    fields.newPassword = '';
    fields.confirmPassword = '';
    fields.resetCode = '';
    fields.confirmationCode = '';
  }, [fields]);

  const resetFormState = useCallback(() => {
    setIsLoading(false);
    clearSensitiveFields();
  }, [setIsLoading, clearSensitiveFields])

  //@ts-ignore
  useEffect(() => {
    if (currentUser.id) {
      if (isMountedRef.current) {
        clearPassword();
        resetFormState();
        navigate("/");
      }
    }
  }, [currentUser, clearPassword, resetFormState, navigate, isMountedRef]);

  const authPhaseTransition = (phase) => {
    resetFormState()
    setAuthPhase(phase);
  }

  const updateStateWithCurrentUser = async () => {
    const user = await getUser();
    setCurrentUser(user.data);
  }

  const attemptSignin = async () => {
    try {
      const signin = await Auth.signIn(fields.email, fields.password);
      if (signin.challengeName) {
        switch (signin.challengeName) {
          case 'NEW_PASSWORD_REQUIRED':
            setNewUser(signin);
            authPhaseTransition('forceResetPassword');
            break;
          default:
            alert(signin.challengeName);
        }
      } else {
        setIsAuthenticated(true);
        await updateStateWithCurrentUser();
      }
    } catch (e: any) {
      if (authPhase === 'signup' && e.code === 'NotAuthorizedException') {
        alert('User already exists.');
      }
      if (e.code === 'UserNotConfirmedException') {
        authPhaseTransition('signupConfirmation');
      } else {
        onError(e);
        setIsLoading(false);
      }
    }
  }

  const renderAuthPhase = () => {
    switch (authPhase) {
      case 'signup':
        return <Signup/>;
      case 'signupConfirmation':
        return <SignupConfirmation/>;
      case 'resetPassword':
        return <ResetPassword/>;
      case 'resetPasswordConfirmation':
        return <ResetPasswordConfirmation/>
      case 'resetPasswordSuccess':
        return <ResetPasswordSuccess/>;
      case 'forceResetPassword':
        return <ForceResetPassword/>
      case 'login':
      default:
        return <Login/>;
    }
  }

  return (
    <div className="Auth AuthContainer">
      <AuthContext.Provider value={{
        isLoading, setIsLoading,
        fields, handleFieldChange,
        newUser, attemptSignin,
        authPhaseTransition,
      }}>
        {renderAuthPhase()}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthContainer;
