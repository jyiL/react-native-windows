import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, Animated, Easing, Dimensions, BackHandler, Alert } from 'react-native'
import * as Animatable from 'react-native-animatable'

import { f, Color, width, height } from '../utils/config'
import Card from '../components/Card'
import CircleBg from '../components/CircleBg'
import TopNavBar from '../components/TopNavBar'
import Footer from '../components/Footer'

const avatarWidth = 120
const baseAnimateTime = 600

export default class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      showCard: false,
      animateCount: 0,
      username: 'Womkim',
      BackHandler: BackHandler
    }
    this.hasState = true
  }

  onBackPressed = () => {
    if (this.state.animateCount === 0) {
      BackHandler.exitApp()
      return false
    }
    if (this.state.animateCount === 1) {
      this.onBack()
      return true
    }
  }

  addHandler = () => {
    this.hasState && this.state.BackHandler.addEventListener('hardwareBackPress', this.onBackPressed)
  }
  removeHandler = () => {
    this.hasState && this.state.BackHandler.removeEventListener('hardwareBackPress', this.onBackPressed)
  }

  componentWillMount () {
    this.addHandler()
  }

  componentDidMount () {
    this.topNav.view.slideOutUp(1)
    this.startBtn.bounceIn(800, 'ease', 300)
  }

  animateCards (type) {
    if (type === 'in') {
      this.card1.view.animate('bounceInUp', 1600)
      this.card2.view.animate('bounceInUp', 2000)
      this.card3.view.animate('bounceInUp', 2600)
    }
    if (type === 'out') {
      this.card1.view.animate('bounceOutDown', 1000)
      this.card2.view.animate('bounceOutDown', 700)
      this.card3.view.animate('bounceOutDown', 400)
    }
  }

  start () {
    try {
      this.topNav.view.slideInDown(800)
      this.circleBg.run()
      this.avatar.transitionTo({top: 98, left: 20, width: 60, height: 60}, baseAnimateTime, 'line', 100)
      this.title.transitionTo({top: 95, left: 90}, baseAnimateTime, 'line', 100)
      this.subTitle.transitionTo({top: 115, left: 90}, baseAnimateTime, 'line', 100)
      this.startBtn.bounceOut(800)
      this.setState({
        showCard: true,
        animateCount: 1
      }, () => {
        this.animateCards('in')
      })
    } catch (e) {
      console.log(e)
    }
  }

  onBack () {
    try {
      this.topNav.view.slideOutUp()
      this.circleBg.hide()
      this.avatar.transitionTo({top: height / 2 - avatarWidth, left: (width - avatarWidth) / 2, width: avatarWidth, height: avatarWidth}, baseAnimateTime, 'line', 320)
      this.title.transitionTo({top: height / 2 + 20, left: (width - 64) / 2}, baseAnimateTime, 'line', 180)
      this.subTitle.transitionTo({top: height / 2 + 55, left: 40}, baseAnimateTime, 'line', 180)
      this.startBtn.bounceIn(800)
      this.animateCards('out')
      this.setState({
        animateCount: 0
      })
    } catch (e) {
      console.log(e)
    }
  }

  closeApp () {
    BackHandler.exitApp()
  }

  handleRoutePress (route, params, action) {
    // this.removeHandler()
  }

  render () {
    return <View style={{flex: 1}}>
      <Animatable.View style={{position: 'absolute', top: -height/2, right: 0, bottom: 0, left: 0, backgroundColor: '#000'}} />
      <CircleBg ref={node => { this.circleBg = node }} />
      <TopNavBar
        ref={node => { this.topNav = node }}
        title={'Ruapicker'}
        onLeftPress={this.onBack.bind(this)}
        onRightPress={this.closeApp.bind(this)}
        rightIcon={'cross'}
        onPress={() => { this.onBack() }}
      />
      <Animatable.Image
        ref={node => { this.avatar = node }}
        style={[styles.avatar]}
        source={require('../assets/images/avatar.jpg')}
      />

      <Animatable.Text ref={node => { this.title = node }} style={[styles.h1]}>{this.state.username}</Animatable.Text>
      <Animatable.Text ref={node => { this.subTitle = node }} style={[styles.h2]}>{'Iaaaaf you curious where I come from, it\'s an easy way to find out for your self. '}</Animatable.Text>
      {this.state.showCard && <View style={[styles.cardContainer]} ref={'cardContainer'}>
        <Card
          ref={node => { this.card1 = node }}
          name="reddit"
          title="Read some news from reddit!"
          onPress={this.handleRoutePress.bind(this, 'RedditList')}
        />
        <Card
          ref={node => { this.card2 = node }}
          name="reddit"
          title="Read some news from reddit!"
        />
        <Card
          ref={node => { this.card3 = node }}
          name="reddit"
          title="Read some news from reddit!"
        />
      </View>}
      <Animatable.Text ref={node => { this.startBtn = node }} style={styles.startNow} onPress={this.start.bind(this)}>Start Now</Animatable.Text>
      {this.state.animateCount === 1 && <Footer />}
    </View>
  }

  componentWillUnmount () {
    console.log('unmount...')
    this.hasState = false
    this.removeHandler()
  }
}

const styles = StyleSheet.create({
  h1: {
    position: 'absolute',
    top: height / 2 + 20,
    left: (width - 64) / 2,
    right: (width - 64) / 2,
    width: 64,
    color: '#fff',
    fontSize: 16
  },
  h2: {
    position: 'absolute',
    top: height / 2 + 55,
    left: 40,
    right: 40,
    color: '#fff',
    fontSize: 14,
    lineHeight: 20
  },
  avatar: {
    position: 'absolute',
    top: height / 2 - avatarWidth,
    left: (width - avatarWidth) / 2,
    width: avatarWidth,
    height: avatarWidth,
    borderRadius: 400,
    resizeMode: 'contain'
  },
  startNow: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 40 * f,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    color: '#fff',
    textAlign: 'center',
    fontSize: 16 * f
  },
  cardContainer: {
    marginTop: 180
  }
})
