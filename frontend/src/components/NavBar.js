import React , {useState} from 'react'
import styles from '../styles/NavBar.css'

function NavBar() {
    const [titulo, setTitulo] = useState('HN FEED')
    const [subTitulo, setSubTitulo] = useState('We <3 hacker news!')

    return (
        <div className='navBar'>
            <h1 className='titulo'>{titulo}</h1>
            <span></span>
            <h3>{subTitulo}</h3>
        </div>
    )
}

export default NavBar
