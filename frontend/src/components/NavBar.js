import React , {useState} from 'react'
import styles from '../styles/NavBar.css'

function NavBar() {
    const [titulo, setTitulo] = useState('HN Feed')
    const [subTitulo, setSubTitulo] = useState('We <3 hacker news!')

    return (
        <div className='navBar'>
            <h1 className='titulo'>{titulo}</h1>
            <span></span>
            <h3 className='sub-titulo'>{subTitulo}</h3>
        </div>
    )
}

export default NavBar
