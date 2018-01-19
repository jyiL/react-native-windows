/**
 * Created by qinjun on 2018/1/8.
 */

import React from 'react'
import { Dimensions } from 'react-native'

export const width = Dimensions.get('window').width
export const height = Dimensions.get('window').height
export const f = width / 375
export const shadowStyles = {
  shadowColor: 'black',
  shadowOpacity: 0.1,
  shadowRadius: 4 * f,
  shadowOffset: {
    height: 4 * f
  },
  elevation: 4 * f
}
export const footerText = `Ruapicker © ${new Date().getFullYear()} Womkim`
export const Color = {
  gray: '#ccc',
  main: '#233333',
  footTextColor: '#f8f8f8',
  themeDark: '#000',
  themePink: '#ff5e93',
  themeBlue: '#1687ff',
  loadingText: '#fdfdfd',
  loadingBg: 'rgba(0, 0, 0, .15)',
  activeBtn: '#ff307d',
  activeBtnText: '#fff'
}
