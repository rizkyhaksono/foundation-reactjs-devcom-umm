import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { ArrowLeft, Loader2 } from 'lucide-react';
import {
  useGetNoteById,
  useUpdateNote,
  useDeleteNote
} from '@/services/user/notes.service';
import NoteForm from '@/pages/(user)/note/_components/note-form';
import Modal from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { formatDate } from '@/lib/format-date';
import type { Note } from '@/types/notes';

type UpdateNoteData = {
  title: string;
  content: string;
};

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

  const { mutate: updateNote, isPending: isUpdating } = useUpdateNote();
  const { mutate: deleteNote, isPending: isDeleting } = useDeleteNote();

  const handleUpdate = (formData: UpdateNoteData) => {
    if (!data?.note) return;

    updateNote({
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
    });
  };

  const handleDelete = () => {
    deleteNote(id as string, {
      onSuccess: () => {
        navigate('/dashboard');
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (isError || !data?.note) {
    return (
      <div className="min-h-screen p-6 bg-background">
        <div className="p-4 bg-destructive/10 text-destructive rounded-md">
          <p>Error: {error?.message ?? 'Failed to load note'}</p>
        </div>
      </div>
    );
  }

  const { note } = data;

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

        {isEditing ? (
          <NoteEditView
            note={note}
            onUpdate={handleUpdate}
            onCancel={() => setIsEditing(false)}
            isUpdating={isUpdating}
          />
        ) : (
          <NoteDisplayView
            note={note}
            onEdit={() => setIsEditing(true)}
            onDelete={() => setIsDeleteModalOpen(true)}
          />
        )}
      </div>

      <Modal
        isOpen={isDeleteModalOpen}
        title="Delete Note"
        description="Are you sure you want to delete this note? This action cannot be undone."
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        isDeleting={isDeleting}
      />
    </div>
  );
};

type NoteEditViewProps = {
  note: Note;
  onUpdate: (data: UpdateNoteData) => void;
  onCancel: () => void;
  isUpdating: boolean;
};

const NoteEditView = ({ note, onUpdate, onCancel, isUpdating }: NoteEditViewProps) => (
  <div className="mb-6">
    <h1 className="text-2xl font-bold mb-4">Edit Note</h1>
    <NoteForm
      defaultValues={{
        title: note.title,
        content: note.content
      }}
      onSubmit={onUpdate}
      isSubmitting={isUpdating}
      submitLabel="Save Changes"
    />
    <div className="mt-4">
      <Button
        variant="secondary"
        size="default"
        onClick={onCancel}
      >
        Cancel
      </Button>
    </div>
  </div>
);

type NoteDisplayViewProps = {
  note: Note;
  onEdit: () => void;
  onDelete: () => void;
};

const NoteDisplayView = ({ note, onEdit, onDelete }: NoteDisplayViewProps) => (
  <div className="mb-6">
    <div className="flex justify-between items-start mb-4">
      <h1 className="text-2xl font-bold">{note.title}</h1>
      <div className="flex gap-2">
        <Button
          variant="secondary"
          size="default"
          onClick={onEdit}
        >
          Edit
        </Button>
        <Button
          variant="outline"
          size="default"
          onClick={onDelete}
          className="text-destructive hover:bg-destructive/10"
        >
          Delete
        </Button>
      </div>
    </div>

    <div className="flex items-center text-sm text-muted-foreground mb-6">
      <p>Last updated on {formatDate(note.updatedAt)}</p>
      <span className="mx-2">•</span>
      <p>By {note.user.name}</p>
    </div>

    <div className="prose prose-stone dark:prose-invert max-w-none">
      {note.content.split('\n').map((paragraph: string) => (
        <p key={paragraph} className="mb-4">
          {paragraph}
        </p>
      ))}
    </div>
  </div>
);

export default NoteDetailPage;