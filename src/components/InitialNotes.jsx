import { FaRegTrashCan } from 'react-icons/fa6';
import { IoArchive } from 'react-icons/io5';
import { getInitialData } from '../utils';

export const formatTanggal = (tanggal) => {
  return new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(tanggal));
};

export default function InitialNotes() {
  return (
    <>
      <h1 className="text-3xl font-bold text-neutral-950 py-4">
        Initial Notes
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {getInitialData().map((catatan) => (
          <div
            key={catatan.id}
            className="border border-neutral-500 flex flex-col justify-between h-96 p-4 rounded-xl"
          >
            <div>
              <h1 className="text-2xl font-bold text-neutral-950">
                {catatan.title.length > 10
                  ? catatan.title.substring(0, 10) + '...'
                  : catatan.title}
              </h1>
              <span className="text-sm text-neutral-500">
                {formatTanggal(catatan.createdAt)}
              </span>
              <p className="text-base text-neutral-800 mt-2 max-h-40 overflow-hidden su">
                {catatan.body.length > 100
                  ? catatan.body.substring(0, 100) + '...'
                  : catatan.body}
              </p>
            </div>
            <div className="flex items-center gap-x-4 mt-4">
              <div className="border border-neutral-500 p-2 rounded-lg">
                <FaRegTrashCan className="text-neutral-700" />
              </div>
              <div className="border border-neutral-500 p-2 rounded-lg">
                <IoArchive className="text-neutral-700" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
