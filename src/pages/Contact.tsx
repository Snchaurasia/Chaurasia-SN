import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactMethods = [
    {
      type: "Email",
      primary: "snchaurasia@bhu.ac.in",
      secondary: "sachchidanand.mca07@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      type: "Phone",
      primary: "+91 9492425485",
      secondary: "Available 9 AM - 5 PM",
      color: "from-green-500 to-green-600"
    },
    {
      type: "Office",
      primary: "Department of Computer Science",
      secondary: "Banaras Hindu University, Varanasi-221005",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const academicProfiles = [
    {
      name: "Google Scholar",
      description: "View publications and citation metrics",
      url: "https://scholar.google.co.in/citations?user=hZz9PpYAAAAJ&hl=en",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      name: "ORCID",
      description: "Open researcher and contributor ID",
      url: "https://orcid.org/0000-0002-0635-0808",
      gradient: "from-green-500 to-green-600"
    },
    {
      name: "Researcher ID",
      description: "Web of Science ResearcherID",
      url: "https://publons.com/researcher/1316067/sachchida-n",
      gradient: "from-purple-500 to-purple-600"
    }
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
                Let's
                <span className="block text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Connect
                </span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Open for <strong>research collaborations</strong>, <strong>academic discussions</strong>, 
                and opportunities to advance the field of computer science together
              </p>
            </div>

            {/* Quick Contact */}
            <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <div className="text-white/70 text-sm mb-1">Primary Email</div>
                  <div className="text-white font-medium">snchaurasia@bhu.ac.in</div>
                </div>
                <div>
                  <div className="text-white/70 text-sm mb-1">Phone</div>
                  <div className="text-white font-medium">+91 9492425485</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-primary-ultra-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">Multiple ways to reach out for academic and research purposes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="shadow-professional hover:shadow-float transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-2 bg-gradient-to-r ${method.color} rounded-full mx-auto mb-6`}></div>
                  <h3 className="font-bold text-xl text-primary mb-4">{method.type}</h3>
                  <p className="font-medium text-foreground mb-2">{method.primary}</p>
                  <p className="text-sm text-muted-foreground">{method.secondary}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Office Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-hero border-0 bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary">Send a Message</CardTitle>
                  <p className="text-muted-foreground">I welcome inquiries about research collaborations, academic opportunities, and professional discussions.</p>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" className="border-0 bg-primary-ultra-light focus:ring-2 focus:ring-primary" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" className="border-0 bg-primary-ultra-light focus:ring-2 focus:ring-primary" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="border-0 bg-primary-ultra-light focus:ring-2 focus:ring-primary" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                      <Input id="subject" placeholder="Research collaboration, academic inquiry, etc." className="border-0 bg-primary-ultra-light focus:ring-2 focus:ring-primary" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Please describe your inquiry, research interest, or collaboration proposal..." 
                        rows={6}
                        className="border-0 bg-primary-ultra-light focus:ring-2 focus:ring-primary resize-none"
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full shadow-professional hover:shadow-float transition-all duration-300 transform hover:-translate-y-1">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              <Card className="shadow-professional border-0 bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium text-foreground">Regular Hours</div>
                      <div className="text-sm text-muted-foreground">Monday - Friday</div>
                      <div className="text-sm text-muted-foreground">9:00 AM - 5:00 PM</div>
                    </div>
                    <div className="bg-primary-ultra-light p-4 rounded-lg">
                      <div className="text-sm text-primary font-medium">Appointments Recommended</div>
                      <div className="text-xs text-muted-foreground mt-1">Please email in advance for meetings</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-professional border-0 bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Research Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    Open to discussions on optimization algorithms, machine learning applications, 
                    and collaborative research opportunities in computer science.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Profiles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Academic Profiles</h2>
            <p className="text-xl text-muted-foreground">Connect with me across academic platforms</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academicProfiles.map((profile, index) => (
              <Card key={index} className="group shadow-professional hover:shadow-float transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-2 bg-gradient-to-r ${profile.gradient} rounded-full mx-auto mb-6`}></div>
                  <h3 className="font-bold text-xl text-primary mb-3">{profile.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{profile.description}</p>
                  <Button variant="outline" asChild className="w-full shadow-professional hover:shadow-float transition-all duration-300 transform hover:-translate-y-1">
                    <a href={profile.url} target="_blank" rel="noopener noreferrer">
                      Visit Profile
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-gradient-to-br from-secondary to-primary-ultra-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Location</h2>
            <p className="text-xl text-muted-foreground">Visit us at one of India's premier educational institutions</p>
          </div>
          
          <Card className="shadow-hero max-w-4xl mx-auto border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Banaras Hindu University</h3>
                  <p className="text-lg text-muted-foreground mb-1">Department of Computer Science</p>
                  <p className="text-muted-foreground">Varanasi-221005, Uttar Pradesh, India</p>
                </div>
                <div className="bg-primary-ultra-light p-6 rounded-2xl max-w-2xl mx-auto">
                  <p className="text-muted-foreground leading-relaxed">
                    Located in the historic and spiritual city of Varanasi, BHU is one of India's most prestigious universities, 
                    fostering excellence in education and research for over a century.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;