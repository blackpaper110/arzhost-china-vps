import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Award, Users, Server, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About ARZ Host
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading provider of China VPS hosting solutions with over a decade
              of experience in delivering reliable, high-performance hosting
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, ARZ Host has been at the forefront of Chinese
                web hosting innovation. We began with a simple mission: to
                provide world-class hosting solutions specifically designed for
                the Chinese market.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we proudly serve thousands of customers worldwide with
                our premium China VPS hosting, virtual server hosting Hong Kong,
                and comprehensive web hosting in China solutions.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600"
              >
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center border-none shadow-lg">
                <CardHeader>
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl">10,000+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Satisfied Customers</p>
                </CardContent>
              </Card>

              <Card className="text-center border-none shadow-lg">
                <CardHeader>
                  <Server className="w-12 h-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl">99.9%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Uptime Guarantee</p>
                </CardContent>
              </Card>

              <Card className="text-center border-none shadow-lg">
                <CardHeader>
                  <Globe className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl">50+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Countries Served</p>
                </CardContent>
              </Card>

              <Card className="text-center border-none shadow-lg">
                <CardHeader>
                  <Award className="w-12 h-12 text-orange-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl">14+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Years Experience</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose ARZ Host?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Local Expertise
                </h3>
                <p className="text-gray-600">
                  Deep understanding of Chinese market requirements and
                  compliance standards for optimal hosting solutions.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Premium Infrastructure
                </h3>
                <p className="text-gray-600">
                  State-of-the-art data centers with enterprise-grade hardware
                  and redundant systems for maximum reliability.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  24/7 Support
                </h3>
                <p className="text-gray-600">
                  Round-the-clock technical support from certified professionals
                  who understand your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
