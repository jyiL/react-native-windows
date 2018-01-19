/**
 * Created by qinjun on 2018/1/9.
 */

import React from 'react'
import PropTypes from 'prop-types'
import * as Animatable from 'react-native-animatable'
import { width, height, Color } from '../utils/config'

export default class CircleBg extends React.Component {
  run = () => {
    const { animateTime, ease, delay } = this.props
    this.view.transitionTo({top: -height / 2, left: -width}, animateTime, ease, delay)
  }

  hide = () => {
    const { animateTime, ease, delay } = this.props
    this.view.transitionTo({top: height / 2, left: width}, animateTime / 2, ease, delay)
  }

  render () {
    const { color } = this.props
    return <Animatable.View
      ref={node => { this.view = node }}
      style={{
        position: 'absolute',
        top: height / 2,
        left: width,
        width: height * 2,
        height: height * 2,
        borderRadius: height * 2,
        backgroundColor: color
      }}
    />
  }
}

CircleBg.propTypes = {
  color: PropTypes.string,
  animateTime: PropTypes.number,
  ease: PropTypes.string,
  delay: PropTypes.number
}

CircleBg.defaultProps = {
  color: Color.themePink,
  animateTime: 1500,
  ease: 'ease',
  delay: 0
}
