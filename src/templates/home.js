import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingDSG = () => (
  <Layout>
    <Seo title="Using DSG" />
    <h1>
      Hello from a <b>Home Page</b>
    </h1>
    <p>This page is not created until requested by a user.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UsingDSG
