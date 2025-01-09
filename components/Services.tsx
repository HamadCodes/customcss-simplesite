import React from 'react';

const services = [
  { title: 'Custom Web Development', description: 'Tailored solutions for your business.' },
  { title: 'SEO Optimization', description: 'Boost your website’s visibility on search engines.' },
  { title: 'E-commerce Solutions', description: 'Start selling online with a custom e-commerce store.' },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
