import React, { useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaPlus, FaSpinner, FaArrowRight, FaTimes, FaExclamationCircle, FaFolder,
  FaReact, FaVuejs, FaAngular, FaCode, FaMugHot, FaCopy
} from 'react-icons/fa'
import { Form, ButtonSubmit, List, DeleteButton, ListName, AlertError, Sugestoes } from './styles'
import api from '../../services/apis'

export default function Home() {

  const [input, setInput] = useState('')
  const [repositorios, setRepositorios] = useState( JSON.parse(localStorage.getItem('repos')) ?? [] )
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  const [messageError, setMessageError] = useState('Digite um repositório válido ou que não esteja na lista')
  const [sugestoesRepositorios, setSugestoesRepositorios] = useState([
    {
      icon: <FaReact />,
      name: 'React',
      path: 'facebook/react'
    },
    {
      icon: <FaVuejs />,
      name: 'VueJS',
      path: 'vuejs/vue'
    },
    {
      icon: <FaAngular />,
      name: 'Angular',
      path: 'angular/angular'
    },
    {
      icon: <FaCode />,
      name: 'Clean Code JavaScript',
      path: 'ryanmcdermott/clean-code-javascript'
    },
    {
      icon: <FaCode />,
      name: 'Coding Interview University',
      path: 'jwasham/coding-interview-university'
    },
    {
      icon: <FaMugHot />,
      name: 'Vagas Front-End',
      path: 'frontendbr/vagas'
    },
    {
      icon: <FaMugHot />,
      name: 'Vagas Back-End',
      path: 'backend-br/vagas'
    },
    {
      icon: <FaMugHot />,
      name: 'Vagas React',
      path: 'react-brasil/vagas'
    },
  ])

  useEffect(() => {
    localStorage.setItem('repos', JSON.stringify(repositorios))
  }, [repositorios])

    const handleSubmit = useCallback((e) => {

      e.preventDefault()
      
      async function submit() {

        setLoading(true)
        setAlert(null)

        try {

          if (input === '') {
            throw new Error('Digite algum repositório')
          }
          
          const response = await api.get(`repos/${input}`)
          const hasRepo = repositorios.find(repo => repo.name === input)

          if (hasRepo) {
            throw new Error('O repositório digitado já está na lista')
          }

          const dados = {
            name: response.data.full_name,
            id: response.data.id
          }

          setRepositorios([...repositorios, dados])
          setInput('')

        } catch(error) {


          setAlert(true)
        } finally {
          setLoading(false)
        }
      }

      submit()

    }, [input, repositorios])

    function handleInputChange(e) {
      setInput(e.target.value)
      setAlert(null)
    }

    const handleDelete = useCallback((repo) => {
      const find = repositorios.filter(r => r.name !== repo)
      setRepositorios(find)
    }, [repositorios])

    return (
      <div className='container'>

          <Form onSubmit={handleSubmit} error={alert}>

            <input
            type="text"
            placeholder='Adicionar Repositório'
            value={input}
            onChange={handleInputChange}
            />

            <ButtonSubmit Loading={loading ? 1 : 0}>
              {
                loading ? (
                  <FaSpinner color="#fff" size={14} />
                ) : (
                  <FaPlus color="#fff" size={14} />
                )
              }
            </ButtonSubmit>

            <AlertError>
              <FaExclamationCircle /> {messageError}
            </AlertError>

          </Form>

          <List>
              {repositorios.map(repo => (
                <li key={repo.id}>
                  <ListName>
                    <DeleteButton onClick={() => handleDelete(repo.name)}>
                      <FaTimes size={12}/>
                    </DeleteButton>
                    {repo.name}
                  </ListName>
                  <Link to={`/repositorio/${encodeURIComponent(repo.name)}`}><FaArrowRight size={14} /></Link>
                </li>
              ))}
          </List>

          <Sugestoes>
            <a
            onClick={() => {}}
            ><FaFolder /> Sugestões de Repositórios</a>
            <ul>
                {sugestoesRepositorios.map(sugestao => (
                  <li key={sugestao.name}>
                    <div className='sugestaoItem'>
                      {sugestao.icon}
                      {sugestao.name}
                    </div>
                    <div className='sugestaoPath'>
                      {sugestao.path}
                    </div>
                  </li>
                ))}
                
            </ul>
          </Sugestoes>

        </div>
    )
}