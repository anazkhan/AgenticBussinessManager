import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">About Us</h1>

      {/* History Section */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-8">
          <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <img 
              src="https://via.placeholder.com/600x400?text=Restaurant+History" 
              alt="Restaurant History" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-gray-700">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 1998 by the passionate culinary artist Chef Antoine Dubois, "Le Petit Bistro" began as a humble dream in a small corner of the city. With a vision to bring authentic French flavors and a cozy dining experience to the community, Chef Dubois meticulously crafted a menu that celebrated traditional recipes while embracing modern culinary techniques. Over the years, our bistro has grown, but our commitment to quality ingredients, exceptional service, and a warm, inviting atmosphere remains unwavering.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="mb-12">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-700">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-indigo-600">Culinary Excellence</h3>
              <p className="text-gray-600">
                To consistently deliver an unparalleled dining experience through innovative dishes, fresh ingredients, and masterful preparation.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-indigo-600">Warm Hospitality</h3>
              <p className="text-gray-600">
                To create a welcoming and comfortable environment where every guest feels like family, ensuring memorable moments with every visit.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-indigo-600">Community & Sustainability</h3>
              <p className="text-gray-600">
                To source locally whenever possible, support our community, and operate with a commitment to environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-700">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img 
                src="https://via.placeholder.com/150?text=Chef+Antoine" 
                alt="Chef Antoine Dubois" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <h3 className="text-xl font-bold text-gray-800">Chef Antoine Dubois</h3>
              <p className="text-indigo-600 mb-2">Founder & Head Chef</p>
              <p className="text-gray-600 text-sm">
                A visionary chef with over 30 years of experience, Chef Antoine is the heart and soul of Le Petit Bistro. His passion for French cuisine is evident in every dish.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img 
                src="https://via.placeholder.com/150?text=Manager+Sophie" 
                alt="Sophie Martin" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <h3 className="text-xl font-bold text-gray-800">Sophie Martin</h3>
              <p className="text-indigo-600 mb-2">Restaurant Manager</p>
              <p className="text-gray-600 text-sm">
                Sophie ensures that every guest experience is seamless and delightful. Her dedication to hospitality makes Le Petit Bistro a truly special place.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <img 
                src="https://via.placeholder.com/150?text=Pastry+Chef+Pierre" 
                alt="Pierre Gagnon" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <h3 className="text-xl font-bold text-gray-800">Pierre Gagnon</h3>
              <p className="text-indigo-600 mb-2">Head Pastry Chef</p>
              <p className="text-gray-600 text-sm">
                Pierre's exquisite desserts are the perfect ending to any meal. His creativity and precision in pastry-making are unmatched.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
