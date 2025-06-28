// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Gaggleniti</title>
      <meta
        name="description"
        content="Your Smart Library Management System."
      />

      {/* Open Graph for social & Google */}
      <meta property="og:title" content="Gaggleniti" />
      <meta
        property="og:description"
        content="Manage your institution library smartly with Gaggleniti."
      />
      <meta property="og:image" content="https://gaggleniti.com/image.jpg" />
      <meta property="og:url" content="https://gaggleniti.com" />
      <meta property="og:type" content="website" />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Gaggleniti",
            url: "https://gaggleniti.com",
            logo: "https://gaggleniti.com/image.jpg",
          }),
        }}
      />
    </>
  );
}
