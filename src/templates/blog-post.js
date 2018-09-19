import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import LeftMenu from '../components/LeftMenu'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  categories,
  date,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="container content">
      <div className="columns">
        <div className="column is-four-fifth">
          <section className="section">
            {helmet || ''}
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}<br /><small>Publicado em {date}.</small>
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>
        </div>
        <div className="column is-one-fifth is-offset-1">
          <section className="section">
            <LeftMenu />
          </section>
        </div>
      </div>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        date={post.frontmatter.date}
        helmet={
          <Helmet>
            <title>{`${post.frontmatter.title} | Blog`}</title>

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@niltonheck" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="http://bits.blogs.nytimes.com/2011/12/08/a-twitter-for-my-sister/" />
            <meta property="og:title" content={post.frontmatter.title} />
            <meta property="og:description" content={post.frontmatter.description} />
            <meta property="og:image" content={post.frontmatter.image} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        categories={post.frontmatter.categories}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY", locale: "pt-br")
        title
        description
        tags
        categories
      }
    }
  }
`
