/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStateContext } from '../components/HBOProvider';
import Login from '../components/UI/Login/Login';


export default function Home() {
  const globalState = useStateContext();
  const router = useRouter()


  useEffect(()=>{
    const loggedIn = false;
    if(loggedIn == false){
      router.push('/create')
    }
  }, [])
  return (
    <div>
     <Login/>
    </div>
  )
}
