import Link from 'next/link';

export default function CTASection() {
  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(45, 90, 74, 0.95), rgba(64, 145, 108, 0.95))',
      }}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready to Transform Your Space?
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Visit our nursery or get in touch with us today to find the perfect plants for your home or garden.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg min-w-[200px]"
          >
            Contact Us
          </Link>
          <Link
            href="/plants"
            className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-primary transition-all transform hover:scale-105 min-w-[200px]"
          >
            View Plants
          </Link>
        </div>
      </div>
    </section>
  );
}
