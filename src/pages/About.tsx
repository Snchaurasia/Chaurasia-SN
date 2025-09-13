import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Download, ExternalLink, GraduationCap, Award, Briefcase } from "lucide-react";

const About = () => {
  const researchInterests = [
    "Combinatorial Optimization",
    "Evolutionary Algorithms",
    "Estimation of Distribution Algorithm",
    "Swarm Intelligence Techniques",
    "Heuristic & Matheuristic Algorithms",
    "Reinforcement Learning"
  ];

  const courses = [
    "Operating System Concepts",
    "Introduction to Computer Programming through C",
    "Machine Learning",
    "Object Oriented Programming through JAVA",
    "Artificial Neural Networks"
  ];

  const awards = [
    {
      title: "Basic Scientific Research Fellowship Award",
      organization: "UGC-GoI",
      year: "2013"
    },
    {
      title: "Junior Research Fellowship Award",
      organization: "DST-GoI",
      year: "2011"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center">
              <GraduationCap className="h-24 w-24 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dr. Sachchida Nand Chaurasia
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Assistant Professor, Computer Science
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Specializing in Combinatorial Optimization, Machine Learning, and Evolutionary Algorithms
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="shadow-lg">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-professional card-gradient">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <MapPin className="mr-3 h-6 w-6" />
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">snchaurasia@bhu.ac.in</p>
                    <p className="text-sm text-muted-foreground">sachchidanand.mca07@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 9492425485</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">
                      Department of Computer Science<br />
                      Banaras Hindu University<br />
                      Varanasi-221005, India
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Research Interests</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {researchInterests.map((interest, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4 bg-primary/10 text-primary border-primary/20">
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <Card className="shadow-professional">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <GraduationCap className="mr-3 h-6 w-6" />
                  Education
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-lg">Ph.D.</h4>
                    <p className="text-muted-foreground">University of Hyderabad</p>
                    <p className="text-sm text-muted-foreground">2016</p>
                  </div>
                  <div className="border-l-4 border-primary/60 pl-4">
                    <h4 className="font-semibold text-lg">MCA</h4>
                    <p className="text-muted-foreground">University of Hyderabad</p>
                    <p className="text-sm text-muted-foreground">2010</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Position */}
            <Card className="shadow-professional">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <Briefcase className="mr-3 h-6 w-6" />
                  Current Position
                </h3>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-lg">Assistant Professor</h4>
                  <p className="text-muted-foreground">Department of Computer Science</p>
                  <p className="text-muted-foreground">Banaras Hindu University</p>
                  <p className="text-sm text-muted-foreground">December 2020 - Present</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Taught */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Courses Taught</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <p className="font-medium text-center">{course}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Awards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Academic Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="shadow-professional">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{award.title}</h4>
                      <p className="text-muted-foreground">{award.organization}</p>
                      <p className="text-sm text-muted-foreground font-medium">{award.year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Profiles */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Academic Profiles</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <a href="https://scholar.google.co.in/citations?user=hZz9PpYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Google Scholar
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://orcid.org/0000-0002-0635-0808" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                ORCID
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://publons.com/researcher/1316067/sachchida-n" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Researcher ID
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;