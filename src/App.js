import React, { useEffect, useState } from 'react'
import './App.css';
import { get, post } from './utils'

import { Sidebar } from './Components/Sidebar'
import { Tile } from './Components/Tile'
import { Row } from './Components/Layout'

const App = () => {
  const [events, setEvents] = useState([])
  const [user, setUser] = useState({name: "Anders"})
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    get("/event/getAll").then(response => {
      setEvents(response.events)
    })
  }, [])
  return (
    <Row>
    <Sidebar user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Sidebar>
    {events.map((event, i) => (
      <Tile key={i} event={event}></Tile>
    ))}
    </Row>
  );
}

export default App;
