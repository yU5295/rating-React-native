import _ from 'lodash';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text, View } from 'react-native';

import Star from './components/Star'

export default class TapRating extends Component {
  static defaultProps = {
    defaultRating: 3,
    reviews: ["Terrible", "Bad", "Okay", "Good", "Great"],
    count: 5,
    showRating: true,
    reviewColor: 'rgba(230, 196, 46, 1)',
    reviewSize: 25
  };

  constructor() {
    super()

    this.state = {
      position: 5
    }
  }

  componentDidMount() {
    const { defaultRating } = this.props

    this.setState({ position: defaultRating })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultRating !== this.props.defaultRating) {
      this.setState({ position: nextProps.defaultRating })
    }
  }

  renderStars(rating_array) {
    return _.map(rating_array, (star, index) => {
      return star
    })
  }

  starSelectedInPosition(position) {
    const { onFinishRating } = this.props

    if (typeof onFinishRating === 'function') onFinishRating(position);

    this.setState({ position: position })
  }

  render() {
    const { position } = this.state
    const { count, reviews, showRating, reviewColor, reviewSize } = this.props
    const rating_array = []

    _.times(count, index => {
      rating_array.push(
        <Star
          key={index}
          position={index + 1}
          starSelectedInPosition={this.starSelectedInPosition.bind(this)}
          fill={position >= index + 1}
          {...this.props}
        />
      )
    })

    return (
      <View style={styles.ratingContainer}>
        { showRating &&
          <Text style={[styles.reviewText, {fontSize: reviewSize, color: reviewColor}]}>
            {reviews[position - 1]}
          </Text>
        }
        <View style={styles.starContainer}>
          {this.renderStars(rating_array)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ratingContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewText: {
    fontWeight: 'bold',
    margin: 10,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
