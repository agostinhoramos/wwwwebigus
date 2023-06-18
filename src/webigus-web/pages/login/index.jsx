import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import validator from 'validator'

import { AuthLayout } from '@/layouts/authLayout'

import IsLogin from './components/displayIsLogin'
import Login from './components/displayLogin'
import SignUp from './components/displaySignUp'
import Recover from './components/displayRecover'

import { notification } from 'antd';

import api from '@/services/api.js'

const Index = ({ token }) => {

    const router = useRouter();

    const [ displayView, setDisplayView ] = useState('')
    const [ actionEvent, setActionEvent ] = useState('')
    const [ contextData, setContextData ] = useState({})

    const [ textFName, setTextFName ] = useState(null);
    const [ textLName, setTextLName ] = useState(null);
    const [ textUserId, setTextUserId ] = useState(null);
    const [ textPassword, setTextPassword ] = useState(null);

    useEffect(() => {
      if (token) {
        router.push('/');
      }
    }, [token, router]);

    useEffect(() => {
      setDisplayView(!token?null:'')
    }, []);

    const showNotification = ({message, description}) => {
      notification.open({
        message: message,
        description: description,
        placement: 'topRight',
      });
    };

    useEffect(() => {
      const fetchData = async (arg) => {
        let obj, fname, lname, userId, password, response;

        switch( arg.from ){
          case 'isLogin':
            userId = arg.data.textUserId;
            response = await api.get(`user/${userId}/check`, {});
            if ( response.data.success ){
                setTextUserId(userId)
                setContextData(response.data.data)
                setDisplayView('login')
            }else{
                setDisplayView('signup')
            }
            break;
          case 'login':
            userId = arg.data.textUserId;
            password = arg.data.textPassword;

            var request = {password: password}
            request["username"] = userId
            if( validator.isEmail(userId) ){
              request["email"] = userId
            }

            response = await api.post(`auth/login`, request);
            if ( response.data.success ){
              router.push('/');
            }

            return response
          case 'signUp':
            // CODE
            fname = arg.data.textFName;
            lname = arg.data.textLName;
            userId = arg.data.textUserId;
            password = arg.data.textPassword;

            var request = {password:password,first_name:fname,last_name:lname,auth_provider:null}
            request["username"] = userId
            if( validator.isEmail(userId) ){
              request["email"] = userId
            }

            response = await api.post(`auth/register`, request);
            if ( response.data.success ){
              router.push('/get-started');
            }

            return response
          case 'recover':
            // CODE
            userId = arg.data.textUserId;
            console.log(userId, obj);

            response = {
              data: {
                success: true
              }
            }

            return response;
        }

        //const response = await api.get("auth/user", {});
        //console.log(response.data);
      };

      setActionEvent(() => fetchData);
    }, []);

    return (
      <>
        <Head>
            <title>Login | Newgus</title>
            <meta name="description" content="Newgus Access" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <AuthLayout>

          { displayView == null?
            <IsLogin
              textUserId={textUserId}
              setTextUserId={setTextUserId}
              actionEvent={actionEvent}
              />
          :''}

          { displayView == 'login'?
            <Login
              textUserId={textUserId}
              setTextUserId={setTextUserId}
              textPassword={textPassword}
              setTextPassword={setTextPassword}
              contextData={contextData}
              setDisplayView={setDisplayView}
              actionEvent={actionEvent}
              />
          :''}

          { displayView == 'signup'?
            <SignUp
              textFName={textFName}
              setTextFName={setTextFName}
              textLName={textLName}
              setTextLName={setTextLName}
              textUserId={textUserId}
              setTextUserId={setTextUserId}
              textPassword={textPassword}
              setTextPassword={setTextPassword}
              setDisplayView={setDisplayView}
              actionEvent={actionEvent}
              />
          :''}

          { displayView == 'recover'?
            <Recover
              textUserId={textUserId}
              setTextUserId={setTextUserId}
              setDisplayView={setDisplayView}
              actionEvent={actionEvent}
              />
          :''}

        </AuthLayout>

      </>
    )
}

export async function getServerSideProps({ req }) {

  const token = req.cookies.jwt;

  return {
    props: {
      token: token || null,
    },
  };

}


export default Index;