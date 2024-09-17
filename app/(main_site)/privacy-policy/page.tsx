import { brandName, email, phone } from "@/lib/utils";

const page = () => {
  return (
    <div className="page text-content">
      <header>
        <h1>Privacy Policy</h1>
        <p>
          <strong>Last Updated:</strong>{" "}
          <time dateTime="2024-09-09">9 September, 2024</time>
        </p>
      </header>

      <main>
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to the Awka Online Marketplace. Your privacy is important to
            us. This Privacy Policy outlines how we collect, use, and protect
            your personal information when you use our platform.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>
            We may collect the following types of personal information from you:
          </p>
          <ul>
            <li>
              <strong>Account Information:</strong> Name, email address, phone
              number, and payment details when you create an account or make a
              purchase.
            </li>
            <li>
              <strong>User Content:</strong> Comments, reviews, and other
              content you post on the platform.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use the
              platform, including device type, IP address, and browser details.
            </li>
            <li>
              <strong>Location Data:</strong> If enabled, we collect location
              data to offer localized services.
            </li>
          </ul>
        </section>

        <section >
          <h2>3. How We Use Your Information</h2>
          <p>We use the information collected for the following purposes:</p>
          <ul>
            <li>To create and manage your account.</li>
            <li>To process payments and deliver products.</li>
            <li>
              To provide personalized recommendations and improve the platform.
            </li>
            <li>
              To communicate with you about updates, offers, and promotions.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Sharing of Information</h2>
          <p>
            We do not share your personal information with third parties except
            in the following cases:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> We may share data with payment
              processors, delivery services, and other vendors to fulfill our
              services.
            </li>
            <li>
              <strong>Legal Obligations:</strong> When required by law, we may
              disclose personal data to authorities.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger or
              sale, your data may be transferred as part of the business assets.
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to improve your
            experience. You can manage your cookie preferences in your browser
            settings.
          </p>
        </section>

        <section>
          <h2>6. Data Security</h2>
          <p>
            We take the security of your personal data seriously. We use
            encryption and other security measures to protect your information
            from unauthorized access.
          </p>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="flex flex-col gap-y-3">
            <li>Access, correct, or delete your personal data.</li>
            <li>Opt out of marketing communications.</li>
            <li>Withdraw consent for data processing.</li>
          </ul>
        </section>

        <section>
          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. You will be
            notified of any significant changes through email or on our
            platform.
          </p>
        </section>

        <section>
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <ul className="flex flex-col gap-y-3">
            <li>
              <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <strong>Phone:</strong> {phone}
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 {brandName}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default page;
