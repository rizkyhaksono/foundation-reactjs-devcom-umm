import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import Input from '@/components/ui/Input';

interface NoteFormValues {
  title: string;
  content: string;
}

interface NoteFormProps {
  defaultValues?: {
    title: string;
    content: string;
  };
  onSubmit: (data: NoteFormValues) => void;
  isSubmitting: boolean;
  submitLabel: string;
}

const NoteForm = ({
  defaultValues = { title: '', content: '' },
  onSubmit,
  isSubmitting,
  submitLabel
}: NoteFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<NoteFormValues>({
    defaultValues
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Input
          label="Title"
          {...register('title', {
            required: 'Title is required',
            minLength: {
              value: 3,
              message: 'Title must be at least 3 characters'
            },
            maxLength: {
              value: 100,
              message: 'Title must be less than 100 characters'
            }
          })}
          error={errors.title?.message}
        />
      </div>

      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Content
        </label>
        <textarea
          id="content"
          rows={6}
          className={`block w-full rounded-md border px-3 py-2 shadow-sm 
          focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
          ${errors.content ? 'border-red-500' : 'border-gray-300'}`}
          {...register('content', {
            required: 'Content is required',
            minLength: {
              value: 10,
              message: 'Content must be at least 10 characters'
            }
          })}
        />
        {errors.content && (
          <p className="mt-1 text-sm text-red-600">{errors.content.message}</p>
        )}
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          variant="primary"
          size="medium"
          isLoading={isSubmitting}
        >
          {submitLabel}
        </Button>
      </div>
    </form>
  );
};

export default NoteForm;
