import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { generatePersonStructuredData } from "@/lib/structuredData";

const Index = () => {
  const personData = generatePersonStructuredData();

  return (
    <div className="min-h-screen">
      <SEO
        title="Dr. SSSSSachchida Nand Chaurasia - Computer Science Research & Innovation"
        description="Dr. Sachchida Nand Chaurasia is an Assistant Professor at Banaras Hindu University, specializing in Combinatorial Optimization, Machine Learning, and Evolutionary Algorithms. Explore cutting-edge research in computer science."
        keywords="Dr. Sachchida Nand Chaurasia, Computer Science, Machine Learning, Evolutionary Algorithms, Combinatorial Optimization, BHU, Research, Academia, Artificial Intelligence, Optimization, Publications"
        type="website"
        url={typeof window !== 'undefined' ? window.location.href : 'https://your-domain.com'}
        structuredData={personData}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold">
                Dr. Sachchida Nand
                <span className="block text-secondary">Chaurasia</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Assistant Professor at Banaras Hindu University
              </p>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Advancing Computer Science through Combinatorial Optimization, 
                Machine Learning, and Evolutionary Algorithms
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                <a href="/research">Explore Research</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
                <a href="/about">About Me</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-20 bg-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Research Focus</h2>
            <p className="text-xl text-muted-foreground">Pioneering advances in computational science</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="simple-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-2 bg-secondary rounded-full mx-auto mb-6"></div>
                <h3 className="font-bold text-xl text-primary mb-4">Combinatorial Optimization</h3>
                <p className="text-muted-foreground">
                  Developing efficient algorithms for complex optimization problems
                </p>
              </CardContent>
            </Card>

            <Card className="simple-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-2 bg-accent rounded-full mx-auto mb-6"></div>
                <h3 className="font-bold text-xl text-primary mb-4">Machine Learning</h3>
                <p className="text-muted-foreground">
                  Advancing AI applications and computational intelligence
                </p>
              </CardContent>
            </Card>

            <Card className="simple-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-2 bg-primary rounded-full mx-auto mb-6"></div>
                <h3 className="font-bold text-xl text-primary mb-4">Evolutionary Algorithms</h3>
                <p className="text-muted-foreground">
                  Bio-inspired computing solutions for optimization challenges
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Let's Collaborate</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Interested in research collaboration or academic discussion? 
            I welcome opportunities to advance computer science together.
          </p>
          <Button size="lg" asChild className="text-lg px-8">
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
