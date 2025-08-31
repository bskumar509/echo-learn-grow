import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { 
  Check, 
  X, 
  Star, 
  Zap,
  Users,
  GraduationCap,
  Building
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      icon: GraduationCap,
      price: 0,
      yearlyPrice: 0,
      description: "Perfect for trying out EchoLearn",
      popular: false,
      features: [
        { text: "5 courses per month", included: true },
        { text: "Basic progress tracking", included: true },
        { text: "Community forum access", included: true },
        { text: "Mobile app access", included: true },
        { text: "Live classes", included: false },
        { text: "Certificates", included: false },
        { text: "Priority support", included: false },
        { text: "Custom learning paths", included: false }
      ],
      cta: "Get Started",
      variant: "outline" as const
    },
    {
      name: "Premium",
      icon: Star,
      price: 19,
      yearlyPrice: 190,
      description: "Most popular for serious learners",
      popular: true,
      features: [
        { text: "Unlimited courses", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Live virtual classes", included: true },
        { text: "Completion certificates", included: true },
        { text: "Priority support", included: true },
        { text: "Offline downloads", included: true },
        { text: "Parent dashboard", included: true },
        { text: "API access", included: false }
      ],
      cta: "Start Free Trial",
      variant: "default" as const
    },
    {
      name: "School",
      icon: Building,
      price: 99,
      yearlyPrice: 990,
      description: "For schools and institutions",
      popular: false,
      features: [
        { text: "Everything in Premium", included: true },
        { text: "Unlimited students", included: true },
        { text: "Admin dashboard", included: true },
        { text: "Custom branding", included: true },
        { text: "API access", included: true },
        { text: "Dedicated support", included: true },
        { text: "Custom integrations", included: true },
        { text: "White labeling", included: true }
      ],
      cta: "Contact Sales",
      variant: "secondary" as const
    }
  ];

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! Premium and School plans come with a 14-day free trial. No credit card required."
    },
    {
      question: "Do you offer discounts for nonprofits?",
      answer: "Yes, we offer 50% discount for registered nonprofits and educational institutions."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/5 via-primary/10 to-background">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Simple Pricing
          </Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">Choose Your Learning Plan</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Start free and upgrade as you grow. All plans include our core learning features.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={!isYearly ? "font-semibold" : "text-muted-foreground"}>Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span className={isYearly ? "font-semibold" : "text-muted-foreground"}>
              Yearly
              <Badge variant="secondary" className="ml-2">Save 20%</Badge>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative p-8 ${plan.popular ? 'border-primary shadow-xl scale-105' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <plan.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      ${isYearly ? Math.floor(plan.yearlyPrice / 12) : plan.price}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                    {isYearly && plan.yearlyPrice > 0 && (
                      <div className="text-sm text-muted-foreground mt-1">
                        ${plan.yearlyPrice} billed yearly
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-success flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className={feature.included ? "" : "text-muted-foreground"}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Link to="/auth">
                  <Button 
                    variant={plan.variant} 
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Compare Plans</h2>
          
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4">Features</th>
                  <th className="text-center py-4 px-4">Free</th>
                  <th className="text-center py-4 px-4">Premium</th>
                  <th className="text-center py-4 px-4">School</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4">Course Access</td>
                  <td className="text-center">5/month</td>
                  <td className="text-center">Unlimited</td>
                  <td className="text-center">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Live Classes</td>
                  <td className="text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                  <td className="text-center"><Check className="w-5 h-5 text-success mx-auto" /></td>
                  <td className="text-center"><Check className="w-5 h-5 text-success mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Students</td>
                  <td className="text-center">1</td>
                  <td className="text-center">5</td>
                  <td className="text-center">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Support</td>
                  <td className="text-center">Community</td>
                  <td className="text-center">Priority</td>
                  <td className="text-center">Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Learning Journey Today</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students already learning on EchoLearn. 
            No credit card required for free trial.
          </p>
          <Link to="/auth">
            <Button size="lg" className="gap-2">
              Start Free Trial
              <Star className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;