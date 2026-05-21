import React from 'react';

const Testimonials = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold text-white text-center">Testimonials</h3>
      <p className="mt-4 text-center text-zinc-400">Client feedback and success stories will appear here.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white/3 p-5 rounded-lg">“Great work — delivery on time.” — Client A</div>
        <div className="bg-white/3 p-5 rounded-lg">“Outstanding support and quality.” — Client B</div>
        <div className="bg-white/3 p-5 rounded-lg">“Highly recommended for complex projects.” — Client C</div>
      </div>
    </section>
  );
};

export default Testimonials;
