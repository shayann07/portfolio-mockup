import { Helmet } from 'react-helmet-async';

export const StructuredData = () => {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Muhammad Shayan",
        "jobTitle": "Senior Android & Flutter Engineer",
        "url": "https://shayxo.dev",
        "sameAs": [
            "https://github.com/shayann07",
            "https://linkedin.com/in/shayann05",
            // Add other social links if available in config
        ],
        "description": "Specialized in offline-first sync mechanisms, 99%+ crash-free releases, and performance optimization.",
        "knowsAbout": ["Android Development", "Flutter", "Kotlin", "Dart", "Machine Learning", "System Design"],
        "image": "https://shayxo.dev/profile.jpg", // Placeholder, should be updated with real image
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "PK" // Assuming Pakistan based on University of Sargodha, can update if moved
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Muhammad Shayan - Independent Mobile Engineer",
        "url": "https://shayxo.dev",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://shayxo.dev/?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(personSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>
        </Helmet>
    );
};
