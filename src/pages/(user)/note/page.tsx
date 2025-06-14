import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useCreateNote } from '@/services/user/notes.service';
import NoteForm from '@/pages/(user)/note/_components/note-form';
import type { NoteFormValues } from '@/types/notes';


const NewNotePage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const { mutate: createNote, isPending } = useCreateNote();

  const handleCreate = (formData: NoteFormValues) => {
    setError(null);

    createNote(formData, {
      onSuccess: () => {
        navigate("/dashboard");
      },
      onError: (err) => {
        setError(err instanceof Error ? err.message : 'Failed to create note');
      }
    });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-sm p-6 border">
        <div className="mb-6">
          <Link
            to="/dashboard"
            className="text-primary hover:underline mb-6 inline-flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Dashboard
          </Link>
        </div>

        <h1 className="text-2xl font-bold mb-6">Create New Note</h1>

        {error && (
          <div className="mb-6 p-4 bg-destructive/10 text-destructive rounded-md">
            {error}
          </div>
        )}

        <NoteForm
          onSubmit={handleCreate}
          isSubmitting={isPending}
          submitLabel="Create Note"
        />
      </div>
    </div>
  );
};

export default NewNotePage;