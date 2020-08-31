import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO() {

const seo = useStaticQuery(graphql` 
  query {
    allContentfulSeo {
      edges {
        node {
          description
          title
          keywords
        }
      }
    }
  }
  `)
  const { title, description, keywords } = seo.allContentfulSeo.edges[0].node

  return (
     <Helmet>
         <title>{title}</title>
          <link rel="canonical" href="https://koppedit.com" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
     </Helmet>
  )
}

export default SEO