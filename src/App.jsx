
import './App.css'
import Dashboard from './pages/dashboard/Dashboard';
import Signup from './pages/signup/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ChakraProvider, theme } from '@chakra-ui/react'

function App() {

  return (
    // <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router>
    // </ChakraProvider>

  )
}

export default App;
