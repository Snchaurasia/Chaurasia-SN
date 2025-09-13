import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import professorPortrait from "@/assets/professor-portrait.jpg";

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

  const workHistory = [
    {
      position: "Assistant Professor",
      organization: "Banaras Hindu University",
      department: "Department of Computer Science",
      duration: "December 2020 - Present",
      type: "Current Position"
    },
    {
      position: "Research Fellow",
      organization: "Nanyang Technological University, Singapore",
      department: "School of Computer Science and Engineering",
      duration: "March 2020 - October 2020",
      type: "Research"
    },
    {
      position: "Research Associate",
      organization: "Queen Mary University of London, UK",
      department: "School of Electronic Engineering and Computer Science",
      duration: "June 2018 - February 2020",
      type: "Research"
    },
    {
      position: "Research Professor",
      organization: "Korea University, South Korea",
      department: "Research Center for Disaster Prevention Science and Technology",
      duration: "July 2017 - May 2018",
      type: "Research"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Modern Design */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient">
          <div className="pattern-dots absolute inset-0 opacity-30"></div>
          <div className="hero-mesh absolute inset-0"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content Side */}
              <div className="text-white space-y-8 animate-slide-up">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <span className="text-sm font-medium">Assistant Professor</span>
                  </div>
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Dr. Sachchida Nand 
                    <span className="block text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      Chaurasia
                    </span>
                  </h1>
                  <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                    Leading research in <strong>Combinatorial Optimization</strong>, <strong>Machine Learning</strong>, 
                    and <strong>Evolutionary Algorithms</strong> at Banaras Hindu University
                  </p>
                </div>
                
                {/* Contact Info */}
                <div className="glass-effect rounded-2xl p-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white/90">snchaurasia@bhu.ac.in</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white/90">+91 9492425485</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white/90">Department of Computer Science, BHU</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" className="shadow-float hover:shadow-hero transition-all duration-300 transform hover:-translate-y-1">
                    Download CV
                  </Button>
                  <Button size="lg" variant="outline" className="glass-effect text-white border-white/30 hover:bg-white/10">
                    Contact Me
                  </Button>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl transform rotate-6 opacity-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-3xl transform -rotate-6 opacity-20"></div>
                  <div className="relative bg-white rounded-3xl p-4 shadow-hero animate-float">
                    <img 
                      src={professorPortrait} 
                      alt="Dr. Sachchida Nand Chaurasia" 
                      className="w-full h-96 object-cover rounded-2xl"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">50+</div>
                        <div className="text-sm text-muted-foreground">Publications</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests - Modern Cards */}
      <section className="py-20 bg-gradient-to-br from-primary-ultra-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Research Focus</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pioneering advances in computational intelligence and optimization algorithms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchInterests.map((interest, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-2xl transform group-hover:rotate-3 transition-transform duration-300 opacity-10"></div>
                <Card className="relative shadow-professional hover:shadow-float transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="h-2 w-16 bg-gradient-to-r from-primary to-primary-light rounded-full mb-4"></div>
                    <h3 className="font-semibold text-lg text-primary mb-2">{interest}</h3>
                    <div className="w-full h-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full"></div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Academic Journey</h2>
            <p className="text-xl text-muted-foreground">A path of continuous learning and research excellence</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-primary mb-8">Education</h3>
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="absolute left-2 top-4 w-0.5 h-16 bg-primary/20"></div>
                  <Card className="shadow-professional">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg">Ph.D.</h4>
                        <Badge variant="secondary">2016</Badge>
                      </div>
                      <p className="text-muted-foreground">University of Hyderabad</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary/60 rounded-full"></div>
                  <Card className="shadow-professional">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg">MCA</h4>
                        <Badge variant="secondary">2010</Badge>
                      </div>
                      <p className="text-muted-foreground">University of Hyderabad</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Work History */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-primary mb-8">Professional Experience</h3>
              <div className="space-y-6">
                {workHistory.map((work, index) => (
                  <div key={index} className="relative pl-8">
                    <div className={`absolute left-0 top-0 w-4 h-4 rounded-full ${index === 0 ? 'bg-primary animate-pulse' : 'bg-primary/60'}`}></div>
                    {index < workHistory.length - 1 && (
                      <div className="absolute left-2 top-4 w-0.5 h-20 bg-primary/20"></div>
                    )}
                    <Card className="shadow-professional hover:shadow-float transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-lg">{work.position}</h4>
                          <Badge variant={index === 0 ? "default" : "secondary"}>
                            {work.type}
                          </Badge>
                        </div>
                        <p className="font-medium text-primary mb-1">{work.organization}</p>
                        <p className="text-sm text-muted-foreground mb-2">{work.department}</p>
                        <p className="text-xs text-muted-foreground">{work.duration}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-primary-ultra-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Teaching Excellence</h2>
            <p className="text-xl text-muted-foreground">Courses that shape the next generation of computer scientists</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="shadow-professional hover:shadow-float transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-lg text-primary">{course}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Recognition & Awards</h2>
            <p className="text-xl text-muted-foreground">Acknowledged excellence in research and academics</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <Card key={index} className="shadow-hero hover:shadow-float transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-primary mb-2">{award.title}</h3>
                  <p className="text-muted-foreground mb-2">{award.organization}</p>
                  <Badge variant="outline" className="border-primary text-primary">{award.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Profiles */}
      <section className="py-20 bg-gradient-to-br from-primary-ultra-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Academic Presence</h2>
            <p className="text-xl text-muted-foreground">Connect and explore my research contributions</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-3xl mx-auto">
            <Button size="lg" variant="outline" asChild className="shadow-professional hover:shadow-float transition-all duration-300 transform hover:-translate-y-1">
              <a href="https://scholar.google.co.in/citations?user=hZz9PpYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                Google Scholar Profile
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="shadow-professional hover:shadow-float transition-all duration-300 transform hover:-translate-y-1">
              <a href="https://orcid.org/0000-0002-0635-0808" target="_blank" rel="noopener noreferrer">
                ORCID Profile
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="shadow-professional hover:shadow-float transition-all duration-300 transform hover:-translate-y-1">
              <a href="https://publons.com/researcher/1316067/sachchida-n" target="_blank" rel="noopener noreferrer">
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