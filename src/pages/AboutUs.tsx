import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Award, BookOpen, Users, Target, Heart, Globe } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      image: "/api/placeholder/150/150",
      bio: "20+ years in education technology",
    },
    {
      name: "Michael Chen",
      role: "Head of Curriculum",
      image: "/api/placeholder/150/150",
      bio: "Former principal, curriculum expert",
    },
    {
      name: "Priya Sharma",
      role: "Chief Technology Officer",
      image: "/api/placeholder/150/150",
      bio: "AI & EdTech specialist",
    },
    {
      name: "David Williams",
      role: "Head of Student Success",
      image: "/api/placeholder/150/150",
      bio: "Educational psychology expert",
    },
  ];

  const milestones = [
    { year: "2020", title: "Founded", description: "EchoLearn was born from a vision" },
    { year: "2021", title: "First 1000 Students", description: "Reached our first milestone" },
    { year: "2022", title: "AI Integration", description: "Launched personalized learning AI" },
    { year: "2023", title: "Global Expansion", description: "Expanded to 50+ countries" },
    { year: "2024", title: "Award Winner", description: "Best EdTech Platform Award" },
  ];

  const benefits = {
    students: [
      "Personalized learning paths",
      "Interactive and engaging content",
      "24/7 access to resources",
      "Gamified learning experience",
      "Real-time progress tracking",
    ],
    parents: [
      "Monitor child's progress",
      "Direct communication with teachers",
      "Detailed performance reports",
      "Safe learning environment",
      "Affordable quality education",
    ],
    teachers: [
      "Advanced teaching tools",
      "Automated grading system",
      "Content creation platform",
      "Student analytics dashboard",
      "Professional development resources",
    ],
  };

  const awards = [
    { name: "Best EdTech Platform 2024", org: "Education Awards" },
    { name: "Innovation in Learning", org: "Tech Excellence" },
    { name: "Parent's Choice Award", org: "Family Tech Council" },
    { name: "Top 10 Startups", org: "EdTech Magazine" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/5 via-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 gradient-text">
              Transforming Education for Tomorrow
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We believe every child deserves access to quality education that adapts to their unique learning style
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="hero" size="lg">
                Join Our Mission
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To democratize quality education through innovative technology and personalized learning experiences
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where every learner can reach their full potential regardless of geographical or economic barriers
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-warning/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Values</h3>
              <p className="text-muted-foreground">
                Innovation, inclusivity, integrity, and a commitment to continuous improvement in education
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Educational Philosophy Timeline */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"></div>
              
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center mb-8 ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-1/2"></div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                  </div>
                  <Card className={`w-1/2 p-6 ${index % 2 === 0 ? "mr-8" : "ml-8"}`}>
                    <div className="text-primary font-bold mb-2">{milestone.year}</div>
                    <h3 className="font-bold mb-2">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits by Role */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits for Everyone</h2>
          <Tabs defaultValue="students" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="students">For Students</TabsTrigger>
              <TabsTrigger value="parents">For Parents</TabsTrigger>
              <TabsTrigger value="teachers">For Teachers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="students" className="mt-8">
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <BookOpen className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Student Benefits</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.students.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="parents" className="mt-8">
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-success mr-3" />
                  <h3 className="text-2xl font-bold">Parent Benefits</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.parents.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 mr-3"></div>
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="teachers" className="mt-8">
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 text-warning mr-3" />
                  <h3 className="text-2xl font-bold">Teacher Benefits</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.teachers.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-warning rounded-full mt-2 mr-3"></div>
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {awards.map((award, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <Award className="w-12 h-12 text-warning mx-auto mb-4" />
                <h3 className="font-bold mb-2">{award.name}</h3>
                <p className="text-sm text-muted-foreground">{award.org}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Schools */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Trusted by Leading Schools</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Over 500+ schools worldwide trust EchoLearn to deliver quality education to their students
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-sm text-muted-foreground">School {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;