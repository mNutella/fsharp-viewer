/* eslint-disable react/no-array-index-key */
// @flow
import React, { Component } from 'react';
import './Table.css';

type Props = {
  items: Array<Array<string>>
};

export default class Table extends Component<Props> {
  props: Props;

  render() {
    const { items } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Adjective</th>
            <th>Noun</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((output, i) => (
              <tr key={`${i}-${output[0]}`}>
                {output.map((item, j) => (
                  <td key={`${i}-${j}-${item[0]}`}>{item}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}
