import {makeAutoObservable} from 'mobx'

class CounterStore{
  count = 0
  constructor(){
    makeAutoObservable(this)
  }
  addCount(){
    this.count++
  }
  get countNum(){
    return this.count+5
  }
}

const count = new CounterStore()
export default count