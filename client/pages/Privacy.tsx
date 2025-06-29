import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">Last updated: December 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>1. Information We Collect</h2>
            <p>
              ARZ Host collects information you provide directly to us when you
              sign up for our China VPS hosting services, contact support, or
              interact with our website.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and
              improve our China VPS hosting and web hosting in China services.
            </p>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information in certain limited
              circumstances as outlined in this policy.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to
              provide our hosting services and comply with our legal
              obligations.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal
              information. You may also opt out of certain communications from
              us.
            </p>

            <h2>7. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to improve your
              experience on our website and analyze usage patterns.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at privacy@arzhost.com or through our contact page.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
