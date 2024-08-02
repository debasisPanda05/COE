import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
// import DisplayHome from './components/DisplayHome'

const App = () => {
  return (
    <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
            <Sidebar/>
            <Display/>
        </div>
        <Player/>
        {/* <DisplayHome/> */}
       
      
    </div>
  )
}

export default App