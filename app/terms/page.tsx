import { HomeIcon } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for gaggleniti.com",
};

const TermsPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 h-screen overflow-y-auto text-gray-900 dark:text-gray-300 px-4 sm:px-8 md:px-16 lg:px-32 py-10">
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6"
      >
        <HomeIcon className="w-5 h-5 mr-2" />
        Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-6">
        Terms and Conditions for gaggleniti.com
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p className="ml-4">
            Welcome to gaggleniti.com. By using our website and services, you
            agree to comply with and be bound by these Terms and Conditions.
            Please read these Terms carefully before accessing or using our
            website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Services Provided</h2>
          <ul className="list-disc pl-10 space-y-1">
            <li>
              Library Management System: A platform to manage and organize
              library collections.
            </li>
            <li>
              Digital Publishing: Tools and services for creating, distributing,
              and managing digital content.
            </li>
            <li>
              Digital Repository: A storage solution for digital content and
              documents.
            </li>
            <li>
              E-book Commerce: An online marketplace for purchasing and
              downloading e-books.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. User Eligibility</h2>
          <p className="ml-4">
            By using our services, you confirm that you are at least 18 years
            old or have the legal capacity to enter into binding agreements. If
            you are under 18, you may use our services only with the consent of
            a parent or guardian.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            4. User Responsibilities
          </h2>
          <ul className="list-disc pl-10 space-y-1">
            <li>
              You agree to use our services in compliance with applicable laws
              and regulations.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account details and for all activities that occur under your
              account.
            </li>
            <li>
              You agree not to misuse the services, including but not limited to
              engaging in illegal activities, distributing malware, or
              infringing on the rights of others.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            5. Content and Intellectual Property
          </h2>
          <ul className="list-disc pl-10 space-y-1">
            <li>
              <strong>Ownership of Content:</strong> All content published on
              our platform remains the property of gaggleniti.com or its
              respective owners.
            </li>
            <li>
              <strong>User-Generated Content:</strong> If you upload or submit
              any content, you grant us a non-exclusive, worldwide, royalty-free
              license to use, display, and distribute it.
            </li>
            <li>
              <strong>Copyright Infringement:</strong> If you believe your
              copyrighted work has been infringed, contact us immediately.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            6. Account Creation and Security
          </h2>
          <p className="ml-4">
            To access certain features, you may be required to create an
            account. Provide accurate information and maintain confidentiality.
            We reserve the right to suspend accounts that violate these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            7. Payment and Fees (E-book Commerce)
          </h2>
          <ul className="list-disc pl-10 space-y-1">
            <li>
              <strong>Pricing:</strong> Displayed prices are subject to change
              without notice.
            </li>
            <li>
              <strong>Payment Methods:</strong> Payments are processed securely.
              You authorize us to charge your selected method.
            </li>
            <li>
              <strong>Refund Policy:</strong> Due to the digital nature of our
              products, all sales are final unless there's an issue with the
              product.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            8. Privacy and Data Protection
          </h2>
          <p className="ml-4">
            We value your privacy. Use of your personal data is governed by our
            Privacy Policy. By using our services, you consent to this use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            9. Termination and Suspension
          </h2>
          <p className="ml-4">
            We may suspend or terminate your access without notice for
            violations or illegal activity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            10. Disclaimers and Limitation of Liability
          </h2>
          <ul className="list-disc pl-10 space-y-1">
            <li>
              <strong>Disclaimers:</strong> Services are provided "as is"
              without warranties.
            </li>
            <li>
              <strong>Limitation of Liability:</strong> We are not liable for
              damages arising from your use or inability to use our platform.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">11. Indemnity</h2>
          <p className="ml-4">
            You agree to indemnify gaggleniti.com and its team from any claims
            or damages related to your use of our services or violation of these
            Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            12. Changes to the Terms
          </h2>
          <p className="ml-4">
            We may update these Terms at any time. Updates will be posted on
            this page and are effective immediately. Please review them
            regularly.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
