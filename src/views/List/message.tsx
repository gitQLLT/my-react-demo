import { useSearchParams } from "react-router-dom"


const Message = ()=>{
  const [search,setSearch] = useSearchParams()
  console.log(search.get('name'))
  return (
    <div onClick={()=>setSearch('name=ls')}>message</div>
  )
}

export default Message