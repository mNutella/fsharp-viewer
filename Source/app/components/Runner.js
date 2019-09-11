/* eslint-disable jsx-a11y/accessible-emoji */
// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Runner.css';
import routes from '../constants/routes';
import Table from './Table';
import Loader from './Loader';

type Props = {
  executeCommandAsync: (path: string) => void,
  isRunning: boolean,
  commandResult: Array<Array<string>>
};

type State = { inputVal: string };

export default class Runner extends Component<Props, State> {
  props: Props;

  state = {
    inputVal: ''
  };

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    // eslint-disable-next-line no-unused-expressions
    (event.currentTarget: HTMLInputElement);

    this.setState({
      inputVal: event.currentTarget.value
    });
  };

  render() {
    const { executeCommandAsync, isRunning, commandResult } = this.props;
    const { inputVal } = this.state;

    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-3x">👈🏻</i>
          </Link>
        </div>
        <div className={styles.btnGroup}>
          <input
            type="text"
            onChange={this.handleChange.bind(this)}
            placeholder="Path to Folder with Project"
          />
          <button
            className={styles.btn}
            disabled={isRunning}
            onClick={() => executeCommandAsync(inputVal)}
            data-tclass="btn"
            type="button"
          >
            Run
          </button>
        </div>
        <div className={styles.content}>
          {isRunning ? (
            <Loader />
          ) : (
            <Table items={commandResult} loading={isRunning} />
          )}
        </div>
      </div>
    );
  }
}
