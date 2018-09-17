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
        <section>
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
											<small>{post.frontmatter.date} - <span className="is-interest">Programação</span></small>
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
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
