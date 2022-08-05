import { useEffect, useState } from 'react'
// import {Link} from 'react-router-dom'
import './App.css'
import axios from 'axios'
import SignUp from './components/signUp';

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
const csrftoken = getCookie('csrftoken');
axios.defaults.headers.common['X-CSRFToken']= csrftoken

function App() {
  const [user, setUser] = useState(null)

  // function signUp(){
  //   // this will come into effect once the it's a form to submit not a button you'll use get elementbyid().value to get the form values
  //   event.preventDefault
  //   axios.post('/sign_up', {
  //     email: 'jef@amazon.com', 
  //     password: 'dragons'
  //   }).then((response)=>{
  //     console.log('response from server: ', response)
  //   })
  // }
  function singIn(){
    event.preventDefault()
    axios.post('/sign_in', {
      email: 'jef@amazon.com', 
      password: 'dragons'
    }).then((response)=>{
      console.log('response from server: ', response)
      window.location.reload()
    })
  }
  function signOut(){
    event.preventDefault()
    axios.post('/sign_out').then((respone)=>{
      window.location.href=""
    })
  }

  async function curr_user(){
    const response = await axios.get('curr_user')
    const user = response.data && response.data[0] && response.data[0].fields
    setUser(user)
  }

  useEffect(()=>{
    curr_user()
  },[])


  return (
    <div className="App">
      <h1><strong>THE HAPPY PIG</strong></h1>
      {user && <p>Welcome, {user.email}</p>}
      {/* <button onClick={signUp}>Sign Up</button> */}
      <SignUp />
      {/* <Link to='/signup'>Sign Up</Link> */}
      <button onClick={singIn}>Sign In</button>
      <button onClick={signOut}>Sign Out</button>
      <hr/>
    </div>
  )
}

export default App
