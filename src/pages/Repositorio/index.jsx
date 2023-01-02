import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa'
import api from '../../services/apis'
import {Container, Owner, BackButton, IssuesList, Labels, Pagination, Filtros} from './styles'

export default function Repositorio() {

  const {repositorio} = useParams()
  const [repositorios, setRepositorios] = useState({})
  const [issues, setIssues] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [filters, setFilter] = useState([
    {state: 'open', label: 'Abertas'},
    {state: 'closed', label: 'Fechadas'},
    {state: 'all', label: 'Todas'},

  ])
  const [filterState, setFilterState] = useState('open')

  useEffect(() => {

    async function load() {
      
      const [respositorioData, issuesData] = await Promise.all([
        api.get(`repos/${repositorio}`),
        api.get(`repos/${repositorio}/issues`, {
          params: {
            state: filterState,
            page,
            per_page: 6
          }
        })
      ])

      setRepositorios(respositorioData.data)
      setIssues(issuesData.data)
      setLoading(false)

    }

    load()

  }, [page, filters, filterState])

  function handlePage(p) {
    setPage(p === 'back' ? page - 1 : page + 1)
    window.scrollTo(0, 140)
  }

  if(loading) {

  } else {

    const numPaginas = repositorios.open_issues / 6

    return (
      <div className='container'>
  
        <Container>

          <BackButton to="/">
            <FaArrowLeft />
          </BackButton>
  
          <Owner>

            <img
            src={repositorios.owner.avatar_url}
            alt={repositorios.owner.login} />
    
            <div>
              <h2>{repositorios.full_name}</h2>
              <p>{repositorios.description}</p>
            </div>
            
          </Owner>

          <Filtros>
            <p className='resultados'>Mostrando {issues.length} resultados | Issues abertas: {repositorios.open_issues} </p>
            <div>
              <p>Status: </p>
              <select
              value={filterState}
              onChange={e => setFilterState(e.target.value)}>
                {filters.map((filter, index) => (
                  <option
                  key={filter.state}
                  value={filter.state}
                  >
                    {filter.label}
                  </option>
                ))}
              </select>
            </div> 
          </Filtros>

          <IssuesList>

            {issues.map(issue => (
              
              <li key={issue.id}>
                <div>
                  <Labels>
                    {issue.labels.map(label => (
                      <span key={label.id}>{label.name}</span>
                    ))}
                  </Labels>
                    
                  <h3><a href={issue.html_url} target='_blank'> {issue.title} </a></h3>
                </div>

                <div className='issuesUser'>
                  <img src={issue.user.avatar_url} />
                  <p className='openedNumber'>#{issue.number} criado por {issue.user.login}</p>
                </div>
                
              </li>
            ))}

          </IssuesList>
  
        </Container>

        <Pagination>
          <button
          type='button'
          onClick={() => handlePage('back')}
          disabled={page < 2}
          >
            Página Anterior
          </button>
          <button
          type='button'
          onClick={() => handlePage('next')}
          disabled={page >= numPaginas}
          >
            Próxima Página</button>
        </Pagination>  

      </div>
      
    )
  }

}