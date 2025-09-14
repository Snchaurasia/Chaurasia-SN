import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import { generatePersonStructuredData, generateOrganizationStructuredData } from "@/lib/structuredData";

const About = () => {
  const personData = generatePersonStructuredData();
  const orgData = generateOrganizationStructuredData();

  const researchAreas = [
    "Combinatorial Optimization",
    "Machine Learning",
    "Evolutionary Algorithms",
    "Swarm Intelligence",
    "Hyper-heuristics",
    "Graph Theory"
  ];

  const achievements = [
    {
      title: "National Eligibility Test (UGC-NET)",
      year: "2015",
      description: "Qualified for Assistant Professor position"
    },
    {
      title: "Best Paper Award",
      year: "2018",
      description: "International Conference on Harmony Search, Soft Computing and Applications"
    },
    {
      title: "Research Fellowships",
      year: "2011-2015",
      description: "Junior Research Fellowship (DST) and Basic Scientific Research Fellowship (UGC)"
    }
  ];
      event: "International Conference on Harmony Search, Soft computing and Applications (ICHSA-2018)",
      paper: "An evolutionary algorithm based hyper-heuristic for the set packing problem"
    }
  ];

  const skills = [
    { category: "Programming Languages", items: ["C", "C++", "Python", "Java"] },
    { category: "Research Areas", items: ["Heuristic & Metaheuristic", "Hyper-heuristic", "Evolutionary Algorithms", "Swarm Intelligence"] },
    { category: "Specializations", items: ["Combinatorial Optimization", "Machine Learning", "Graph Theory", "Intelligent Systems"] },
    { category: "Tools & Technologies", items: ["MATLAB", "R", "Linux", "Database Management", "Software Engineering"] }
  ];

  const academicLinks = [
    { name: "Google Scholar", url: "https://scholar.google.co.in/citations?user=hZz9PpYAAAAJ&hl=en" },
    { name: "ORCID", url: "https://orcid.org/0000-0002-0635-0808" },
    { name: "ResearchGate", url: "#" },
    { name: "DBLP", url: "#" },
    { name: "Scopus", id: "56374333400" }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About Dr. Sachchida Nand Chaurasia - Computer Science Researcher"
        description="Learn about Dr. Sachchida Nand Chaurasia, Assistant Professor at Banaras Hindu University. Expert in Combinatorial Optimization, Machine Learning, and Evolutionary Algorithms."
        keywords="Dr. Sachchida Nand Chaurasia, Computer Science Professor, BHU, Machine Learning Expert, Evolutionary Algorithms, Combinatorial Optimization, Academic Profile"
        structuredData={[generatePersonStructuredData(), generateOrganizationStructuredData()]}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <span className="text-sm font-medium">{personalInfo.currentPosition}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Dr. Sachchida Nand
                <span className="block text-secondary">Chaurasia</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {personalInfo.department}<br/>
                {personalInfo.institution}
              </p>
            </div>
            
            {/* Quick Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-white/90">{personalInfo.officialEmail}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-white/90">{personalInfo.mobile}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 bg-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Professional Experience</h2>
            <p className="text-xl text-muted-foreground">Academic and research appointments worldwide</p>
          </div>

          <div className="space-y-8">
            {professionalAppointments.map((appointment, index) => (
              <Card key={index} className="simple-card">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                      <Badge className="bg-primary text-white mb-2">{appointment.period}</Badge>
                      <div className="text-sm text-muted-foreground">{appointment.location}</div>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-xl font-bold text-primary mb-2">{appointment.position}</h3>
                      <p className="text-lg text-foreground mb-1">{appointment.institution}</p>
                      <p className="text-muted-foreground mb-2">{appointment.department}</p>
                      {appointment.advisor && (
                        <p className="text-sm text-muted-foreground">Advisor: {appointment.advisor}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Education</h2>
            <p className="text-xl text-muted-foreground">Academic qualifications and training</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="simple-card">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div>
                      <Badge className="bg-secondary text-white mb-2">{edu.period}</Badge>
                      <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                      <p className="text-lg text-foreground">{edu.institution}</p>
                      <p className="text-muted-foreground">{edu.location}</p>
                    </div>
                    
                    {edu.thesis && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Thesis:</h4>
                        <p className="text-muted-foreground italic">{edu.thesis}</p>
                        <p className="text-sm text-muted-foreground mt-1">Supervisor: {edu.supervisor}</p>
                      </div>
                    )}
                    
                    {edu.modules && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Modules:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.modules.map((module, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">{module}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {edu.project && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Individual Project:</h4>
                        <p className="text-muted-foreground">{edu.project}</p>
                      </div>
                    )}
                    
                    {edu.achievement && (
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <p className="text-sm text-accent font-medium">{edu.achievement}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground">Technical competencies and research specializations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="simple-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">{skillGroup.category}</h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Awards & Recognition</h2>
            <p className="text-xl text-muted-foreground">Honors and achievements in academia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="simple-card">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-bold text-primary">{award.title}</h3>
                      <Badge className="bg-accent text-white">
                        {award.year || award.period}
                      </Badge>
                    </div>
                    {award.organization && (
                      <p className="text-foreground font-medium">{award.organization}</p>
                    )}
                    {award.event && (
                      <p className="text-foreground font-medium">{award.event}</p>
                    )}
                    <p className="text-muted-foreground">{award.description}</p>
                    {award.paper && (
                      <p className="text-sm text-muted-foreground italic">Paper: {award.paper}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Links */}
      <section className="py-20 bg-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Academic Profiles</h2>
            <p className="text-xl text-muted-foreground">Connect across academic platforms</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {academicLinks.map((link, index) => (
              <Card key={index} className="simple-card simple-hover">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-primary mb-2">{link.name}</h3>
                  {link.url ? (
                    <Button variant="outline" size="sm" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        Visit Profile
                      </a>
                    </Button>
                  ) : (
                    <div className="text-sm text-muted-foreground">
                      ID: {link.id}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Research Collaboration</h2>
          <p className="text-xl text-white/90 mb-8">
            Interested in collaborating on cutting-edge research in computer science?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/research">View Research</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
