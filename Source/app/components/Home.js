/* eslint-disable jsx-a11y/accessible-emoji */
// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Welcome to Code Runner!</h2>
        <Link to={routes.RUNNER}>👉🏼 Run Project 🚀 👈🏼</Link>
      </div>
    );
  }
}
