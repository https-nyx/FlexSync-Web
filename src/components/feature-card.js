import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div className={`feature-card-feature-card ${props.rootClassName} `}>
      <svg viewBox="0 0 731.4285714285713 1024" className="feature-card-icon">
        <path
          d="M658.286 146.286h-585.143v709.714l292.571-280.571 50.857 48.571 241.714 232v-709.714zM665.143 73.143c8.571 0 17.143 1.714 25.143 5.143 25.143 9.714 41.143 33.143 41.143 58.857v736.571c0 25.714-16 49.143-41.143 58.857-8 3.429-16.571 4.571-25.143 4.571-17.714 0-34.286-6.286-47.429-18.286l-252-242.286-252 242.286c-13.143 12-29.714 18.857-47.429 18.857-8.571 0-17.143-1.714-25.143-5.143-25.143-9.714-41.143-33.143-41.143-58.857v-736.571c0-25.714 16-49.143 41.143-58.857 8-3.429 16.571-5.143 25.143-5.143h598.857z"
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
