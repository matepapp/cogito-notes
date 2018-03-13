// @flow
import React, { Component } from 'react';
import { List } from 'antd';
import NoteCard from './NoteCard';
import axios from 'axios';

type Note = {
  id: number,
  title: string,
  description: string,
};

type State = {
  notes: Array<Note>,
};

class NoteList extends Component<{}, State> {
  state: State = {
    notes: [],
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

      this.setState({ notes });
      console.log(this.state);
    });
  }

  render() {
    return (
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 3 }}
        dataSource={this.state.notes}
        renderItem={item => (
          <List.Item>
            <NoteCard title={item.title} isLoading={false}>
              {item.description}
            </NoteCard>
          </List.Item>
        )}
      />
    );
  }
}

const MockNoteList: Note[] = [
  { id: 0, title: 'Elso jegyzet', description: 'Nagyon sokat kell meg tanulni' },
  { id: 1, title: 'Masodik jegyzet', description: 'Nagyon sokat kell meg tanulni' },
  { id: 2, title: 'Harmadik jegyzet', description: 'Nagyon sokat kell meg tanulni' },
  { id: 3, title: 'Negyedik jegyzet', description: 'Nagyon sokat kell meg tanulni' },
  { id: 4, title: 'Otodik jegyzet', description: 'Nagyon sokat kell meg tanulni' },
];

export default NoteList;
