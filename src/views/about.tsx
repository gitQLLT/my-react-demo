import { useContext, memo } from "react"
import {AppContext} from '../utils/MyContext'
import { Link } from "react-router-dom"
import {useStore} from '../mobx/store'
import {observer} from 'mobx-react-lite'

function About(){
  const count = useContext(AppContext)
  const store = useStore()
  return <>
    <div>{count}</div>
    <Link to="/home">home</Link>&nbsp;
    <Link to="/list">list</Link>
    <br></br>
    -----------
    <div onClick={()=>store.counterStore.addCount()}>
      {store.counterStore.count}
      <br></br>
      {store.counterStore.countNum}
    </div>
    ----user-----
    <div onClick={()=>store.userStore.getUserList()}>
      {store.userStore.userList.name || 'xxxx'}
    </div>
  </>
}

export default memo(observer(About))