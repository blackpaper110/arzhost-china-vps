import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Disclaimer
            </h1>
            <p className="text-lg text-gray-600">Last updated: December 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Website Disclaimer</h2>
            <p>
              The information on this website is provided on an "as is" basis.
              To the fullest extent permitted by law, ARZ Host excludes all
              representations, warranties, obligations, and liabilities arising
              out of or in connection with this website.
            </p>

            <h2>Service Availability</h2>
            <p>
              While ARZ Host strives to provide reliable China VPS hosting and
              web hosting in China services, we cannot guarantee uninterrupted
              service availability.
            </p>

            <h2>Technical Information</h2>
            <p>
              The technical specifications and features described for our China
              VPS hosting and virtual server hosting Hong Kong services are
              subject to change without notice.
            </p>

            <h2>External Links</h2>
            <p>
              This website may contain links to external websites. ARZ Host is
              not responsible for the content or privacy practices of external
              sites.
            </p>

            <h2>Performance Claims</h2>
            <p>
              Performance metrics and uptime guarantees are based on our
              historical data and may vary depending on usage patterns and
              external factors.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              In no event shall ARZ Host be liable for any damages whatsoever
              arising out of the use, inability to use, or the results of use of
              this website or our hosting services.
            </p>

            <h2>Professional Advice</h2>
            <p>
              The information provided on this website is for general
              informational purposes only and should not be considered as
              professional technical advice.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have questions about this disclaimer, please contact us at
              legal@arzhost.com or through our contact page.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
