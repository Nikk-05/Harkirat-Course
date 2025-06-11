import React, { lazy, useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
const Landing = lazy(() => import('./components/Landing'))
const DashBoard = lazy(() => import("./components/Dashboard.jsx"))
import { Count, Button } from './components/Counter.jsx'
import { CountContext } from './components/contextAPI.jsx'
import CountRecoil from './components/CountWithRecoil.jsx'


// function App() {
//   const navigate = useNavigate()
//   return (
//     <>
//       <div style={{ height: '2rem', background: "Black", color: 'white' }}>
//         <button onClick={() => navigate('/dashboard')}>DashBoard</button>
//         <button onClick={() => navigate('/')} >Landing</button>
//       </div>
//       <Routes>
//         <Route path="/dashboard" element={<DashBoard />} />
//         <Route path="/" element={<Landing />} />
//       </Routes>
//     </>
//   )
// }

// Prop Drilling
function App() {
  // const [count, setCount] = useState(0)
  // // Wrap anyone who wants to teleported value inside the provider
  // return (
  //   <>
  //   <CountContext.Provider value = {count}>
  //     <Count setCount={setCount} />
  //   </CountContext.Provider>  
  //   </>
  // )
  // --------------State Management-----------------------------
  return (
    <>
      <CountRecoil />
    </>
  )
}

export default App
