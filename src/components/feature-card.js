import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div className={`feature-card-feature-card ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="feature-card-icon">
        <path
          d="M726 128q34 0 59 26t25 60v682l-298-128-298 128v-682q0-34 25-60t59-26h428z"
          className=""
        ></path>
      </svg>
      <div className="feature-card-container">
        <h2 className="feature-card-text">{props.title}</h2>
        <span className="feature-card-text1">{props.description}</span>
      </div>
    </div>
  )
}

FeatureCard.defaultProps = {
  title: 'Lorem ipsum',
  rootClassName: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
}

FeatureCard.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard
