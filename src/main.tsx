import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClientProvider } from '@tanstack/react-query';
import { query } from "@/libs/query";
import '@/index.css';
import App from '@/app';
import AboutPage from '@/pages/(visitor)/about/page';
import ContactPage from '@/pages/(visitor)/contact/page';
import LoginPage from '@/pages/(auth)/login/page';
import RegisterPage from '@/pages/(auth)/register/page';
import DashboardPage from '@/pages/(user)/dashboard/page';
import NoteDetailPage from '@/pages/(user)/note/note-detail';
import NewNotePage from '@/pages/(user)/note/new-note';
import { AuthProvider } from '@/context/auth-context';
import { ProtectedRoute } from '@/context/protected-route';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={query}>
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
