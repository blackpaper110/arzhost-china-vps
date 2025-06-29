import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-600">Last updated: December 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using ARZ Host services, you accept and agree to
              be bound by the terms and provision of this agreement.
            </p>

            <h2>2. Service Description</h2>
            <p>
              ARZ Host provides China VPS hosting, web hosting in China, virtual
              server hosting Hong Kong, and related hosting services subject to
              these terms and conditions.
            </p>

            <h2>3. Account Registration</h2>
            <p>
              When you create an account with us, you must provide information
              that is accurate, complete, and current at all times.
            </p>

            <h2>4. Acceptable Use Policy</h2>
            <p>
              You may not use our China VPS hosting services for any unlawful
              purposes or to conduct any unlawful activity.
            </p>

            <h2>5. Payment Terms</h2>
            <p>
              All hosting services are billed in advance. Payment is due on the
              invoice date for all China VPS and web hosting services.
            </p>

            <h2>6. Service Availability</h2>
            <p>
              ARZ Host aims to provide 99.9% uptime for our China VPS hosting
              and virtual server hosting Hong Kong services.
            </p>

            <h2>7. Data Protection</h2>
            <p>
              We are committed to protecting your data and privacy in accordance
              with applicable laws and our Privacy Policy.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              ARZ Host shall not be liable for any indirect, incidental, or
              consequential damages arising from the use of our hosting
              services.
            </p>

            <h2>9. Contact Information</h2>
            <p>
              For questions about these Terms and Conditions, please contact us
              at support@arzhost.com or visit our contact page.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
