import { useState } from 'react';
import {
  useGetNotes,
  useDeleteNote
} from '@/services/user/notes.service';
import type { Note } from '@/types/notes';
import { Link } from 'react-router';

const DashboardPage = () => {
  const { data, isLoading, isError, error } = useGetNotes();
  const deleteNoteMutation = useDeleteNote();
  const [searchQuery, setSearchQuery] = useState('');

  const notes = data?.notes || [];
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteNote = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      await deleteNoteMutation.mutateAsync(id);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen p-6 bg-gray-50">
        <div className="p-4 bg-red-100 text-red-700 rounded-md">
          <p>Error: {error?.message || 'Failed to load notes'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">My Notes</h1>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              {/* <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
              <input
                type="text"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 w-full sm:w-64"
              />
            </div>

            <Link
              to="/notes/new"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
            >
              {/* <FiPlusCircle className="mr-2" /> */}
              New Note
            </Link>
          </div>
        </header>

        {filteredNotes.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            {searchQuery ? (
              <p className="text-gray-500">No notes match your search</p>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-500">You don't have any notes yet</p>
                <Link
                  to="/notes/new"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
                >
                  {/* <FiPlusCircle className="mr-2" /> */}
                  Create your first note
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onDelete={handleDeleteNote}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
}

const NoteCard = ({ note, onDelete }: NoteCardProps) => {
  const formattedDate = new Date(note.updatedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-150 ease-in-out border border-gray-200">
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">{note.title}</h3>
        <div className="text-gray-600 mb-4 line-clamp-3 text-sm">{note.content}</div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-500">
            <p>Updated: {formattedDate}</p>
            <p className="mt-1">By: {note.user.name}</p>
          </div>

          <div className="flex space-x-2">
            <Link
              to={`/notes/${note.id}/edit`}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition"
              title="Edit"
            >
              {/* <FiEdit2 size={18} /> */}
            </Link>
            <button
              onClick={() => onDelete(note.id)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-full transition"
              title="Delete"
            >
              {/* <FiTrash2 size={18} /> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;