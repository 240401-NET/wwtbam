// import SignUp from "./pages/SignUp"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import { UserProvider } from "./context/AuthContext"
// import AuthContext from "./context/AuthContext"

function App() {

  return (
    <Router>
      <UserProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Home />} />
        {/* <Route path="/auth" element={<AuthContext />} /> */}
      </Routes>
      </UserProvider>
    </Router>
  )
}

export default App
