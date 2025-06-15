import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">About Us</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Mission</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We are dedicated to providing innovative solutions and exceptional service
              to our customers. Our goal is to make technology accessible and beneficial
              for everyone.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Who We Are</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded in 2023, we are a team of passionate professionals committed
              to excellence in software development and customer service. Our diverse
              team brings together expertise from various fields to deliver the best
              solutions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              Have questions? Reach out to us at{" "}
              <a href="mailto:contact@example.com" className="text-primary hover:underline">
                contact@example.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;