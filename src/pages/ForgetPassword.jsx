
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { appUrl } from '../utils/url'
import axios from 'axios'

export default function ForgetPassword() {
const navigate = useNavigate()
const [email, setEmail] = useState('')

const onChangeHandler = (e) =>{
  setEmail(e.target.value)
}

const forgotPasswordHandler = async (e) =>{
  e.preventDefault()
  try {
    const res = await axios.post(`${appUrl}/api/auth/forgotPassword`,{
    email
    })
    const data = await res.json()
    console.log(data)
    if(data){
      navigate('/recovery')
      return;
    }
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center front-semibold my-7'>Verify Email</h1>
  <form onSubmit={()=> forgotPasswordHandler}  className='flex flex-col gap-4'>
    <input type="email" placeholder="email" onChange={onChangeHandler} className='border p-3 rounded-lg' id='email'  required />
    <button className='bg-blue-700 p-3 rounded-lg uppercase text-white '>Verify Email</button>  
  </form>
  </div>
)
}
