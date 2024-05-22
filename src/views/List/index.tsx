import {NavLink, Outlet} from 'react-router-dom'

const List = ()=>{
  return (
    <>
      <div>list</div>
      <NavLink to="news/1">news</NavLink>&nbsp;
      <NavLink to="message?name=zs">message</NavLink>
      <Outlet></Outlet>
    </>
  )
}

export default List