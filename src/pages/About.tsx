import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import { generatePersonStructuredData, generateOrganizationStructuredData } from "@/lib/structuredData";
import professorPortrait from "@/assets/file.jpeg";
import { add } from "date-fns";
import { Link } from "react-router-dom";

const About = () => {
  const personalInfo = {
    name: "Sachchida Nand Chaurasia, PhD",
    personalEmail: "sachchidanand.mca07@gmail.com",
    officialEmail: "snchaurasia@bhu.ac.in",
    mobile: "+95 9492425485",
    currentPosition: "Assistant Professor",
    department: "Department of Computer Science",
    institution: "Banaras Hindu University",
    location: "Varanasi - 221005"
  };

  const professionalAppointments = [
    {
      period: "02/03/2020 – 11/10/2020",
      position: "Research Fellow",
      institution: "Nanyang Technological University, Singapore",
      department: "School of Computer Science and Engineering"
    },
    {
      period: "06/2018 – 16/02/2020",
      position: "PostDoctoral Research Associate",
      institution: "Queen Mary University of London, United Kingdom",
      department: "School of Electronic Engineering and Computer Science",
      advisor: "Prof. Edmund Kieran Burke, Deputy Vice-Chancellor, University of Leicester",
      additionalRole: "Second supervisor of a PhD student"
    },
    {
      period: "07/2017 – 05/2018",
      position: "Research Professor",
      institution: "Korea University, South Korea",
      department: "Research Center for Disaster Prevention Science and Technology",
      advisor: "Prof. Joong Hoon KIM, Dean, College of Engineering, Korea University, Seoul"
    },
    {
      period: "10/2015 – 04/2016",
      position: "Post-Doctoral Research Fellow",
      institution: "Liverpool John Moores University, Liverpool, United Kingdom",
      department: "Faculty of Engineering and Technology",
      advisor: "Dr. T. T. Nguyen"
    }
  ];

  const education = [
    {
      period: "2010 - 2016",
      degree: "PhD in Computer Science",
      institution: "University of Hyderabad, Hyderabad, India",
      thesis: "Evolutionary Techniques for Some Combinatorial Optimization Problems",
      supervisor: "Prof. Alok Singh, Professor, University of Hyderabad"
    },
    {
      period: "2007 - 2010",
      degree: "MCA - Computer Science",
      institution: "University of Hyderabad, Hyderabad, India",
      modules: "Structured Programming, Software Engineering, Networks and Communication Systems, C, C++, Compiler, DBMS, Linux operating system",
      project: "Investigation of Black and White Travelling Salesmen Problem"
    }
  ];

  const journalPapers = [
    {
      authors: "Sachchida Nand Chaurasia, J. H. Kim",
      title: "An Evolutionary algorithm based hyper-heuristic framework for the set packing problem",
      journal: "Information Sciences, Elsevier",
      volume: "Vol 505, 1-31",
      year: "2019",
      impact: "5.910"
    },
    {
      authors: "Sachchida Nand Chaurasia and Alok Singh",
      title: "A Hybrid swarm intelligence approach to the registration area planning problem",
      journal: "Information Sciences, Elsevier",
      volume: "Vol 302, 50-69",
      year: "2015",
      impact: "5.910"
    },
    {
      authors: "Sachchida Nand Chaurasia and Alok Singh",
      title: "Hybrid evolutionary approaches for the single machine order acceptance and scheduling problem",
      journal: "Applied Soft Computing, Elsevier",
      volume: "Vol 52, 725-747",
      year: "2017",
      impact: "5.472"
    },
    {
      authors: "Sachchida Nand Chaurasia and Alok Singh",
      title: "A hybrid heuristic for dominating tree problem",
      journal: "Soft Computing, Springer-Verlag",
      volume: "Vol 20 (1), 377-397",
      year: "2016",
      impact: "3.050"
    },
    {
      authors: "Sachchida Nand Chaurasia and Alok Singh",
      title: "A hybrid evolutionary algorithm with guided mutation for minimum weight dominating Set",
      journal: "Applied Intelligence, Springer-Verlag",
      volume: "Vol 43 (3), 512-529",
      year: "2015",
      impact: "3.325"
    },
    {
      authors: "Sachchida Nand Chaurasia and Alok Singh",
      title: "A hybrid evolutionary approach to the registration area planning problem",
      journal: "Applied Intelligence, Springer-Verlag",
      volume: "Vol 41 (4), 1127-1149",
      year: "2014",
      impact: "3.325"
    },
    {
      authors: "Sachchida Nand Chaurasia, Shyam Sundar and Alok Singh",
      title: "Hybrid metaheuristic approaches for the single machine total stepwise tardiness problem with release dates",
      journal: "Operational Research, Springer-Verlag",
      volume: "Vol. 17(1), 275–295",
      year: "2016",
      impact: "1.485"
    },
    {
      authors: "Sachchida Nand Chaurasia, Shyam Sundar and Alok Singh",
      title: "A hybrid evolutionary approach for set packing problem",
      journal: "OPSEARCH, Springer-Verlag",
      volume: "vol 52 (2), 271-284",
      year: "2014"
    }
  ];



  const awardsAndFellowships = [
    "Qualified National Eligibility Test (UGC- NET) in June 2015",
    "Basic Scientific Research Fellowship (UGC) from October 2013 to June 2015",
    "Junior Research Fellowship (DST, Government of India) from August 2011 to March 2013",
    "37th position out of 5339 candidates for the MCA entrance JAM-2007, IIT Roorkee"
  ];

  const professionalActivities = [
    "Programme committee member and reviewer for International Conference on Soft Computing for Problem Solving (SocProS)-2017 at IIT Bhubaneswar",
    "Programme committee member and reviewer for International Conference on Recent Trends in Operations Research and Statistics (RTORS)- 2017 at IIT Roorkee",
    "Reviewer for Computational Intelligence journal, Wiley Online Library",
    "Reviewer for Applied Soft Computing journal, Elsevier",
    "Reviewer for Expert Systems With Applications, Elsevier",
    "Reviewer for Engineering Applications of Artificial Intelligence, Elsevier"
  ];

  const academicLinks = [
    { platform: "Google Scholar", url: "https://scholar.google.co.in/citations?user=hZz9PpYAAAAJ&hl=en" },
    { platform: "ORCID", url: "https://orcid.org/0000-0002-0635-0808" },
    // { platform: "DBLP", url: "#" },
    // { platform: "ResearchGate", url: "#" },
    { platform: "Scopus",url: "https://www.scopus.com/authid/detail.uri?authorId=56374333400", id: "56374333400" }
  ];

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
      type: "Research",
      advisor: "Prof. Bu-Sung Lee, Chair Professor, School of Computer Science and Engineering, NTU",
      additionalRole: "Collaborated on research projects related to evolutionary algorithms and optimization techniques"
    },
    {
      position: "Research Associate",
      organization: "Queen Mary University of London, UK",
      department: "School of Electronic Engineering and Computer Science",
      duration: "June 2018 - February 2020",
      type: "Research",
      advisor: "Prof. Edmund Kieran Burke, Deputy Vice-Chancellor, University of Leicester",
      additionalRole: "Second supervisor of a PhD student"
    },
    {
      position: "Research Professor",
      organization: "Korea University, South Korea",
      department: "Research Center for Disaster Prevention Science and Technology",
      duration: "July 2017 - May 2018",
      type: "Research",
      advisor: "Prof. Joong Hoon KIM, Dean, College of Engineering, Korea University, Seoul",
      additionalRole: "Collaborated on research projects related to disaster prevention and management"
    },
    {
      position: "Post-Doctoral Research Fellow",
      organization: "Liverpool John Moores University, UK",
      department: "Faculty of Engineering and Technology",
      duration: "October 2015 - April 2016",
      type: "Research",
      advisor: "Dr. T. T. Nguyen"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About Dr. Sachchida Nand Chaurasia - Computer Science Researcher"
        description="Learn about Dr. Sachchida Nand Chaurasia, Assistant Professor at Banaras Hindu University. Expert in Combinatorial Optimization, Machine Learning, and Evolutionary Algorithms with 50+ publications."
        keywords="Dr. Sachchida Nand Chaurasia, Computer Science Professor, BHU, Machine Learning Expert, Evolutionary Algorithms, Combinatorial Optimization, Academic Profile"
        structuredData={[generatePersonStructuredData(), generateOrganizationStructuredData()]}
      />
      
      {/* ...existing code... */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content Side */}
              <div className="text-white space-y-8 animate-slide-up">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                    <span className="text-sm font-medium">Assistant Professor</span>
                  </div>
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Dr. Sachchida Nand 
                    <span className="block text-white/90">
                      Chaurasia
                    </span>
                  </h1>
                  <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                    Leading research in Combinatorial Optimization, Machine Learning, 
                    and Evolutionary Algorithms at Banaras Hindu University
                  </p>
                </div>
                
                {/* Contact Info */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-lighter rounded-full"></div>
                    <span className="text-white/90">{personalInfo.officialEmail}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-lighter rounded-full"></div>
                    <span className="text-white/90">{personalInfo.personalEmail}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-lighter rounded-full"></div>
                    <span className="text-white/90">{personalInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-lighter rounded-full"></div>
                    <span className="text-white/90">{personalInfo.department}, {personalInfo.institution}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary-light hover:bg-primary-lighter text-white"
                    asChild
                  >
                    <a
                      href="/src/assets/cv.pdf"
                      download="Sachchida_Nand_Chaurasia_CV.pdf"
                    >
                      Download CV
                    </a>
                  </Button>
                    <Button
                    size="lg"
                    className="border-white/0 text-white hover:bg-white/10"
                    asChild
                    >
                    <Link to="/contact">
                      Contact Me
                    </Link>
                    </Button>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative animate-fade-in">
                <div className="relative">
                  <div className="simple-card p-4">
                    <img 
                      src={professorPortrait} 
                      alt="Dr. Sachchida Nand Chaurasia" 
                      className="w-full h-96 object-cover rounded-lg"
                    />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests - Simple Cards */}
      <section className="py-20 bg-primary-lightest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Research Focus</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pioneering advances in computational intelligence and optimization algorithms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchInterests.map((interest, index) => (
              <Card key={index} className="simple-card hover-lift animate-fade-in">
                <CardContent className="p-6">
                  <div className="h-1 w-16 bg-primary rounded-full mb-4"></div>
                  <h3 className="font-semibold text-lg text-primary mb-2">{interest}</h3>
                  <div className="w-full h-px bg-primary/20"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Academic Journey</h2>
            <p className="text-xl text-muted-foreground">A path of continuous learning and research excellence</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education */}
            <div className="space-y-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-primary mb-8">Education</h3>
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="absolute left-2 top-4 w-0.5 h-16 bg-primary/20"></div>
                  <Card className="simple-card">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg text-primary">PhD in Computer Science</h4>
                        <Badge variant="secondary" className="bg-primary-lighter text-primary">2010 - 2016</Badge>
                      </div>
                      <p className="text-muted-foreground">University of Hyderabad</p>
                      <div className="mb-2">
                          <p className="text-sm font-medium text-muted-foreground mb-1">
                            <strong>Thesis:</strong> Evolutionary Techniques for Some Combinatorial Optimization Problems
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Supervisor:</strong> Dr. John Doe
                          </p>
                        </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary-light rounded-full"></div>
                  <Card className="simple-card">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg text-primary">MCA - Computer Science</h4>
                        <Badge variant="secondary" className="bg-primary-lighter text-primary">2007 - 2010</Badge>
                      </div>
                      <p className="text-muted-foreground">University of Hyderabad</p>
                       <div className="mb-2">
                          <p className="text-sm font-medium text-muted-foreground mb-1">
                            <strong>Key Modules:</strong>  Structured Programming, Software Engineering, Networks and Communication Systems, C, C++, Compiler, DBMS, Linux operating system
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Individual Project:</strong> Investigation of Black and White Travelling Salesmen Problem
                          </p>
                        </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Work History */}
            <div className="space-y-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-primary mb-8">Professional Experience</h3>
              <div className="space-y-6">
                {workHistory.map((work, index) => (
                  <div key={index} className="relative pl-8">
                    <div className={`absolute left-0 top-0 w-4 h-4 rounded-full ${
                      index === 0 ? 'bg-primary' : 'bg-primary-light'
                    }`}></div>
                    {index < workHistory.length - 1 && (
                      <div className="absolute left-2 top-4 w-0.5 h-20 bg-primary/20"></div>
                    )}
                    <Card className="simple-card hover-lift">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-lg text-primary">{work.position}</h4>
                          <Badge variant={index === 0 ? "default" : "secondary"} className={
                            index === 0 ? "bg-primary text-white" : "bg-primary-lighter text-primary"
                          }>
                            {work.type}
                          </Badge>
                        </div>
                        <p className="font-medium text-primary-light mb-1">{work.organization}</p>
                        <p className="text-sm text-muted-foreground mb-2">{work.department}</p>
                        {work.advisor && (
                          <p className="text-sm text-muted-foreground mb-1">
                            <strong>Advisor:</strong> {work.advisor}
                          </p>
                        )}
                        {work.additionalRole && (
                          <p className="text-sm text-muted-foreground mb-2">
                            <strong>Additional Role:</strong> {work.additionalRole}
                          </p>
                        )}
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
      <section className="py-20 bg-primary-lightest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Teaching Excellence</h2>
            <p className="text-xl text-muted-foreground">Courses that shape the next generation of computer scientists</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="simple-card hover-lift animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-lg text-primary">{course}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>  



      {/* Professional Activities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Professional Activities</h2>
            <p className="text-xl text-muted-foreground">Editorial and review responsibilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {professionalActivities.map((activity, index) => (
              <Card key={index} className="simple-card hover-lift animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">{activity}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Awards and Fellowships */}
      <section className="py-20 bg-primary-lightest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Awards & Fellowships</h2>
            <p className="text-xl text-muted-foreground">Recognition of academic and research excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awardsAndFellowships.map((award, index) => (
              <Card key={index} className="simple-card hover-lift animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">{award}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Academic Profiles */}
      <section className="py-20 bg-primary-lightest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Academic Presence</h2>
            <p className="text-xl text-muted-foreground">Connect and explore my research contributions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {academicLinks.map((link, index) => (
              <Button 
                key={index}
                size="lg" 
                variant="outline" 
                asChild 
                className="simple-card hover-lift border-primary text-primary hover:bg-primary hover:text-white"
              >
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6"
                >
                  <span className="font-semibold">{link.platform}</span>
                  {link.id && (
                    <span className="text-xs mt-1 opacity-70">ID: {link.id}</span>
                  )}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;