import React from 'react'

import { Helmet } from 'react-helmet'

import './accounts.css'

const Accounts = (props) => {
  return (
    <div className="accounts-container">
      <Helmet>
        <title>Accounts - FlexSync</title>
        <meta property="og:title" content="Accounts - FlexSync" />
      </Helmet>
    </div>
  )
}

export default Accounts
