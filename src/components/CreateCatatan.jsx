import { useState } from 'react';
import { formatTanggal } from './InitialNotes';
import { FaRegTrashCan } from 'react-icons/fa6';
import { IoArchive } from 'react-icons/io5';
import SearchBar from './SearchBar';

const generateUniqueId = () => '_' + Math.random().toString(36).substr(2, 9);

export default function CreateCatatan() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [catatans, setCatatans] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    if (newTitle.length <= 50) {
      setTitle(newTitle);
    }
  };

  const handleBodyChange = (e) => setBody(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Buat catatan baru
    const newCatatan = {
      id: generateUniqueId(),
      title: title.trim(),
      body: body.trim(),
      archived: false,
      createdAt: new Date().toISOString(),
    };

    // Tambah catatan ke daftar catatan
    setCatatans([...catatans, newCatatan]);

    // Reset form
    setTitle('');
    setBody('');
  };

  // Hapus catatan
  const handleDelete = (id) => {
    // Filter catatans untuk menghapus catatan dengan ID yang sesuai
    const updatedCatatans = catatans.filter((catatan) => catatan.id !== id);
    setCatatans(updatedCatatans);
  };

  // Arsipkan catatan
  const handleArchive = (id) => {
    // Update status archived catatan dengan ID yang sesuai
    const updatedCatatans = catatans.map((catatan) =>
      catatan.id === id ? { ...catatan, archived: !catatan.archived } : catatan
    );
    setCatatans(updatedCatatans);
  };

  // Filter catatans berdasarkan kata kunci pencarian
  const filteredCatatans = catatans.filter((catatan) =>
    catatan.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="border border-neutral-500 p-4 rounded-xl mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-neutral-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="mt-1 block w-full border border-neutral-300 rounded-md p-2"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="body"
            className="block text-sm font-medium text-neutral-700"
          >
            Body
          </label>
          <textarea
            id="body"
            value={body}
            onChange={handleBodyChange}
            className="mt-1 block w-full border border-neutral-300 rounded-md p-2"
            placeholder="Enter body"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-neutral-800 text-white py-2 px-4 rounded-md w-full"
        >
          Create Catatan
        </button>
      </form>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h2 className="text-2xl text-neutral-950 font-bold mt-4">
        Daftar Catatan
      </h2>
      <div className="mt-4 grid grid-cols-4 gap-4">
        {filteredCatatans
          .filter((catatan) => !catatan.archived) // Filter catatan yang belum diarsipkan
          .map((catatan) => (
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
                <div
                  className="border border-neutral-500 p-2 rounded-lg cursor-pointer"
                  onClick={() => handleDelete(catatan.id)}
                >
                  <FaRegTrashCan className="text-neutral-700" />
                </div>
                <div
                  className="border border-neutral-500 p-2 rounded-lg cursor-pointer"
                  onClick={() => handleArchive(catatan.id)}
                >
                  <IoArchive className="text-neutral-700" />
                </div>
              </div>
            </div>
          ))}
      </div>
      <h2 className="text-2xl font-bold mt-4">Arsip Catatan</h2>
      <div className="mt-4 grid grid-cols-4 gap-4">
        {filteredCatatans
          .filter((catatan) => catatan.archived) // Filter catatan yang diarsipkan
          .map((catatan) => (
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
                <div
                  className="border border-neutral-500 p-2 rounded-lg cursor-pointer"
                  onClick={() => handleDelete(catatan.id)}
                >
                  <FaRegTrashCan className="text-neutral-700" />
                </div>
                <div
                  className="border border-neutral-500 p-2 rounded-lg cursor-pointer"
                  onClick={() => handleArchive(catatan.id)}
                >
                  <IoArchive className="text-neutral-700" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
