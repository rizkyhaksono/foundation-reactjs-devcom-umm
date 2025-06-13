import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              We are dedicated to providing innovative solutions and exceptional service
              to our customers. Our goal is to make technology accessible and beneficial
              for everyone.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-4">
              Founded in [year], we are a team of passionate professionals committed
              to excellence in software development and customer service. Our diverse
              team brings together expertise from various fields to deliver the best
              solutions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              Have questions? Reach out to us at{" "}
              <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">
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