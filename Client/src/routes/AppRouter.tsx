import { Routes, Route } from 'react-router-dom'

import Home from '../components/pages/Home'
import Contact from '../components/pages/Contact'

function AppRouter() {
    return (
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/contact" Component={Contact} />
        </Routes>
    )
}

export default AppRouter
