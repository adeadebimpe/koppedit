import React from 'react'

const NavItem = ({ url, name, type }) => {
    return (
        <li className="nav__item">
            {type ? <a className={type} href={url}>{name}</a> : <a href={url}>{name}</a>}
        </li>
    )
}

export default NavItem
