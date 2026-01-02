export default function BenefitsSection() {
  const benefits = [
    {
      icon: '🌳',
      title: 'Wide Selection',
      description:
        'Extensive collection of indoor, outdoor, and flowering plants to suit every space and preference.',
    },
    {
      icon: '💚',
      title: 'Healthy Plants',
      description:
        'All plants are carefully nurtured and inspected to ensure they arrive in perfect condition.',
    },
    {
      icon: '👨‍🌾',
      title: 'Expert Guidance',
      description:
        'Our knowledgeable team provides personalized care advice to help your plants thrive.',
    },
    {
      icon: '⭐',
      title: 'Quality Guaranteed',
      description:
        'We stand behind our plants with a commitment to quality and customer satisfaction.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-accent-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark text-center mb-12">
          Why Choose Us
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{benefit.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary-dark mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
