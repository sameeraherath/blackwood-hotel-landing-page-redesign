import React from "react";

const GallerySection = () => {
  const galleryImages = [
    {
      src: "/images/Beautiful Mountain View.jpg",
      title: "Beautiful Mountain View",
    },
    {
      src: "/images/Luxurious Room Interior.jpg",
      title: "Luxurious Room Interior",
    },
    {
      src: "/images/Elegant Dining Area.jpg",
      title: "Elegant Dining Area",
    },
    {
      src: "/images/Relaxing Poolside.jpg",
      title: "Relaxing Poolside",
    },
    {
      src: "/images/Tranquil Garden View.jpg",
      title: "Tranquil Garden View",
    },
    {
      src: "/images/Breathtaking Sunset View.jpg",
      title: "Breathtaking Sunset View",
    },
    {
      src: "/images/Relaxing Spa Area.jpg",
      title: "Relaxing Spa Area",
    },
    {
      src: "/images/Modern Fitness Center.jpg",
      title: "Modern Fitness Center",
    },
  ];

  return (
    <section className="gallery-section py-12 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-t from-green-400 to-green-600 bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore the beauty and elegance of our hotel.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-card relative overflow-hidden shadow-lg rounded-lg"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold text-center px-4">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
