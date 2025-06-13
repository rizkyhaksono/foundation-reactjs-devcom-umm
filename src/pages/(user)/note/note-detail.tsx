import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import {
  useGetNoteById,
  useUpdateNote,
  useDeleteNote
} from '@/services/user/notes.service';
import NoteForm from '@/components/ui/NoteForm';
import Modal from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

const NoteDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const {
    data,
    isLoading,
    isError,
    error
  } = useGetNoteById(id as string);

  const updateNoteMutation = useUpdateNote();
  const deleteNoteMutation = useDeleteNote();

  const handleUpdate = (formData: { title: string; content: string }) => {
    if (!data?.note) return;

    updateNoteMutation.mutate({
      noteId: id as string,
      updatedNote: formData
    }, {
      onSuccess: () => {
        setIsEditing(false);
        navigate("/dashboard");
      },
      onError: (err) => {
        console.error('Failed to update note:', err);
      }
    }
    );
  };

  const handleDelete = () => {
    deleteNoteMutation.mutate(id as string, {
      onSuccess: () => {
        navigate('/dashboard');
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (isError || !data?.note) {
    return (
      <div className="min-h-screen p-6 bg-gray-50">
        <div className="p-4 bg-red-100 text-red-700 rounded-md">
          <p>Error: {error?.message ?? 'Failed to load note'}</p>
        </div>
      </div>
    );
  }

  const { note } = data;
  const formattedDate = new Date(note.updatedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6">
        <div className="mb-6">
          <Link
            to="/dashboard"
            className="text-blue-600 hover:text-blue-800 mb-6 inline-flex items-center"
          >
            {/* Back arrow icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </Link>
        </div>

        {isEditing ? (
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Edit Note</h1>
            <NoteForm
              defaultValues={{
                title: note.title,
                content: note.content
              }}
              onSubmit={handleUpdate}
              isSubmitting={updateNoteMutation.isPending}
              submitLabel="Save Changes"
            />
            <div className="mt-4">
              <Button
                variant="secondary"
                size="medium"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (<div className="mb-6">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-2xl font-bold text-gray-900">{note.title}</h1>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="small"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </Button>
              <Button
                variant="secondary"
                size="small"
                onClick={() => setIsDeleteModalOpen(true)}
                className="bg-red-50 text-red-600 hover:bg-red-100"
              >
                Delete
              </Button>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-500 mb-6">
            <p>Last updated on {formattedDate}</p>
            <span className="mx-2">•</span>
            <p>By {note.user.name}</p>
          </div>

          <div className="prose max-w-none">
            {note.content.split('\n').map((paragraph, index) => (
              <p key={`paragraph-${index}-${paragraph.substring(0, 10)}`} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
        )}
      </div>

      <Modal
        isOpen={isDeleteModalOpen}
        title="Delete Note"
        description="Are you sure you want to delete this note? This action cannot be undone."
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        isDeleting={deleteNoteMutation.isPending}
      />
    </div>
  );
};

export default NoteDetailPage;
