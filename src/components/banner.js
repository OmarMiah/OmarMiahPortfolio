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
      blue: file(relativePath: { eq: "Blue.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pikachu_hi_pokemon: file(relativePath: { eq: "pikachu_hi_pokemon.jpg" }) {
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
          <div className="side-image left">
            <Img fluid={data.blue.childImageSharp.fluid} />
          </div>
          <div className="main-text">Omar Miah</div>
          <div className="main-image">
            <Img fluid={data.pikachu_hi_pokemon.childImageSharp.fluid} />
          </div>
          <div className="side-image right">
            <Img fluid={data.kkSlider.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
          <span>Scroll down</span>
        </div>
      </div>
      <div className="fixed-misc">Omar Miah Portfolio</div>
    </div>
  )
}

export default Banner
