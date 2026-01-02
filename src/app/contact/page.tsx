import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us | Lakshmi Shanmukhi Nursery Gardens',
  description:
    'Get in touch with Lakshmi Shanmukhi Nursery Gardens. Visit our nursery or send us a message about your plant needs.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Have questions about our plants? Want to visit our nursery? We'd love
            to hear from you!
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Right: Contact Info */}
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
