export const generatePersonStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. Sachchida Nand Chaurasia",
    "jobTitle": "Assistant Professor",
    "affiliation": {
      "@type": "Organization",
      "name": "Banaras Hindu University",
      "url": "https://www.bhu.ac.in",
      "department": {
        "@type": "Organization",
        "name": "Department of Computer Science"
      }
    },
    "url": "https://your-domain.com",
    "image": "https://your-domain.com/professor-portrait.jpg",
    "email": "snchaurasia@bhu.ac.in",
    "telephone": "+91-9492425485",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Department of Computer Science, Banaras Hindu University",
      "addressLocality": "Varanasi",
      "postalCode": "221005",
      "addressCountry": "IN"
    },
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "University of Hyderabad"
      }
    ],
    "knowsAbout": [
      "Combinatorial Optimization",
      "Evolutionary Algorithms",
      "Machine Learning",
      "Artificial Intelligence",
      "Computer Science",
      "Optimization Algorithms",
      "Swarm Intelligence",
      "Heuristic Algorithms"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Banaras Hindu University",
      "url": "https://www.bhu.ac.in"
    },
    "sameAs": [
      "https://scholar.google.co.in/citations?user=hZz9PpYAAAAJ&hl=en",
      "https://orcid.org/0000-0002-0635-0808",
      "https://publons.com/researcher/1316067/sachchida-n"
    ]
  };
};

export const generateResearchProjectStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    "name": "Extractive and Abstractive Text Summarization of Legal Documents using Machine Learning",
    "description": "Research project focused on developing machine learning techniques for automated summarization of legal documents.",
    "startDate": "2022",
    "endDate": "2025",
    "funding": {
      "@type": "Grant",
      "funder": {
        "@type": "Organization",
        "name": "Council of Science and Technology, Uttar Pradesh"
      },
      "amount": {
        "@type": "MonetaryAmount",
        "value": "1000000",
        "currency": "INR"
      }
    },
    "researcher": {
      "@type": "Person",
      "name": "Dr. Sachchida Nand Chaurasia"
    },
    "about": [
      "Machine Learning",
      "Natural Language Processing",
      "Text Summarization",
      "Legal Technology"
    ]
  };
};

export const generatePublicationStructuredData = (publication: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": publication.title,
    "author": publication.authors.split(", ").map((author: string) => ({
      "@type": "Person",
      "name": author.trim()
    })),
    "datePublished": publication.year,
    "publisher": {
      "@type": "Organization",
      "name": publication.journal
    },
    "url": publication.url,
    "volumeNumber": publication.volume,
    "about": [
      "Computer Science",
      "Algorithms",
      "Optimization",
      "Machine Learning"
    ]
  };
};

export const generateOrganizationStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Banaras Hindu University",
    "url": "https://www.bhu.ac.in",
    "logo": "https://www.bhu.ac.in/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Banaras Hindu University",
      "addressLocality": "Varanasi",
      "postalCode": "221005",
      "addressCountry": "IN"
    },
    "telephone": "+91-542-2307000",
    "department": {
      "@type": "Organization",
      "name": "Department of Computer Science",
      "employee": {
        "@type": "Person",
        "name": "Dr. Sachchida Nand Chaurasia",
        "jobTitle": "Assistant Professor"
      }
    }
  };
};
