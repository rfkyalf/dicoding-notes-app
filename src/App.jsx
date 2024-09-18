import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ActiveNotes from './components/ActiveNotes';
import ArchivedNotes from './components/ArchivedNotes';
import { getInitialData } from './utils';
import Form from './components/Form';
import Navbar from './components/Navbar';

export default function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchQuery, setSearchQuery] = useState('');

  const addNote = (title, body) => {
    const newNote = {
      id: uuidv4(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const archivedNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, archived: true } : note
      )
    );
  };

  const unarchivedNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, archived: false } : note
      )
    );
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery) ||
      note.body.toLowerCase().includes(searchQuery)
  );

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  return (
    <main>
      <Navbar onSearch={handleSearch} />
      <Form addNote={addNote} />
      <ActiveNotes
        notes={filteredNotes.filter((note) => !note.archived)}
        deleteNote={deleteNote}
        archivedNote={archivedNote}
      />
      <ArchivedNotes
        notes={filteredNotes.filter((note) => note.archived)}
        deleteNote={deleteNote}
        unarchivedNote={unarchivedNote}
      />
    </main>
  );
}
