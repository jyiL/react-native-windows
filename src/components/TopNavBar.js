/**
 * Created by qinjun on 2018/1/10.
 */

import React from 'react'
import Proptypes from 'prop-types'
import { Text, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { f, Color } from '../utils/config'

export default class TopNavBar extends React.Component {
  render () {
    const { leftIcon, rightIcon, title, onPress, onLeftPress, onRightPress, color, style } = this.props
    return <Animatable.View
      ref={node => { this.view = node }}
      style={[styles.topNav, style]}
    >
      <Text
        style={[styles.topFont, {fontSize: 16 * f, color}]}
        numberOfLines={1}
        onPress={onPress}
      >{title}</Text>
    </Animatable.View>
  }
}

TopNavBar.propTypes = {
  color: Proptypes.string,
  leftIcon: Proptypes.string,
  rightIcon: Proptypes.string,
  title: Proptypes.string,
  onLeftPress: Proptypes.func,
  onRightPress: Proptypes.func,
  style: Proptypes.object
}

TopNavBar.defaultProps = {
  leftIcon: 'chevron-left',
  color: '#fff'
}

const styles = StyleSheet.create({
  topNav: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingLeft: 16,
    // paddingRight: 16,
    height: 48 * f
  },
  topFont: {
    flex: 1,
    fontSize: 14 * f
  },
  topIcon: {
    paddingLeft: 16 * f,
    paddingRight: 16 * f,
    paddingTop: 6 * f,
    paddingBottom: 4 * f,
    minWidth: 36 * f
  }
})
