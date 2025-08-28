import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

function Navbar() {
    const mobile = window.innerWidth < 768
    const [isMobile, setIsMobile] = useState(mobile)
    const [isActive, setIsActive] = useState(false)
    const [openStatus, setOpenStatus] = useState('')
    const navbarRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) {
                setIsActive(false)
                setOpenStatus('')
                setIsMobile(false)
            } else {
                setIsMobile(true)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(e.target as Node)
            ) {
                setIsActive(false)
                if (openStatus === 'opened') {
                    setOpenStatus('closed')
                }
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [openStatus, isActive])

    const toggleNav = () => {
        setIsActive(!isActive)

        if (isMobile) {
            if (!openStatus || openStatus === 'closed') {
                setOpenStatus('opened')
            } else {
                setOpenStatus('closed')
            }
        }
    }

    return (
        <>
            <div
                ref={navbarRef}
                className={`burgerIcon ${isActive ? 'active' : ''}`}
                onClick={toggleNav}
            >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <div className={`wrapper navbar ${openStatus}`}>
                <Link to={'/'} onClick={toggleNav}>
                    Home
                </Link>
                <Link to={'/contact'} onClick={toggleNav}>
                    Contact
                </Link>
            </div>
        </>
    )
}

export default Navbar
