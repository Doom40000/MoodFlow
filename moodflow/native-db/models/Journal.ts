import { timestampGenerator } from '../helpers';
import db from '../index';

const getAllJournals = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(async (tx) => {
      tx.executeSql(
        'create table if not exists journals (id integer primary key not null, title text, body text, created_at text);',
      );
      tx.executeSql('select * from journals', [], (_, { rows }) => {
        const result = rows._array;
        resolve(result);
      });
    });
  });
};

const getJournalById = async (id: number) => {
  return new Promise((resolve, reject) => {
    db.transaction(async (tx) => {
      tx.executeSql('select * from journals where id = ?', [id], (_, { rows }) => {
        const result = rows._array;
        resolve(result);
      });
    });
  });
};

const createJournalEntry = async (title: string, body: string) => {
  db.transaction((tx) => {
    const timestamp = timestampGenerator();
    tx.executeSql(
      'insert into journals (title, body, created_at) values (?, ?, ?)',
      [title, body, timestamp],
    );
    tx.executeSql('select * from journals', [], (_, { rows }) => {
      const result = rows._array;
    });
  });
};

const deleteJournalEntry = async (id: number) => {
  db.transaction((tx) => {
    tx.executeSql('delete from journals where id = ?', [id]);
    tx.executeSql('select * from journals', [], (_, { rows }) => {
      const result = rows._array;
    });
  });
};

export { getAllJournals, getJournalById, createJournalEntry, deleteJournalEntry };
