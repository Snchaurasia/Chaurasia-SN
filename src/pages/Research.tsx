import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Target, Calendar, Users, DollarSign } from "lucide-react";

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

  const researchAreas = [
    {
      area: "Combinatorial Optimization",
      description: "Developing efficient algorithms for solving complex optimization problems",
      icon: Target
    },
    {
      area: "Evolutionary Algorithms",
      description: "Bio-inspired computational methods for solving optimization problems",
      icon: BookOpen
    },
    {
      area: "Machine Learning",
      description: "Advanced ML techniques for real-world applications",
      icon: BookOpen
    },
    {
      area: "Swarm Intelligence",
      description: "Collective behavior-based algorithms for optimization",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Research</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Advancing the frontiers of Computer Science through innovative research in optimization and machine learning
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <Card key={index} className="shadow-professional hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <area.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{area.area}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Research Project */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Current Research Project</h2>
          <Card className="shadow-hero max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{currentProject.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-sm text-muted-foreground">{currentProject.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Funding</p>
                    <p className="text-sm text-muted-foreground">₹{currentProject.amount}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Funded by</p>
                    <p className="text-sm text-muted-foreground">{currentProject.fundedBy}</p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{currentProject.description}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Recent Publications</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="shadow-professional hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {pub.year}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-lg text-primary mb-2">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {pub.authors}
                      </p>
                      <p className="text-sm font-medium text-foreground mb-1">
                        {pub.journal}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {pub.volume}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={pub.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://scholar.google.co.in/citations?user=hZz9PpYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View All Publications on Google Scholar
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Professional Activities */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Professional Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-professional">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Editorial & Review Work</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Reviewer - Computational Intelligence, Wiley Online Library</li>
                  <li>• Reviewer - Expert Systems With Applications, Elsevier</li>
                  <li>• Reviewer - Applied Soft Computing, Elsevier</li>
                  <li>• Reviewer - Engineering Applications of AI, Elsevier</li>
                  <li>• Reviewer - Swarm and Evolutionary Computation, Elsevier</li>
                  <li>• Reviewer - Neural Computing and Applications</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-professional">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Conference Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Programme Committee Member - RTORS, IIT Roorkee (2017-present)</li>
                  <li>• Programme Committee Member - SocProS (2017-present)</li>
                  <li>• Reviewer for multiple international conferences</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;