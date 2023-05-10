/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { useStateContext } from '../components/HBOProvider';
import ls from 'local-storage'
import {v4} from 'uuid'
import { useRouter } from 'next/router';


export default function CreateUser() {
  const globalState = useStateContext();
  const router = useRouter();

  const backToLogin = () => {
    router.push('/login')
  }

  ls('name', 'Jonny')

  const saveUser = () => {
    let users = [],
    user;
    if (ls('users') < 1){
      user = {
        id:v4(),
        user: globalState.user,
        myListID: []
      }
      users.push(user)
      ls('users', users)
      router.push('/login')

      console.log('users:' , users)
      console.log('lsusers', ls('users'))
    } else{
      users = ls('users')
      user = {
        id:v4(),
        user: globalState.user,
        myListID: []
      }
      users.push(user)
      ls('users', users)
      console.log('users:' , users)
      console.log('lsusers', ls('users'))
      router.push('/login')
    }
  }
  console.log(globalState)
  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className='create-user__logo'>
          </div>
            <span className='create-user__title'>
              Who is watching?
            </span>
        </div>

        <div className='create-user__form'>
              <img className='create-user__user-img' src={globalState.defaultUserImg} alt="" />
              <div className='create-user__input-group'>
                  <label>Name:</label>
                  <input value={globalState.user} onChange={globalState.createUserAction} type="text" className='create-user__inputText'/>
                  <div className='create-user__colors'>
                      <div className='create-user__color create-user__color--active' 
                      style={{background: 'rgb(2,0,36)', background:'linear-gradient(360deg, rgba(2,0,36,1) 0%, rgba(27,27,138,1) 43%, rgba(0,212,255,1) 100%)'}}
                      />
                      <div className='create-user__color' 
                      style={{background: 'rgb(135,10,255)'}}/>
                      <div className='create-user__color' 
                      style={{background: 'white'}}
                      />
                      <div className='create-user__color' style={{background: 'blue'}}/>
                      <div className='create-user__color' style={{background: 'red'}}/>
                  </div>
              </div>
        </div>
        <div className='create-user__buttons'>
                <button className='create-user__save' onClick={backToLogin}>
                  Cancel</button>
                <button className='create-user__cancel' onClick={saveUser}>
                  Save</button>
        </div>
      </div>
    </div>
  )
}
