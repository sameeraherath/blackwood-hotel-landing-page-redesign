import React from "react";

const AboutSection = () => {
  return (
    <section className="about-section py-12 ">
      <div className="container mx-auto  px-6 sm:px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-t from-green-400 to-green-600 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Black Wood Hotel & Bungalow - Haputhale
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <img
              src="/images/about_us.jpg"
              alt="about_us"
              className="  w-full lg:pr-8 md:pr-4"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <p className="text-lg leading-relaxed bg-gradient-to-t from-gray-700 to-gray-800 bg-clip-text text-transparent  ">
              Blackwood Bungalow & Hotel is situated in Haputhale, A hill
              country town in the uva province in srilanka and is only 3Km on
              the Beragala Haputhale road. This was built on a bedrock in a
              counter style, on a steep slope of the mountain facing the
              southern plains of the country. The balconies overlook the serene
              country side and the sunset is particularity beautiful and has to
              be seen to believe the clam and quietness of the surrounding are
              so soothing to the mind and body To make your visit with us a
              memorable and also to delight our customers, our asset is our
              staff untiring and dedicated personnel who spare no pains to
              ensure maximum satisfaction with tasty food and other comforts.
              Our friendly and professional staff will ensure that your stay
              with us is a memorable and enjoyable experience.
            </p>
            <p className="mt-4 text-lg leading-relaxed bg-gradient-to-t from-gray-700 to-gray-800 bg-clip-text text-transparent">
              Enjoy our modern amenities, exquisite dining, and personalized
              service, all designed to make your stay unforgettable. Book your
              stay today and discover the tranquility of the mountains!
            </p>
            <a
              href="#contact"
              className="mt-3 inline-block px-8 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg hover:from-green-500 hover:to-green-700 transition "
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
