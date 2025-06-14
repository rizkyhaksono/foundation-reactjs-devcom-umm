export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}

export interface NotesResponse {
  message: string;
  notes: Note[];
}

export interface NoteResponse {
  message: string;
  note: Note;
}

export interface DeleteNoteResponse {
  message: string;
}

export interface NoteFormValues {
  title: string;
  content: string;
}

export interface NoteFormProps {
  defaultValues?: {
    title: string;
    content: string;
  };
  onSubmit: (data: NoteFormValues) => void;
  isSubmitting: boolean;
  submitLabel: string;
}

export interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
}