import {makeAutoObservable,runInAction} from 'mobx'

interface userType{
  name?: string
}
class UserStore{
  userList:userType = {}
  constructor(){
    makeAutoObservable(this)
  }
  async getUserList(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
    response.json().then(res=>{
      runInAction(()=>{ // 严格模式下异步赋值放到里面
        this.userList = res
        console.log(this.userList)
      })
    })
  }
}

const user = new UserStore()
export default user