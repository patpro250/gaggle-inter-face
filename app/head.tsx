// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Gaggle Niti</title>
      <meta
        name="description"
        content="Your smart library management system."
      />

      {/* Open Graph for social & Google */}
      <meta property="og:title" content="Gaggle Niti" />
      <meta
        property="og:description"
        content="Manage your institution library smartly with Gaggle Niti."
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
            name: "Gaggle Niti",
            url: "https://gaggleniti.com",
            logo: "https://gaggleniti.com/image.jpg",
          }),
        }}
      />
    </>
  );
}
