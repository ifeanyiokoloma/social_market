import { phone } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="page text-content">
      <header>
        <h1>Terms of Service (TOS)</h1>
        <p>
          <strong>Effective Date:</strong>{" "}
          <time dateTime="2024-09-17">17 September 2024</time>
        </p>
      </header>

      <main>
        {/* Introduction */}
        <p>
          Welcome to PerfektMart (<q>we</q>, <q>our</q>, or <q>us</q>). These
          Terms of Service (<q>Terms</q>) govern your use of our platform,
          located at{" "}
          <Link href="/" title="PerfektMart Website">
            www.perfektmart.com.ng
          </Link>{" "}
          (the <q>Website</q>) and any associated services. By accessing or
          using our services, you agree to these Terms.
        </p>

        {/* Acceptance of Terms */}
        <section id="AcceptanceOfTerms">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By registering, accessing, or using the Website, you acknowledge
            that you have read, understood, and agree to be bound by these Terms
            and our <Link href="/PrivacyPolicy">Privacy Policy</Link>.
          </p>
        </section>

        {/* Eligibility */}
        <section id="Eligibility">
          <h2>2. Eligibility</h2>
          <p>
            You must be at least 18 years old to use our platform. By using our
            services, you confirm that you meet this requirement.
          </p>
        </section>

        {/* Account Registration */}
        <section id="AccountRegistration">
          <h2>3. Account Registration</h2>
          <p>
            You may be required to register for an account to use certain
            features of PerfektMart. You agree to:
          </p>
          <ul>
            <li>Provide accurate information during registration</li>
            <li>Keep your account details confidential</li>
            <li>Notify us immediately of unauthorized use of your account</li>
          </ul>
        </section>

        {/* Use of the Platform */}
        <section id="UseOfPlatform">
          <h2>4. Use of the Platform</h2>
          <p>
            You agree to use PerfektMart in compliance with all applicable laws.
          </p>
          <ul>
            <li>
              You must not use the platform for fraudulent activities or to
              promote illegal goods or services.
            </li>
            <li>
              You are solely responsible for all activities conducted through
              your account.
            </li>
          </ul>
        </section>

        {/* User Content */}
        <section id="UserContent">
          <h2>5. User Content</h2>
          <p>
            By posting or uploading any content (including product listings,
            reviews, or comments), you grant PerfektMart a non-exclusive,
            royalty-free, worldwide license to use, reproduce, and distribute
            your content on our platform.
          </p>
          <ul>
            <li>
              Your content must not infringe on third-party rights or violate
              any laws.
            </li>
            <li>
              PerfektMart reserves the right to remove content that violates our
              policies.
            </li>
          </ul>
        </section>

        {/* Transactions */}
        <section id="Transactions">
          <h2>6. Transactions</h2>
          <p>
            PerfektMart facilitates transactions between buyers and sellers but
            is not directly involved in the sale or delivery of goods. As such:
          </p>
          <ul>
            <li>
              Sellers are responsible for the accuracy of product listings and
              timely delivery.
            </li>
            <li>
              Buyers are responsible for conducting due diligence before
              purchasing.
            </li>
            <li>
              We do not guarantee the quality or legality of items sold on the
              platform.
            </li>
          </ul>
        </section>

        {/* Fees and Payments */}
        <section id="FeesAndPayments">
          <h2>7. Fees and Payments</h2>
          <p>
            PerfektMart may charge fees for certain services (such as premium
            listings or advertising). These fees will be clearly outlined before
            any transaction is completed.
          </p>
        </section>

        {/* Third-Party Services */}
        <section id="ThirdPartyServices">
          <h2>8. Third-Party Services</h2>
          <p>
            PerfektMart may contain links to third-party websites or services.
            We do not endorse these services and are not responsible for their
            content or actions.
          </p>
        </section>

        {/* Prohibited Activities */}
        <section id="ProhibitedActivities">
          <h2>9. Prohibited Activities</h2>
          <p>You agree not to engage in:</p>
          <ul>
            <li>Posting illegal, offensive, or inappropriate content</li>
            <li>Attempting to hack or disrupt our platform</li>
            <li>Impersonating others or creating fake accounts</li>
            <li>Spamming or harassing other users</li>
          </ul>
        </section>

        {/* Termination */}
        <section id="Termination">
          <h2>10. Termination</h2>
          <p>
            We may suspend or terminate your account at any time for violating
            these Terms, applicable laws, or engaging in prohibited activities.
            Upon termination, you lose access to all services associated with
            your account.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section id="LimitationOfLiability">
          <h2>11. Limitation of Liability</h2>
          <p>
            PerfektMart is not liable for any damages or losses resulting from:
          </p>
          <ul>
            <li>The use or inability to use our services</li>
            <li>Transactions between buyers and sellers</li>
            <li>Unauthorized access to your account or data</li>
          </ul>
        </section>

        {/* Dispute Resolution */}
        <section id="DisputeResolution">
          <h2>12. Dispute Resolution</h2>
          <p>
            In the event of a dispute, both parties agree to first attempt to
            resolve the issue informally by contacting our customer service
            team. If unresolved, disputes may be resolved through mediation or
            arbitration, as allowed by applicable law.
          </p>
        </section>

        {/* Modifications to the Terms */}
        <section id="Modifications">
          <h2>13. Modifications to the Terms</h2>
          <p>
            PerfektMart reserves the right to modify these Terms at any time. We
            will notify users of significant changes, and continued use of the
            platform after changes constitutes your acceptance of the new Terms.
          </p>
        </section>

        <section id="GoverningLaw">
          <h2>14. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of [Country/Region]. Any disputes arising from these Terms will
            be resolved under the jurisdiction of [Country/Region] courts.
          </p>
        </section>

        <section id="ContactUs">
          <h2>15. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <ul>
            <li>
              Email:{" "}
              <Link href="mailto:support@perfektmart.com.ng">
                support@perfektmart.com.ng
              </Link>
            </li>
            <li>Phone: {phone}</li>
            {/* <li>Address: [Insert Address]</li> */}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default page;
