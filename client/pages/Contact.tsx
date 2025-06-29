import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact ARZ Host
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with our China VPS hosting experts. We're here to
              help you find the perfect hosting solution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  Our team of hosting experts is available 24/7 to assist you
                  with any questions about our China VPS hosting, web hosting in
                  China, or virtual server hosting Hong Kong services.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Email Support
                        </h3>
                        <p className="text-gray-600">support@arzhost.com</p>
                        <p className="text-gray-600">sales@arzhost.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Phone Support
                        </h3>
                        <p className="text-gray-600">+86 400-000-0000</p>
                        <p className="text-gray-600">
                          +852 3008-5000 (Hong Kong)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Office Location
                        </h3>
                        <p className="text-gray-600">
                          ARZ Host Technology Center
                          <br />
                          Building A, Science Park
                          <br />
                          Beijing, China 100000
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Support Hours
                        </h3>
                        <p className="text-gray-600">24/7 Technical Support</p>
                        <p className="text-gray-600">
                          Sales: Monday - Friday, 9 AM - 6 PM (GMT+8)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your hosting requirements..."
                    rows={6}
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Send Message
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms" className="text-blue-600 hover:underline">
                    Terms of Service
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
