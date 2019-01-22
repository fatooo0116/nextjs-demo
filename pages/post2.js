import {withRouter} from 'next/router'
import Layout from './components/MyLayout.js'
import fetch from 'isomorphic-unfetch'


const Content = withRouter((props) =>(
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
))



const Post2 = withRouter((props) => (
  <Layout>
    <Content />
  </Layout>
))






export default Post2
