import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import LeftMenu from '../components/LeftMenu'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <div className="container content">
          <div className="columns">
            <div className="column is-four-fifth">
              <section className="section">
                <div>
                  {posts
                    .map(({ node: post }) => (
                      <div
                        className="content has-text-left"
                        style={{ borderBottom: '1px solid #eaecee', padding: '0px 0px 12px 0px' }}
                        key={post.id}
                      >
                        <p>
                          <Link className="has-text-primary" to={post.fields.slug}>
                            <h2 className="is-post-title">{post.frontmatter.title}</h2>
                          </Link>
                          <div className="icons">
                            <i className="far fa-clock"></i>
                            &nbsp;&nbsp;
                            <small>{post.frontmatter.date} -&nbsp;
                            
                            { post.frontmatter.categories && post.frontmatter.categories.length ? (
                                post.frontmatter.categories.map((category) => (
                                  <span className="is-interest">{category}</span>
                                ))
                              ) : null}
                            </small>
                          </div>
                        </p>
                        <p className="is-post-content">
                          {post.excerpt}
                          <br />
                          <br />
                          <Link className="is-small" to={post.fields.slug}>
                            Continuar Lendo →
                          </Link>
                        </p>
                      </div>
                    ))}
                </div>
              </section>
            </div>
            <div className="column is-one-fifth is-offset-1">
              <section className="section">
                <LeftMenu />
              </section>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "DD \\d\\e MMMM \\d\\e YYYY", locale: "pt-br")
            categories
          }
        }
      }
    }
  }
`
