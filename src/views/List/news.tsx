import { useNavigate, useParams } from "react-router-dom"

const News = ()=>{
  const {id} = useParams()
  const navigate = useNavigate()
  const routeHome = ()=>{
    navigate('/home',{state: {id: 1}})
  }
  return (
    <div>news-参数{id}
    <div onClick={routeHome}>跳转home</div>
    </div>
  )
}

export default News