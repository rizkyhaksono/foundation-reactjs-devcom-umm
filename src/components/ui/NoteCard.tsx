import Modal from '@/components/ui/Modal';
import type { Note } from '@/types/notes';
import { useState } from 'react';
import { Link } from 'react-router';

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
}

const NoteCard = ({ note, onDelete }: NoteCardProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const formattedDate = new Date(note.updatedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const handleDelete = () => {
    setIsDeleting(true);
    try {
      onDelete(note.id);
    } finally {
      setIsDeleting(false);
      setIsDeleteModalOpen(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-150 ease-in-out border border-gray-200 flex flex-col h-full">
      <div className="p-5 flex-grow">
        <Link to={`/notes/${note.id}`} className="block h-full">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1 hover:text-blue-600 transition">{note.title}</h3>
          <div className="text-gray-600 mb-4 line-clamp-3 text-sm">{note.content}</div>
        </Link>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-500">
            <p>Updated: {formattedDate}</p>
            <p className="mt-1">By: {note.user.name}</p>
          </div>

          <div className="flex space-x-2">
            <Link
              to={`/notes/${note.id}`}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition flex items-center"
              title="View"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </Link>
            <Link to={`/notes/${note.id}`}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition flex items-center"
              title="Edit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </Link>
            <button
              onClick={() => setIsDeleteModalOpen(true)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-full transition flex items-center"
              title="Delete"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isDeleteModalOpen}
        title="Delete Note"
        description={`Are you sure you want to delete "${note.title}"? This action cannot be undone.`}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        isDeleting={isDeleting}
      />
    </div>
  );
};

export default NoteCard;