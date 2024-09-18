import { FaRegTrashCan } from 'react-icons/fa6';
import { IoArchive } from 'react-icons/io5';
import { showFormattedDate } from '../utils';

export default function ArchivedNotes({ notes, deleteNote, unarchivedNote }) {
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <section className="my-6">
      <h1 className="text-[25px] text-neutral-300 font-semibold">
        Archived Notes
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {archivedNotes.length > 0 ? (
          archivedNotes.map((note) => (
            <div
              key={note.id}
              className="border border-neutral-800 flex flex-col justify-between h-96 p-4 rounded-xl mt-4"
            >
              <div>
                <h2 className="text-xl font-bold text-neutral-400">
                  {note.title.length > 10
                    ? note.title.substring(0, 10) + '...'
                    : note.title}
                </h2>
                <span className="text-sm text-neutral-600">
                  {showFormattedDate(note.createdAt)}
                </span>
                <p className="text-base text-neutral-500 mt-2 max-h-40 overflow-hidden">
                  {note.body.length > 100
                    ? note.body.substring(0, 100) + '...'
                    : note.body}
                </p>
              </div>
              <div className="flex items-center gap-x-4 mt-4">
                <div
                  className="border border-neutral-800 p-2 rounded-lg"
                  onClick={() => deleteNote(note.id)}
                >
                  <FaRegTrashCan className="text-neutral-600" />
                </div>
                <div
                  className="border border-neutral-800 p-2 rounded-lg"
                  onClick={() => unarchivedNote(note.id)}
                >
                  <IoArchive className="text-neutral-600" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-neutral-400">No archived notes available</p>
        )}
      </div>
    </section>
  );
}
