import React from 'react'
import './NavbarOption.css'

export default function NavbarOption({ active, Icon }) {
    return (
        <div className={`navbarOption ${active && 'navbarOption--active'}`}>
            <Icon style={{fontSize: "2rem"}}/>
        </div>
    )
}
