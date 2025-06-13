import {
  useGetNotes,
  useDeleteNote
} from '@/services/user/notes.service';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '@/context/use-auth';
import { Button } from '@/components/ui/Button';
import { useForm } from 'react-hook-form';
import NoteCard from '@/components/ui/NoteCard';

const DashboardPage = () => {
  const { data, isLoading, isError, error } = useGetNotes();
  const deleteNoteMutation = useDeleteNote();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { register, watch } = useForm({
    defaultValues: {
      searchQuery: '',
      sortBy: 'updatedAt'
    }
  });

  const searchQuery = watch('searchQuery');
  const sortBy = watch('sortBy');
  const notes = data?.notes || [];
  const filteredNotes = notes
    .filter(note =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'createdAt') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      } else {
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      }
    }); const handleDeleteNote = async (id: string) => {
      try {
        return await deleteNoteMutation.mutateAsync(id);
      } catch (error) {
        console.error('Failed to delete note:', error);
        throw error;
      }
    };

  const handleLogout = () => {
    logout();
    navigate('/login');
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
      <div className="max-w-7xl mx-auto">        <header className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">My Notes</h1>

          <Button
            variant="secondary"
            size="small"
            onClick={handleLogout}
            className="ml-auto mb-4 md:mb-0"
          >
            Logout
          </Button>
        </div>          <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search notes..."
              {...register('searchQuery')}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 w-full"
            />
          </div>

          <select
            {...register('sortBy')}
            className="pr-8 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="updatedAt">Sort by: Latest</option>
            <option value="title">Sort by: Title</option>
            <option value="createdAt">Sort by: Created</option>
          </select>

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
        ) : (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default DashboardPage;