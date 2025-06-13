import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useRegisterUser } from '@/services/auth/auth.service';
import Input from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useForm } from 'react-hook-form';
import type { RegisterFormValues } from '@/types/auth';

const RegisterPage = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>();
  const { mutate: registerMutation, isPending } = useRegisterUser();

  const onSubmit = (data: RegisterFormValues) => {
    setError('');

    try {
      registerMutation(data, {
        onSuccess: (data) => {
          navigate('/login');
          console.log('User registered successfully:', data);
        },
        onError: (err) => {
          setError(err instanceof Error ? err.message : 'Registration failed');
        }
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <Link to="/">
          <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">Create an account</h1>
        </Link>

        {error && (
          <div className="mb-4 rounded-md bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            id="name"
            type="text"
            label="Name"
            {...register("name", {
              required: "Name is required"
            })}
            error={errors.name?.message}
          />

          <Input
            id="email"
            type="email"
            label="Email address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            error={errors.email?.message}
          />

          <Input
            id="password"
            type="password"
            label="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })}
            error={errors.password?.message}
          />
          <Button
            type="submit"
            variant="primary"
            size="medium"
            isLoading={isPending}
            className="w-full"
          >
            Register
          </Button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;