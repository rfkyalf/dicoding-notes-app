import { useState } from 'react';

export default function Form({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addNote(title, body);
    setTitle('');
    setBody('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border mt-6 border-neutral-800 p-6 rounded-xl"
    >
      <h1 className="text-[25px] text-neutral-300 font-semibold border-b border-neutral-800 pb-6">
        Create Note
      </h1>
      <div className="flex flex-col gap-y-4 pt-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent border border-neutral-800 px-4 py-2 rounded-lg placeholder-neutral-400"
        />
        <textarea
          rows="10"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="bg-transparent border border-neutral-800 px-4 py-2 rounded-lg placeholder-neutral-400"
          placeholder="Body"
        />
        <button
          type="submit"
          className="bg-neutral-600 py-2 rounded-lg font-medium"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
