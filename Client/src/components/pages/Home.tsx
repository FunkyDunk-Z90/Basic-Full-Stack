import { useAuthContext } from '../../hooks/auth/useAuthContext'

import Spinner from '../utils/Spinner'

function Home() {
    const { user, isLoading } = useAuthContext()
    return (
        <section className="wrapper home">
            <h1>Home</h1>
            {user ? <p>{user.username}</p> : <p>No User</p>}
            {isLoading && <Spinner />}
        </section>
    )
}

export default Home
