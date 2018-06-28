/* eslint-disable react/prop-types */
import React from "react"
import { Link } from "gatsby"
import TemplateWrapper from "../components/layout"

const Index = ({ transition }) => (
  <TemplateWrapper>
    <div style={transition && transition.style}>
      <h1>animals</h1>
      <div>
        <Link to="/cat/">Go to cat</Link>
      </div>
      <div>
        <Link to="/dog/">Go to dog</Link>
      </div>
      <div>
        <Link to="/long-page/">Go to long page</Link>
      </div>
    </div>
  </TemplateWrapper>
)

export default Index
