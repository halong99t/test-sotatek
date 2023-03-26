import { Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import NewTask from './page/NewTask'
import TodoList from './page/TodoList'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
    return (
        <Layout>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<NewTask />} />
                <Route path="/list" element={<TodoList />} />
            </Routes>
        </Layout>
    )
}

export default App
