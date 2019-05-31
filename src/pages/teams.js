import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  graphql,
  useStaticQuery
} from "gatsby"

const TeamsPage = () => {
  const data = useStaticQuery(graphql`
    query{
      allTeamsJson {
        totalCount
        edges{
          node{
            id
            slug
            name
            url
            status
          }
        }
      }
    }
  `)
  return(
    <Layout>
      <SEO title="Teams" />
      <ul>
        {data.allTeamsJson.edges.map(team =>
          <li key={team.node.id} style={{margin: 0, listStyleType: 'none'}} className='teamItem'>
              <div>
                <p>{team.node.name} =>  {team.node.slug} => {team.node.url}</p>
              </div>
          </li>
        )}
      </ul>
    </Layout>
  )
}

export default TeamsPage