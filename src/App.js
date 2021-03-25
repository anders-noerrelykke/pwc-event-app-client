import React, { useEffect, useState } from 'react'
import './App.css';
import { get, post } from './utils'

import { Sidebar } from './Components/Sidebar'
import { Tile } from './Components/Tile'
import { Row } from './Components/Layout'

const App = () => {
  const [events, setEvents] = useState([])
  const [user, setUser] = useState()
  const [users, setUsers] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('pwcEmail')) {
      post("/user/get", {email: localStorage.getItem('pwcEmail')}).then(response => {
        setUser(response.user)
        setLoggedIn(true)
      })
    }
  }, [])

  useEffect(() => {
    get("/userEvent/getAllEventsWithParticipants").then(response => {
      console.log(response)
      setEvents(response.events)
    })
  }, [])

  useEffect(() => {
    get('/user/getAll').then(response => {
      setUsers(response.users)
    })
  }, [])
  
  return (
    <Row>
    <Sidebar user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Sidebar>
    {events.map((event, i) => (
      <Tile key={i} event={event} events={events} setEvents={setEvents} user={user} loggedIn={loggedIn} users={users}></Tile>
    ))}
    </Row>
  );
}

export default App;
