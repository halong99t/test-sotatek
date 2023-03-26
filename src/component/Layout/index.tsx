import React from 'react'
import Header from '../Header'
import './styles.scss'
interface LayoutProps {
    children: React.ReactNode
}

function Layout(props: LayoutProps) {
    const { children } = props

    return (
        <div>
            <Header />
            <div className="layout">{children}</div>
        </div>
    )
}

export default Layout
