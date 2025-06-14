import { Link } from 'react-router';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md rounded-lg bg-card p-8 shadow-md border">
        <Link to={"/"}>
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold">Sign in to your account</h1>
          </div>
        </Link>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="font-medium text-primary hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;