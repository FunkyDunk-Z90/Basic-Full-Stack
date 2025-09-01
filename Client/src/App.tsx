import { useEffect } from 'react'

import './scss/app.scss'

// Layout
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Routers
import AppRouter from './routes/AppRouter'

// Context
import { useAuthContext } from './hooks/auth/useAuthContext'

function App() {
    const { user, isLoading } = useAuthContext()
    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01
            document.documentElement.style.setProperty('--vh', `${vh}px`)
        }

        setVh()

        window.addEventListener('resize', setVh)

        return () => window.removeEventListener('resize', setVh)
    })

    console.log(user, isLoading)

    return (
        <section className="wrapper body">
            <Header businessName="My Webpage" />
            <section className="wrapper content">
                <AppRouter />
            </section>
            <Footer
                businessName="My Webpage"
                copyright="@realmsandbeyond 2025"
                links={[]}
            />
        </section>
    )
}

export default App
