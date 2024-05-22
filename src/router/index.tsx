import About from '../views/about'
import Home from '../views/home'
import {Navigate} from 'react-router-dom'
import List from '../views/List'
import News from '../views/List/news'
import Message from '../views/List/message'

const routers = [
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/list',
    element: <List />,
    children:[
      {
        path:'news/:id',
        element:<News/>
      },
      {
        path:'message',
        element:<Message/>
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to='/about'/>
  },
]

export default routers