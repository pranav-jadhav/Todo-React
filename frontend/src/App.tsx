import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodosContainer from './components/TodosContainer';
import SignIn from './components/Signin';
import SignUp from './components/SignUp';


function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<TodosContainer />} />
          </Routes>
      </Router>
    </>
  )
}

export default App;
