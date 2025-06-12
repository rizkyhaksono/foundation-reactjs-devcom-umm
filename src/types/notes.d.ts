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

export interface CreateNoteRequest {
  message: string;
  note: Note;
}

export interface UpdateNoteRequest {
  message: string;
  note: Note;
}

export interface DeleteNoteResponse {
  message: string;
}