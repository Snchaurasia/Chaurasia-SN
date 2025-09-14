import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  type?: string;
  image?: string;
  url?: string;
  structuredData?: object;
}

const SEO = ({
  title = "Dr. Sachchida Nand Chaurasia - Computer Science Research & Innovation",
  description = "Dr. Sachchida Nand Chaurasia is an Assistant Professor at Banaras Hindu University, specializing in Combinatorial Optimization, Machine Learning, and Evolutionary Algorithms. Explore cutting-edge research in computer science.",
  keywords = "Dr. Sachchida Nand Chaurasia, Computer Science, Machine Learning, Evolutionary Algorithms, Combinatorial Optimization, BHU, Research, Academia, Artificial Intelligence, Optimization, Publications",
  author = "Dr. Sachchida Nand Chaurasia",
  type = "website",
  image = "/professor-portrait.jpg",
  url = "https://your-domain.com",
  structuredData
}: SEOProps) => {
  const fullTitle = title.includes("Dr. Sachchida Nand Chaurasia") 
    ? title 
    : `${title} | Dr. Sachchida Nand Chaurasia`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Viewport and Character Set */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Dr. Sachchida Nand Chaurasia" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@your_twitter_handle" />
      
      {/* Academic/Professional Meta Tags */}
      <meta name="citation_author" content="Sachchida Nand Chaurasia" />
      <meta name="citation_title" content={title} />
      <meta name="DC.creator" content="Sachchida Nand Chaurasia" />
      <meta name="DC.subject" content="Computer Science, Machine Learning, Research" />
      <meta name="DC.type" content="Text" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
