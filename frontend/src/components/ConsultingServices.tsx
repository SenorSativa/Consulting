import React from 'react';

const ConsultingServices = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-brand-yellow mb-8">Our Consulting Services</h2>
          <p className="text-xl text-brand-white/90 mb-12">Comprehensive cannabis industry consulting tailored to your needs</p>
        </div>

        <div className="space-y-16">
          {/* Supply Chain Consulting */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-3xl font-semibold text-brand-yellow mb-6">Supply Chain Management</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black p-6 rounded-lg">
                <p className="text-brand-white/90 mb-6">
                  Optimize your cannabis supply chain from seed to sale with our expert consulting services.
                </p>
                <ul className="space-y-4 text-brand-white/80">
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Vendor relationship management and negotiation strategies
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Inventory optimization and management systems
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Distribution network design and optimization
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Quality control and compliance throughout the supply chain
                  </li>
                </ul>
              </div>
              <div className="bg-black p-6 rounded-lg space-y-4 text-brand-white/80">
                <h4 className="text-xl font-semibold text-brand-yellow">Key Benefits:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Reduced operational costs
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Improved supplier relationships
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Enhanced inventory management
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Streamlined logistics
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Operations Consulting */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-3xl font-semibold text-brand-yellow mb-6">Operations Management</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-brand-white/90 mb-6">
                  Streamline your cannabis operations for maximum efficiency and profitability.
                </p>
                <ul className="space-y-4 text-brand-white/80">
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Standard Operating Procedures (SOPs) development
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Workflow optimization and automation
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Staff training and development programs
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Quality management systems implementation
                  </li>
                </ul>
              </div>
              <div className="space-y-4 text-brand-white/80">
                <h4 className="text-xl font-semibold text-brand-yellow">Key Benefits:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Increased operational efficiency
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Improved product quality
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Enhanced employee productivity
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Better resource utilization
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cultivation Consulting */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-3xl font-semibold text-brand-yellow mb-6">Cultivation Excellence</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-brand-white/90 mb-6">
                  Master the art and science of cannabis cultivation with expert guidance.
                </p>
                <ul className="space-y-4 text-brand-white/80">
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Grow room design and optimization
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Environmental control strategies
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Nutrient management programs
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Pest and disease management
                  </li>
                </ul>
              </div>
              <div className="space-y-4 text-brand-white/80">
                <h4 className="text-xl font-semibold text-brand-yellow">Key Benefits:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Higher yield potential
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Improved product quality
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Better pest/disease control
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    Optimized resource usage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingServices;
