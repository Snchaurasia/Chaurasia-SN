import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Research = () => {
  const currentProject = {
    title: "Extractive and Abstractive Text Summarization of Legal Documents using Machine Learning",
    duration: "2022 - 2025",
    amount: "10 lakh",
    fundedBy: "Council of Science and Technology, Uttar Pradesh",
    description: "Research project focused on developing machine learning techniques for automated summarization of legal documents."
  };

  const publications = [
    {
      authors: "Dharm Raj Singh, Manoj Kumar Singh, Sachchida Nand Chaurasia, Anshul Verma",
      year: "2024",
      title: "Genetic Algorithm Incorporating Group Theory for Solving the General Travelling Salesman Problem",
      journal: "SN Computer Science, Springer-Verlag",
      volume: "5(8), 1075",
      url: "https://link.springer.com/article/10.1007/s42979-024-03420-0"
    },
    {
      authors: "Dharm Raj Singh, Manoj Kumar Singh, Sachchida Nand Chaurasia, Anshul Verma",
      year: "2024",
      title: "Hybrid Heuristic for Solving the Euclidean Travelling Salesman Problem",
      journal: "SN Computer Science, Springer-Verlag",
      volume: "5(8), 1050",
      url: "https://link.springer.com/article/10.1007/s42979-024-03417-9"
    },
    {
      authors: "Prabhat Ranjan Singh, Vivek Singh, Rahul Yadav, Sachchida Nand Chaurasia",
      year: "2023",
      title: "6G Networks for Artificial Intelligence-Enabled Smart Cities Applications: A Scoping Review",
      journal: "Telematics and Informatics Reports, Elsevier",
      volume: "9, 100044",
      url: "https://www.sciencedirect.com/science/article/pii/S277250302300004X"
    },
    {
      authors: "Saloni Sharma, Surabhi Srivastava, Pradeepika Verma, Anshul Verma, Sachchida Nand Chaurasia",
      year: "2023",
      title: "A Comprehensive Analysis of Indian Legal Documents Summarization Techniques",
      journal: "SN Computer Science, Springer",
      volume: "4(5), 614",
      url: "https://link.springer.com/article/10.1007/s42979-023-01983-y"
    },
    {
      authors: "Sachchida Nand Chaurasia, Joong Hoon Kim",
      year: "2019",
      title: "An evolutionary algorithm based hyper-heuristic framework for the set packing problem",
      journal: "Information Sciences, Elsevier",
      volume: "505, 1-31",
      url: "https://www.sciencedirect.com/science/article/pii/S002002551930684X?via%3Dihub"
    },
    {
      authors: "Sachchida Nand Chaurasia and Alok Singh",
      year: "2017",
      title: "Hybrid evolutionary approaches for the single machine order acceptance and scheduling problem",
      journal: "Applied Soft Computing, Elsevier",
      volume: "52, 725-747",
      url: "http://www.sciencedirect.com/science/article/pii/S1568494616305105"
    }
  ];

  const researchMetrics = [
    { label: "Publications", value: "50+", color: "from-blue-500 to-purple-600" },
    { label: "Citations", value: "1200+", color: "from-purple-500 to-pink-600" },
    { label: "H-Index", value: "18", color: "from-pink-500 to-red-600" },
    { label: "Projects", value: "15+", color: "from-red-500 to-orange-600" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="pattern-dots absolute inset-0 opacity-30"></div>
        <div className="hero-mesh absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center text-white space-y-8">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Research & 
                <span className="block text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Innovation
                </span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Advancing the frontiers of <strong>Computer Science</strong> through innovative research in 
                optimization algorithms, machine learning, and computational intelligence
              </p>
            </div>

            {/* Research Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              {researchMetrics.map((metric, index) => (
                <div key={index} className="glass-effect rounded-2xl p-6 text-center animate-fade-in">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                    {metric.value}
                  </div>
                  <div className="text-white/80 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Research Project */}
      <section className="py-20 bg-gradient-to-br from-primary-ultra-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Current Research</h2>
            <p className="text-xl text-muted-foreground">Leading-edge projects shaping the future of technology</p>
          </div>
          
          <Card className="shadow-hero max-w-5xl mx-auto border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-gradient-to-r from-primary to-primary-light text-white border-0">
                  Active Project
                </Badge>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">₹{currentProject.amount}</div>
                  <div className="text-sm text-muted-foreground">Funding</div>
                </div>
              </div>
              <CardTitle className="text-3xl text-primary leading-tight">
                {currentProject.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div>
                      <span className="font-medium">Duration: </span>
                      <span className="text-muted-foreground">{currentProject.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-light rounded-full"></div>
                    <div>
                      <span className="font-medium">Funded by: </span>
                      <span className="text-muted-foreground">{currentProject.fundedBy}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary-ultra-light to-transparent p-6 rounded-2xl">
                  <h4 className="font-semibold text-primary mb-2">Project Overview</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {currentProject.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Recent Publications</h2>
            <p className="text-xl text-muted-foreground">Contributing to the global knowledge base in computer science</p>
          </div>
          
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <Card key={index} className="shadow-professional hover:shadow-float transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="outline" className="border-primary text-primary bg-primary/5">
                          {pub.year}
                        </Badge>
                        <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-light rounded-full"></div>
                      </div>
                      <h3 className="font-bold text-xl text-primary mb-3 leading-tight">
                        {pub.title}
                      </h3>
                      <p className="text-muted-foreground mb-3 text-sm">
                        {pub.authors}
                      </p>
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground">
                          {pub.journal}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Volume: {pub.volume}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="lg" asChild className="shadow-professional hover:shadow-float transition-all duration-300 transform hover:-translate-y-1">
                      <a href={pub.url} target="_blank" rel="noopener noreferrer">
                        Read Paper
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button size="lg" variant="outline" asChild className="shadow-hero hover:shadow-float transition-all duration-300 transform hover:-translate-y-1">
              <a href="https://scholar.google.co.in/citations?user=hZz9PpYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                View All Publications on Google Scholar
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gradient-to-br from-secondary to-primary-ultra-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Research Domains</h2>
            <p className="text-xl text-muted-foreground">Specialized expertise across multiple fields</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                area: "Combinatorial Optimization",
                description: "Developing efficient algorithms for solving complex optimization problems in various domains",
                gradient: "from-blue-500 to-purple-600"
              },
              {
                area: "Evolutionary Algorithms",
                description: "Bio-inspired computational methods for solving optimization and search problems",
                gradient: "from-purple-500 to-pink-600"
              },
              {
                area: "Machine Learning",
                description: "Advanced ML techniques for pattern recognition, prediction, and data analysis",
                gradient: "from-pink-500 to-red-600"
              },
              {
                area: "Swarm Intelligence",
                description: "Collective behavior-based algorithms inspired by social insects and animals",
                gradient: "from-red-500 to-orange-600"
              },
              {
                area: "Heuristic Algorithms",
                description: "Problem-solving approaches that use practical methods for satisfactory solutions",
                gradient: "from-orange-500 to-yellow-600"
              },
              {
                area: "Reinforcement Learning",
                description: "Learning optimal actions through interaction with dynamic environments",
                gradient: "from-yellow-500 to-green-600"
              }
            ].map((area, index) => (
              <Card key={index} className="group shadow-professional hover:shadow-float transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className={`h-2 w-full bg-gradient-to-r ${area.gradient} rounded-full mb-6`}></div>
                  <h3 className="font-bold text-xl text-primary mb-4">{area.area}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Activities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Professional Service</h2>
            <p className="text-xl text-muted-foreground">Contributing to the academic community through peer review and editorial work</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-hero border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-primary-light rounded-full mr-3"></div>
                  Editorial & Review Work
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Computational Intelligence, Wiley Online Library",
                  "Expert Systems With Applications, Elsevier",
                  "Applied Soft Computing, Elsevier",
                  "Engineering Applications of AI, Elsevier",
                  "Swarm and Evolutionary Computation, Elsevier",
                  "Neural Computing and Applications"
                ].map((journal, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-primary-ultra-light">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">{journal}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="shadow-hero border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary-light to-accent rounded-full mr-3"></div>
                  Conference Activities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Programme Committee Member - RTORS, IIT Roorkee",
                  "Programme Committee Member - SocProS Conference",
                  "International Conference Reviewer",
                  "Technical Program Committee Member"
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-primary-ultra-light">
                    <div className="w-2 h-2 bg-primary-light rounded-full"></div>
                    <span className="text-sm font-medium">{activity}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;