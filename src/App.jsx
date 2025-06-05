import React from 'react'
import BirthdayForm from './components/BirthdayForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddBirthday from './pages/AddBirthday'    // Add this import
import ViewBirthday from './pages/ViewBirthday'  // Add this import


const App = () => {
  return (
    <div>
      <div>
        <Router>
          <Routes>
            <Route path = "/" element = {<Home />}/>
            <Route path="/add" element = {<AddBirthday /> } />
            <Route  path ="/view" element = {<ViewBirthday />} />
          </Routes>
        </Router>
        
      </div>
    </div>
  )
}

export default App