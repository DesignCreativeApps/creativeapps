import React from "react"

import Layout from "../components/layout"
import { Helmet } from 'react-helmet';
import SEO from "../components/seo"
import headerStyles from '../components/header.module.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Helmet bodyAttributes={{ class: headerStyles.others }} />
    <div style={{height: '100vh'}}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
