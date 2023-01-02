import React from 'react'
import {
  FaGithub,
  FaPlus,
} from 'react-icons/fa'

export default function Header() {
    return(
        
        <header>
          <h1>
            <FaGithub size={25} />
            Meus Repositórios
          </h1>
        </header>
        
    )
}