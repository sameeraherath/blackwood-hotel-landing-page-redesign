import React from "react";

const RoomsSection = () => {
  const rooms = [
    {
      name: "Deluxe Room",
      description:
        "A luxurious room with all the modern amenities and a beautiful view.",
      price: "$200/night",
      image: "/images/room 1.jpg",
    },

    {
      name: "Family Suite",
      description:
        "Spacious and comfortable, ideal for families looking for a relaxing stay.",
      price: "$350/night",
      image: "/images/room 2.jpg",
    },

    {
      name: "Standard Room",
      description:
        "A cozy room with all the essential amenities for a comfortable stay.",
      price: "$150/night",
      image: "/images/room 3.jpg",
    },
  ];

  return (
    <section className="rooms-section py-12 bg-gradient-to-b from-gray-50 to-gray-200 ">
      <div className="container mx-auto px-8 ">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-t from-green-400 to-green-600 bg-clip-text text-transparent">
            Rooms
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Explore our amazing rooms
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="room-card bg-white shadow-lg overflow-hidden"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {room.name}
                </h3>
                <p className="mt-4 text-gray-600">{room.description}</p>
                <p className="mt-4 text-xl font-semibold text-gray-800">
                  {room.price}
                </p>
                <a
                  href="#book"
                  className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg hover:from-green-500 hover:to-green-700 transition"
                >
                  {" "}
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
