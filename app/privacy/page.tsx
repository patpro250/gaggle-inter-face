import Link from "next/link";
import { HomeIcon } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for gaggleniti.com",
};

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 h-screen overflow-y-auto text-gray-900 dark:text-gray-300 min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 py-10">
      <Link
        href="/"
        className="inline-flex items-center text-primary hover:underline mb-6"
      >
        <HomeIcon className="w-5 h-5 mr-2" />
        Return to Home
      </Link>

      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-6">
        At <strong>Gaggleniti.com</strong>, we respect your privacy and are
        committed to protecting your personal information. This Privacy Policy
        outlines the types of information we collect, how we use it, and how we
        protect your data. By using our website, you agree to the terms of this
        policy.
      </p>

      <div className="space-y-8">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            1. Information We Collect
          </h2>

          <div className="ml-4 space-y-4">
            <div>
              <p className="font-semibold mb-1">Personal Information:</p>
              <ul className="list-disc pl-6 space-y-1 text-base">
                <li>Name</li>
                <li>Email address</li>
                <li>Email’s profile picture</li>
                <li>Phone number</li>
                <li>Payment information (credit card details)</li>
                <li>Shipping address</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-1">Non-Personal Information:</p>
              <ul className="list-disc pl-6 space-y-1 text-base">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device type and operating system</li>
                <li>Pages visited on our website</li>
                <li>
                  Cookies (to remember preferences and improve user experience)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-10 space-y-1 text-base">
            <li>To process your orders and provide services</li>
            <li>
              To communicate with you about your account, orders, or customer
              service requests
            </li>
            <li>To personalize your experience and improve our website</li>
            <li>
              To send promotional emails and newsletters (you can opt-out
              anytime)
            </li>
            <li>To analyze website traffic and user behavior</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            3. Cookies and Tracking Technologies
          </h2>
          <p className="ml-4">
            We use cookies to enhance your browsing experience. You can disable
            cookies via your browser settings, but some features may not
            function properly without them.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            4. Third-Party Services
          </h2>
          <p className="ml-4 mb-2">
            We use third-party services to process payments, analyze traffic,
            and provide targeted advertising. These include:
          </p>
          <ul className="list-disc pl-10 space-y-1 text-base">
            <li>Payment Processors (e.g., PayPal, Stripe)</li>
            <li>Analytics Providers (e.g., Google Analytics)</li>
            <li>Advertising Networks (e.g., Google Ads, Facebook Ads)</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
          <ul className="list-disc pl-10 space-y-1 text-base mb-2">
            <li>Encryption of payment and personal data</li>
            <li>Secure servers and firewalls</li>
            <li>Regular security audits</li>
          </ul>
          <p className="ml-4">
            However, no method is 100% secure. We cannot guarantee absolute
            protection.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Your Data Rights</h2>
          <ul className="list-disc pl-10 space-y-1 text-base mb-2">
            <li>Access: Request a copy of your data</li>
            <li>Correction: Update or correct your personal information</li>
            <li>Deletion: Request deletion (subject to legal restrictions)</li>
            <li>Opt-out: Click “unsubscribe” in any marketing email</li>
          </ul>
          <p className="ml-4">
            To exercise your rights, contact us at{" "}
            <Link
              href="mailto:support@gaggleniti.com"
              className="text-primary dark:text-primary underline"
            >
              support@gaggleniti.com
            </Link>
            .
          </p>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Children’s Privacy</h2>
          <p className="ml-4">
            Our services are not intended for children under 18. If you believe
            we collected data from a child, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            8. Changes to This Privacy Policy
          </h2>
          <p className="ml-4">
            We may update this Privacy Policy at any time. Changes will be
            posted here with an updated "Effective Date." Please review it
            periodically.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
