import React from 'react'

import counter from './modules/counterStore'
import user from './modules/userStore'

class RootStore{
  counterStore: typeof counter
  userStore: typeof user
  constructor(){
    this.counterStore = counter
    this.userStore = user
  }
}

const rootStore = new RootStore()

const context = React.createContext(rootStore)

const useStore = ()=> React.useContext(context)

export {useStore}