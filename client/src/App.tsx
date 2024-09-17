import { Stack, Container } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

function App() {

  return (
    <>
      <div>
        <Stack h="100vh">
          <Navbar />
          <Container>
            <TodoForm />
            <TodoList />
          </Container>
        </Stack>
      </div>
    </>
  )
}

export default App
