import React, { Component } from 'react';
import { List } from 'antd';
import NoteCard from './NoteCard';

const MockNoteList = [
  { id: 0, title: 'Elso jegyzet', description: 'Nagyon sokat kell meg tanulni' },
  { id: 1, title: 'Masodik jegyzet', description: 'Nagyon sokat kell meg tanulni' },
  { id: 2, title: 'Harmadik jegyzet', description: 'Nagyon sokat kell meg tanulni' },
  { id: 3, title: 'Negyedik jegyzet', description: 'Nagyon sokat kell meg tanulni' },
  { id: 4, title: 'Otodik jegyzet', description: 'Nagyon sokat kell meg tanulni' },
];

class NoteList extends Component {
  render() {
    return (
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
        dataSource={MockNoteList}
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

export default NoteList;
