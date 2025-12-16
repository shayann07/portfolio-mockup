import { Helmet } from 'react-helmet-async';

type MetaHeadProps = {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
};

export const MetaHead = ({
    title = "Muhammad Shayan | Senior Android & Flutter Engineer",
    description = "Senior Mobile Engineer specializing in offline-first architecture, ML integration, and high-performance Android/Flutter applications. Explore my production-grade portfolio.",
    image = "/og-image.png", // Assuming we'll have an OG image eventually, or use a placeholder
    url = "https://shayxo.dev",
}: MetaHeadProps) => {
    const siteTitle = title === "Muhammad Shayan | Senior Android & Flutter Engineer"
        ? title
        : `${title} | Muhammad Shayan`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle} />
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Theme Color for mobile browsers */}
            <meta name="theme-color" content="#050816" />
        </Helmet>
    );
};
