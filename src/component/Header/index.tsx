import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
function Header() {
    const openNewTab = () => {
        window.open('https://github.com/halong99t/test-sotatek.git')
    }
    return (
        <div className="header">
            <Link className="header-items" to="/">
                Add
            </Link>

            <Link className="header-items" to="/list">
                List
            </Link>

            <div className="header-open" onClick={openNewTab}>
                Open soure on Github
            </div>
        </div>
    )
}

export default Header
