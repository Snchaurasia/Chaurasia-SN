import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-tertiary flex items-center justify-center">
      <SEO
        title="Page Not Found - Dr. Sachchida Nand Chaurasia"
        description="The page you're looking for doesn't exist. Return to Dr. Sachchida Nand Chaurasia's academic portfolio homepage."
        type="website"
        url={typeof window !== 'undefined' ? window.location.href : 'https://your-domain.com/404'}
      />
      
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <h1 className="text-3xl font-bold text-primary mb-4">Page Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button size="lg" asChild className="w-full">
            <a href="/">Return to Homepage</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full">
            <a href="/contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
