import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@/index.css';
import App from '@/app';
import AboutPage from '@/pages/(visitor)/about.tsx';
import ContactPage from '@/pages/(visitor)/contact';
import LoginPage from '@/pages/(auth)/login.tsx';
import RegisterPage from '@/pages/(auth)/register';
import DashboardPage from '@/pages/(user)/dashboard.tsx';
import NoteDetailPage from '@/pages/(user)/note-detail.tsx';
import NewNotePage from '@/pages/(user)/new-note.tsx';
import { AuthProvider } from '@/context/auth-context';
import { ProtectedRoute } from '@/context/protected-route';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } />
            <Route path="/notes/new" element={
              <ProtectedRoute>
                <NewNotePage />
              </ProtectedRoute>
            } />
            <Route path="/notes/:id" element={
              <ProtectedRoute>
                <NoteDetailPage />
              </ProtectedRoute>
            } />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
)
