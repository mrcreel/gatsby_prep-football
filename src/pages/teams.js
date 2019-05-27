import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Link,
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
      <h1>Teams</h1>
      <hr />
      {data.allTeamsJson.edges.map(team =>
        <div key={team.node.id} style={{margin: 0}}>
          <Link to="/teams">
            <p>{team.node.name}</p>
          </Link>
        </div>
      )}
      <hr />
      <p>
        Total teams: {data.allTeamsJson.totalCount}
      </p>
    </Layout>
  )
}

/**
graphql`
 query teamsQuery {
  allTeamsJson{
    edges{
      node{
        id
        name
        url
        status
      }
    }
  }
}
`
 */

export default TeamsPage