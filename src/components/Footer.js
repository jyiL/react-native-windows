/**
 * Created by qinjun on 2018/1/8.
 */

import React from 'react'
import { View, Text } from 'react-native'
import { f, footerText, Color } from '../utils/config'
import * as Animatable from 'react-native-animatable'

export default class Footer extends React.Component {
  componentDidMount () {
    this.view.fadeInUp(800)
  }
  render () {
    const { style } = this.props
    return <Animatable.View
      ref={node => { this.view = node }}
      style={
        [
          {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 12 * f,
            height: 30
          },
          style
        ]
      }
    >
      <Text style={{color: Color.footTextColor, backgroundColor: 'transparent', fontSize: 12 * f}}>{footerText}</Text>
    </Animatable.View>
  }
}
