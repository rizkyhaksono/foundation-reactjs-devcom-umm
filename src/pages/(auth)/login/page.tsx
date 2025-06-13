import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useLoginUser } from '@/services/auth/auth.service';
import { useAuth } from '@/context/use-auth';
import Input from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useForm } from 'react-hook-form';
import type { LoginFormValues } from '@/types/auth';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>();
  const { mutate: loginUser, isPending } = useLoginUser();

  const onSubmit = (data: LoginFormValues) => {
    setError('');
    loginUser(data, {
      onSuccess: (data) => {
        login(data);
        navigate('/dashboard');
      },
      onError: (error) => {
        setError(error.message || 'Login failed. Please try again.');
      }
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <Link to="/">
          <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">Sign in to your account</h1>
        </Link>

        {error && (
          <div className="mb-4 rounded-md bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            Sign in
          </Button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;