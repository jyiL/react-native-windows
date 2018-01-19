
/**
 * Created by womkim on 2018/1/7.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet } from 'react-native'
import { shadowStyles, f } from '../utils/config'
import * as Animatable from 'react-native-animatable'

export default class Card extends React.Component {
  // componentDidMount () {
  //   const { actionTime, animateAction } = this.props
  //   // this.view.bounceInUp(bounceInTime).then(endState => { console.log(endState) })
  //   this.view[animateAction](actionTime)
  // }
  animate = (animateAction, actionTime, delay = 100) => {
    console.log(animateAction)
    console.log(actionTime)
    console.log(delay)
    this.view[animateAction](actionTime, 'ease', delay)
  }

  render () {
    const { name, title, style, onPress } = this.props
    return <Animatable.View
      ref={node => { this.view = node }}
      style={[styles.cardWrapper, style]}
    >
      <Text style={styles.cardName}>{name}</Text>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardFoot} onPress={() => { onPress && onPress() }}>{'View'}</Text>
    </Animatable.View>
  }
}

Card.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
  // animateTime: PropTypes.number,
  // animateAction: PropTypes.string
}

Card.defaultProps = {
  // animateTime: 800,
  // animateAction: 'bounceInUp'
}

const styles = StyleSheet.create({
  cardWrapper: {
    marginTop: 6 * f,
    marginRight: 16 * f,
    marginBottom: 6 * f,
    marginLeft: 16 * f,
    paddingTop: 14 * f,
    paddingRight: 12 * f,
    paddingBottom: 14 * f,
    paddingLeft: 12 * f,
    borderRadius: 8 * f,
    backgroundColor: '#fff',
    ...shadowStyles
  },
  cardName: {
    color: '#bbb',
    fontSize: 14 * f
  },
  cardTitle: {
    color: '#000',
    fontSize: 16 * f,
    marginTop: 10 * f,
    marginBottom: 10 * f
  },
  cardFoot: {
    color: '#ff5e93',
    fontSize: 16 * f,
    textAlign: 'right'
  }
})
