/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useStateContext } from '../../HBOProvider';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ls from 'local-storage';
import { useMounted } from '../../Hooks/useMounted';

const Login = () => {
  const globalState = useStateContext();
  const router = useRouter();
  const [loadingUsers, setLoadingUsers] = useState(false)
  let users = ls('users') !== null ? ls('users') : []
  let {hasMounted} = useMounted();

  useEffect(() => {
    if(users < 1){
      setLoadingUsers(false)
    }
    console.log('load effect:' , users)
  }, [])

  console.log('declared users:', users)
  const selectUser = (id) => {
    ls('activeUID', id)
    router.push('/')
  }
  const showUsers = () => {
    if(!loadingUsers){
      return users.map((user) => {
        return(
          <div onClick={selectUser} className='login-user__user-box' key={user.id}>
              <img className='login-user__user-img' src='https://randomuser.me/api/portraits/women/33.jpg' />
              <div className='login-user__user-name'>{user.user}</div>
            </div>
        )
      })
    }
  }
  const createUser = () => {
    router.push('/create')
  }

  
  return (
      <div className="login-user">
        <div className="login-user__top">
          <div className='login-user__logo'>
          </div>
            <span className='login-user__title'>
              Who is watching?
            </span>
        </div>

        <div className='login-user__form'>
            {hasMounted ? showUsers() : ''}
        </div>
        <div className='login-user__buttons'>
                <button className='login-user__adult' onClick={createUser}>
                  Create User</button>
              </div>
      </div>
   
  )
}

export default Login;