import React from 'react'
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil'
import { jobAtom, messageAtom, networkAtom, notificationAtom, totalNotificationSelector, } from './atoms.js'
import TodoComponent from './TodoComponent.jsx'


function App() {
  const networkAtomCount = useRecoilValue(networkAtom)
  const jobAtomCount = useRecoilValue(jobAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)
  const [messageAtomCount, setMessageAtomCount] = useRecoilState(messageAtom)
  // // As we have not wrap it under useMemo it will recalculate at every re-render
  // const totalNotificationCount = useMemo(() => {
  //   return networkAtomCount + jobAtomCount + notificationAtomCount + messageAtomCount;
  // }, [networkAtomCount, jobAtomCount, notificationAtomCount, messageAtomCount])
 
  // // Recoil provides a Selector which perform the same action
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  return (
    <>
      <button>Home</button>

      <button>My network {networkAtomCount >= 100 ? "99+" : networkAtomCount}</button>
      <button>Jobs {jobAtomCount === 0 ? null : jobAtomCount}</button>
      <button>Message {messageAtomCount === 0 ? null : messageAtomCount}</button>
      <button>Notification {notificationAtomCount}</button>
      {/* Now want sum of total notification on Profile button as count */}
      <button
        onClick={() => {
          setMessageAtomCount(messageAtomCount + 1)
        }}
      >Profile {totalNotificationCount}</button>
      <JobUpdation />
      {/* Todo with more than one Atom */}
      <TodoComponent id ={1}/>
      <TodoComponent id = {2}/>
    </>
  )
}

function JobUpdation() {
  const setJobAtomCount = useSetRecoilState(jobAtom)
  return (
    <button onClick={() => setJobAtomCount((prevJobAtomCount) => prevJobAtomCount + 1)} >Job Update</button>
  )
}

export default App
