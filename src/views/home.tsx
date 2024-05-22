import {useAppSelector, useAppDispatch} from '../redux/store'
import {increment, decrement} from '../redux/modules/counterSlice'
import { fetchUserById } from '../redux/modules/userSlice'
import { useEffect } from 'react'

function Home(){
  const counter = useAppSelector((state)=>state.counter.value)
  const user = useAppSelector((state)=>state.user.data)
  console.log(user)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(fetchUserById(1))
  },[dispatch])
  return <div>
    <button onClick={()=>dispatch(increment())}>增加</button>
    <span>{counter}</span>
    <button onClick={()=>dispatch(decrement())}>减少</button>
  </div>
}

export default Home