import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Rating from 'react-native-ratings'
const WATER_IMAGE = require('./water.png')

class App extends React.Component {
  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.titleText}>React Native Ratings</Text>
          <Text style={styles.subtitleText}>gestures for the win!</Text>
        </View>
        <View style={styles.viewContainer}>
          <Rating
            showRating
            style={{ paddingVertical: 10 }}
          />
          <Rating
            type='custom'
            ratingImage={WATER_IMAGE}
            ratingColor='#3498db'
            ratingBackgroundColor='#ceee'
            ratingCount={10}
            imageSize={30}
            onFinishRating={this.ratingCompleted}
            showRating
            style={{ paddingVertical: 10 }}
          />
          <Rating
            type='bell'
            ratingCount={4}
            imageSize={60}
            onFinishRating={this.ratingCompleted}
            showRating
            style={{ paddingVertical: 10 }}
          />
          <Rating
            type='rocket'
            ratingCount={6}
            imageSize={60}
            onFinishRating={this.ratingCompleted}
            showRating
            style={{ paddingVertical: 10 }}
          />
          <Rating
            type='heart'
            ratingCount={3}
            imageSize={60}
            onFinishRating={this.ratingCompleted}
            showRating
            style={{ paddingVertical: 10 }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headingContainer: {
    paddingTop: 20,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    fontFamily: 'Menlo-Bold',
    color: '#27ae60'
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'Trebuchet MS',
    color: '#34495e'
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

Expo.registerRootComponent(App);
