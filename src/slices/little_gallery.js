import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import PageWrapper from "../styles/pageWrapper"

const Wrapper = styled.div`
  display: flex;
  margin-top: 100px;

  @media (max-width: 1024px) {
    margin-top: 30px;
    flex-wrap: wrap;
  }
`

const Content = styled.div`
  width: calc(40% - 100px);
  margin-right: 100px;
  font-size: 1.1em;

  @media (max-width: 1024px) {
    width: 100%;
    font-size: 1em;
    margin-right: 0;
  }
`

const Gallery = styled.div`
  width: 60%;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 250px 250px;
  grid-template-areas: "left top" "left bottom";

  .gatsby-image-wrapper {
    filter: grayscale(100%);
    grid-area: bottom;

    &:first-child {
      grid-area: left;
    }

    &:last-child {
      grid-area: top;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    grid-template-rows: 150px 150px;
    grid-gap: 15px;
  }
`

function LittleGallery({ data }) {
  return (
    <PageWrapper>
      <Wrapper>
        <Content
          dangerouslySetInnerHTML={{ __html: data.primary.left_text.html }}
        />
        <Gallery>
          <Img fluid={data.primary.first_picture.fluid} />
          <Img fluid={data.primary.second_picture.fluid} />
          <Img fluid={data.primary.last_one.fluid} />
        </Gallery>
      </Wrapper>
    </PageWrapper>
  )
}

export default LittleGallery
