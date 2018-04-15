// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, Spin } from 'antd';
import axios from 'axios';
import { NoteCard, LoadingCardList } from '.';
import { type Note } from '../types';

type State = {
  notes: Array<Note>,
  loading: boolean,
};

export class NoteList extends Component<{}, State> {
  state: State = {
    notes: [],
    loading: true,
  };

  componentDidMount() {
    // TODO: Change to our API when it's available
    axios.get('https://swapi.co/api/planets').then(response => {
      console.log(response.data.results);

      const notes: Array<Note> = response.data.results.map(planet => {
        return {
          id: planet.orbital_period,
          title: planet.name,
          description: `The climate is ${planet.climate} and the terrain is ${
            planet.terrain
          }`,
        };
      });

      this.setState({ notes, loading: false });
      console.log(this.state);
    });
  }

  render() {
    return this.state.loading ? (
      <LoadingCardList />
    ) : (
      <List
        grid={{ gutter: 20, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 3 }}
        dataSource={this.state.notes}
        renderItem={item => (
          <List.Item>
            <Link to={`/notes/${item.title}`}>
              <NoteCard
                title={item.title}
                author="John Doe"
                description={item.description}
              />
            </Link>
          </List.Item>
        )}
      />
    );
  }
}
