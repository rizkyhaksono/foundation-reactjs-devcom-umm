import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { useCreateNote } from '@/services/user/notes.service';
import NoteForm from '@/components/ui/NoteForm';

const NewNotePage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const createNoteMutation = useCreateNote();

  const handleCreate = (formData: { title: string; content: string }) => {
    setError(null);

    createNoteMutation.mutate(formData, {
      onSuccess: () => {
        navigate("/dashboard");
      },
      onError: (err) => {
        setError(err instanceof Error ? err.message : 'Failed to create note');
      }
    });
  };

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

        <h1 className="text-2xl font-bold text-gray-900 mb-6">Create New Note</h1>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <NoteForm
          onSubmit={handleCreate}
          isSubmitting={createNoteMutation.isPending}
          submitLabel="Create Note"
        />
      </div>
    </div>
  );
};

export default NewNotePage;
