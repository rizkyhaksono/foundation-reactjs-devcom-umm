import { Link } from "react-router";
import { Button } from "../ui/Button";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  return (
    <header className="flex justify-center sticky top-0 z-50 w-full border-b border-b-black/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex gap-6 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="font-bold text-xl">NoteFlow</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/templates" className="text-muted-foreground hover:text-foreground transition-colors">
              Templates
            </Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/login">
            <Button variant="secondary" size="medium">
              Log in
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="primary" size="medium">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;