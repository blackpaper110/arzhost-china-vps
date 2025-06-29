import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  CheckCircle,
  Server,
  Shield,
  Zap,
  Globe,
  Clock,
  Users,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const pricingPlans = [
    {
      name: "Starter VPS",
      price: "$29",
      period: "/month",
      features: [
        "1 vCPU Core",
        "2GB RAM",
        "30GB SSD Storage",
        "1TB Bandwidth",
        "China Data Center",
        "24/7 Support",
        "Free SSL Certificate",
      ],
      popular: false,
    },
    {
      name: "Professional VPS",
      price: "$59",
      period: "/month",
      features: [
        "2 vCPU Cores",
        "4GB RAM",
        "60GB SSD Storage",
        "2TB Bandwidth",
        "China + Hong Kong",
        "Priority Support",
        "Free Domain",
        "Daily Backups",
      ],
      popular: true,
    },
    {
      name: "Enterprise VPS",
      price: "$129",
      period: "/month",
      features: [
        "4 vCPU Cores",
        "8GB RAM",
        "120GB SSD Storage",
        "5TB Bandwidth",
        "Multi-Location",
        "Dedicated Support",
        "Advanced Security",
        "Custom Configuration",
      ],
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "What makes ARZ Host's China VPS hosting special?",
      answer:
        "Our China VPS hosting offers premium performance with servers located in mainland China and Hong Kong, ensuring optimal speed for Chinese users. We provide 24/7 support, 99.9% uptime guarantee, and compliance with local regulations.",
    },
    {
      question: "Do you offer virtual server hosting in Hong Kong?",
      answer:
        "Yes, we provide excellent virtual server hosting Hong Kong solutions with low latency connections to mainland China and global networks. Our Hong Kong servers are perfect for businesses targeting both Chinese and international markets.",
    },
    {
      question: "What is included with your Chinese web hosting plans?",
      answer:
        "Our Chinese web hosting includes SSD storage, unlimited bandwidth options, free SSL certificates, daily backups, email hosting in China, and 24/7 technical support. All plans come with a user-friendly control panel.",
    },
    {
      question: "How reliable is your hosting China infrastructure?",
      answer:
        "Our hosting China infrastructure maintains 99.9% uptime with redundant systems, multiple data centers, and enterprise-grade hardware. We use cutting-edge technology to ensure your websites and applications run smoothly.",
    },
    {
      question: "Do you provide email hosting in China?",
      answer:
        "Yes, we offer comprehensive email hosting in China with secure servers, spam protection, and integration with popular email clients. Our email solutions are compliant with local regulations and offer excellent deliverability.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Premium{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                China VPS Hosting
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience lightning-fast <strong>china vps hosting</strong> with
              guaranteed performance.
              <a
                href="https://arzhost.com/"
                className="text-blue-600 hover:underline font-semibold"
              >
                {" "}
                ARZ Host
              </a>{" "}
              delivers enterprise-grade <strong>
                web hosting in china
              </strong>{" "}
              solutions with 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link to="/contact">Start Your VPS Today</Link>
              </Button>
              <Button size="lg" variant="outline">
                <a
                  href="https://arzhost.com/hosting/china-based-vps-server-hosting/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View China VPS Plans
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our China VPS?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              "Excellence in <strong>vps china</strong> hosting with unmatched
              performance and reliability"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <Server className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>High Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Latest generation servers with SSD storage for maximum speed
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Advanced security measures and DDoS protection included
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Round-the-clock technical support by certified experts
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <Globe className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Multiple data center locations across China and Hong Kong
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete{" "}
                <span className="text-blue-600">Chinese Web Hosting</span>{" "}
                Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From <strong>vps hosting hong kong</strong> to comprehensive{" "}
                <strong>hosting china</strong> solutions, we provide everything
                you need to succeed online in the Chinese market.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      China VPS Hosting
                    </h3>
                    <p className="text-gray-600">
                      High-performance virtual servers in Chinese data centers
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Email Hosting in China
                    </h3>
                    <p className="text-gray-600">
                      Reliable email solutions with local compliance
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Virtual Server Hosting Hong Kong
                    </h3>
                    <p className="text-gray-600">
                      Strategic location for Asia-Pacific connectivity
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="China VPS Hosting Solutions"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ARZ Host VPS Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Choose the perfect <strong>china vps</strong> plan for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-blue-500 border-2" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full mt-6"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our China VPS hosting services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers using our premium China VPS
            hosting
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600"
            >
              <a
                href="https://arzhost.com/hosting/china-based-vps-server-hosting/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Plans
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
