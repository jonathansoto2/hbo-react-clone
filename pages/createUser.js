import Head from 'next/head'
import Image from 'next/image'


export default function createUser() {
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
              <img className='create-user__user-img' src='https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=f05c14dd4db49f08a789e6449604c490' alt="" />
              <div className='create-user__input-group'>
                  <label>Name:</label>
                  <input type="text" className='create-user__inputText'/>
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
                <button className='create-user__save'>
                  Save</button>
                <button className='create-user__cancel'>
                  Cancel</button>
        </div>
      </div>
    </div>
  )
}
