import React from "react";
import { Helmet } from "react-helmet-async";
import { seoData } from "../../utils/seoData";
const SEOHead = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  author = seoData.author,
  structuredData = null,
  noIndex = false,
}) => {
  // Construct full title
  const fullTitle = title ? `${title} | ${seoData.siteName}` : seoData.defaultTitle;

  // Use provided values or fallback to defaults
  const metaDescription = description || seoData.defaultDescription;
  const metaKeywords = keywords || seoData.defaultKeywords;
  const metaImage = image
    ? `${seoData.siteUrl}${image}`
    : `${seoData.siteUrl}${seoData.profileImage}`;
  const metaUrl = url ? `${seoData.siteUrl}${url}` : seoData.siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph Meta Tags for Social Media */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={seoData.siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:creator" content="@reyzonchhetri" />
      <meta name="twitter:site" content="@reyzonchhetri" />

      {/* Additional Meta Tags for Better SEO */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-TileImage" content="/favicon.ico" />

      {/* Canonical URL */}
      <link rel="canonical" href={metaUrl} />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
