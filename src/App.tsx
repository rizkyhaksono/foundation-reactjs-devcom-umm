import { Button } from "@/components/ui/Button";
import { Link } from "react-router";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-6 flex flex-col items-center text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Capture your ideas, organize your life
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              NoteFlow helps you capture ideas, organize tasks, and stay in sync across all your devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="large">Get Started for Free</Button>
              </Link>
              <Link to="/features">
                <Button variant="secondary" size="large">Learn More</Button>
              </Link>
            </div>
          </div>

          {/* App Preview */}
          <div className="mt-16 rounded-lg border bg-background/50 shadow-xl w-full max-w-5xl overflow-hidden">
            <div className="p-2 bg-muted border-b">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-8 h-[400px] bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-950/30 flex items-center justify-center">
              <p className="text-lg font-medium text-center">App preview screenshot here</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/50 flex flex-col items-center">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-16">Everything you need, in one place</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-background p-6 rounded-lg shadow-sm border">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Rich Note Taking</h3>
                <p className="text-muted-foreground">Create beautiful notes with formatting, images, checklists, and more.</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-background p-6 rounded-lg shadow-sm border">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h10" />
                    <path d="M7 12h10" />
                    <path d="M7 17h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Organize & Search</h3>
                <p className="text-muted-foreground">Keep your notes organized with notebooks, tags, and powerful search.</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-background p-6 rounded-lg shadow-sm border">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Sync Everywhere</h3>
                <p className="text-muted-foreground">Access your notes from any device with real-time synchronization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 flex flex-col items-center">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-16">Loved by thousands</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-background p-6 rounded-lg border">
                <div className="flex gap-2 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 italic">"NoteFlow has completely transformed how I organize my work and personal projects. Can't imagine life without it now."</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Product Designer</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-background p-6 rounded-lg border">
                <div className="flex gap-2 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 italic">"The seamless sync across devices and clean interface make NoteFlow the best note-taking app I've ever used."</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-background p-6 rounded-lg border">
                <div className="flex gap-2 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 italic">"As a student, I rely on NoteFlow for all my classes. The organization features help me keep everything in perfect order."</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div>
                    <p className="font-medium">Emily Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Graduate Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground flex flex-col items-center">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start capturing ideas today</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Join thousands of users who organize their work and life with NoteFlow.
            </p>
            <Link to="/signup">
              <Button size="large" className="bg-white text-primary hover:bg-gray-100">
                Get Started for Free
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
