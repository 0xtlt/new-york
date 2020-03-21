import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BigTitle from "../slices/big_title"
import Flash from "../slices/flash"
import TheArticle from "../slices/the_article"
import BigPicture from "../slices/big_picture"
import LittleGallery from "../slices/little_gallery"
import Footer from "../slices/footer"

function switchCase(mod, key) {
  let returnedValue = <h1>error slice mod : {mod.slice_type}</h1>

  switch (mod.slice_type) {
    case "big_title":
      returnedValue = <BigTitle key={key} data={mod} />
      break
    case "flash":
      returnedValue = <Flash key={key} data={mod} />
      break
    case "the_article":
      returnedValue = <TheArticle key={key} data={mod} />
      break
    case "big_picture":
      returnedValue = <BigPicture key={key} data={mod} />
      break
    case "little_gallery":
      returnedValue = <LittleGallery key={key} data={mod} />
      break
    case "footer":
      returnedValue = <Footer key={key} data={mod} />
      break
    default:
      break
  }

  return returnedValue
}

export default ({ data }) => {
  const DTA = data.prismicPage.data.body
  const HEADERS = data.prismicPage.data

  return (
    <Layout>
      <SEO
        title={HEADERS.page_title.text}
        description={HEADERS.page_description.text}
        cardimg={HEADERS.page_thumbnail.fixed.src}
        lang={"fr"}
      />
      {DTA.map((mod, index) => switchCase(mod, index))}
    </Layout>
  )
}

export const query = graphql`
  query pageQuery($handle: String!) {
    prismicPage(data: { handle: { text: { eq: $handle } } }) {
      data {
        handle {
          text
        }
        page_title {
          text
        }
        page_thumbnail {
          fixed(width: 1920) {
            src
          }
        }
        page_description {
          text
        }
        body {
          ... on PrismicPageBodyTheArticle {
            id
            slice_type
            primary {
              left_title {
                text
              }
              right_content {
                html
              }
            }
          }
          ... on PrismicPageBodyLittleGallery {
            id
            slice_type
            primary {
              second_picture {
                fluid(maxWidth: 500) {
                  ...GatsbyPrismicImageFluid
                }
              }
              left_text {
                html
              }
              last_one {
                fluid(maxWidth: 500) {
                  ...GatsbyPrismicImageFluid
                }
              }
              first_picture {
                fluid(maxWidth: 500) {
                  ...GatsbyPrismicImageFluid
                }
              }
            }
          }
          ... on PrismicPageBodyFooter {
            id
            primary {
              right_title {
                text
              }
              middle_text {
                text
              }
              left_title {
                text
              }
              date
              author_name {
                text
              }
            }
            slice_type
          }
          ... on PrismicPageBodyFlash {
            id
            slice_type
            primary {
              right_picture {
                fluid(maxWidth: 500) {
                  ...GatsbyPrismicImageFluid
                }
              }
              left_picture {
                fluid(maxWidth: 500) {
                  ...GatsbyPrismicImageFluid
                }
              }
              description_title {
                text
              }
            }
          }
          ... on PrismicPageBodyBigTitle {
            id
            slice_type
            primary {
              little_title {
                text
              }
              description {
                text
              }
              big_title {
                text
              }
            }
          }
          ... on PrismicPageBodyBigPicture {
            id
            slice_type
            primary {
              title {
                text
              }
              picture {
                fluid(maxWidth: 900) {
                  ...GatsbyPrismicImageFluid
                }
              }
              description {
                text
              }
            }
          }
        }
      }
    }
  }
`
