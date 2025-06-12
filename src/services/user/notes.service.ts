import {
  useQuery,
  useMutation
} from "@tanstack/react-query";
import { baseHeaders } from "../header.config";
import type {
  NotesResponse,
  NoteResponse,
  CreateNoteRequest,
  UpdateNoteRequest,
  DeleteNoteResponse,
} from "@/types/notes";

const useGetNotes = () => {
  return useQuery<NotesResponse>({
    queryKey: ["notes"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/api/notes", {
        headers: baseHeaders(),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    refetchOnWindowFocus: false,
  })
}

const useGetNoteById = (noteId: string) => {
  return useQuery<NoteResponse>({
    queryKey: ["note", noteId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
        headers: baseHeaders(),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    refetchOnWindowFocus: false,
  });
}

const useCreateNote = () => {
  return useMutation<NoteResponse, Error, CreateNoteRequest>({
    mutationFn: async (newNote) => {
      const response = await fetch("http://localhost:3000/api/notes", {
        method: "POST",
        headers: baseHeaders(),
        body: JSON.stringify(newNote),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
}

const useUpdateNote = () => {
  return useMutation<
    NoteResponse,
    Error, {
      noteId: string;
      updatedNote: UpdateNoteRequest
    }>({
      mutationFn: async ({
        noteId,
        updatedNote
      }) => {
        const response = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
          method: "PUT",
          headers: baseHeaders(),
          body: JSON.stringify(updatedNote),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      },
    });
}

const useDeleteNote = () => {
  return useMutation<DeleteNoteResponse, Error, string>({
    mutationFn: async (noteId) => {
      const response = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
        method: "DELETE",
        headers: baseHeaders(),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
}

export {
  useGetNotes,
  useGetNoteById,
  useCreateNote,
  useUpdateNote,
  useDeleteNote,
}