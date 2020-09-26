import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      kkSlider: file(relativePath: { eq: "ACNH-KK-Header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="main-text">Omar Miah</div>
          <div className="main-image">
            <Img fluid={data.kkSlider.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
