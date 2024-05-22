import { useState } from "react";
import {AppContext} from './utils/MyContext'
import {useRoutes,Link} from 'react-router-dom'
import routers from './router'
import './App.css'

function App() {
  const [count,setCount] = useState(0)
  const [show,setShow] = useState(false)
  const [name,setName] = useState('about')
  const [age,setAge] = useState(0)
  const element = useRoutes(routers)
  const addCount = ()=>{
    setCount(count+1)
  }
  const toggleShow = ()=>{
    setShow(!show)
  }
  const toggleName = ()=>{
    setName(name==='about'?'hello':'about')
  }
  const toggleAge = ()=>{
    setAge(age+1)
  }
  return (
    <AppContext.Provider value={count}>
      <button onClick={addCount}>{count}</button>
      {show ? '显示' : '隐藏'}<button onClick={toggleShow}>切换</button>
      <button onClick={toggleName}>{name}</button>
      <button onClick={toggleAge}>{age}</button>
      <Link to="/home">首页</Link>
      <Link to="/about">关于</Link>
      <br></br>---------
      {element}
    </AppContext.Provider>
  );
}

export default App;
