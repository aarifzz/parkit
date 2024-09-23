import React from 'react';
import { Link } from 'react-router-dom';

const parkingLots = [
  {
    nameOfParkingLot: "ParkIt T. Nagar",
    availability: "Available",
    distance: "1.2 km",
    capacity: 50,
    hourlyRate: "₹20",
    features: ["24/7 Security", "CCTV Surveillance", "Online Booking"],
    coordinates: "13.0399,80.2180",
  },
  {
    nameOfParkingLot: "ParkIt Nungambakkam",
    availability: "Full",
    distance: "2.5 km",
    capacity: 30,
    hourlyRate: "₹25",
    features: ["Valet Service", "Electric Vehicle Charging", "Restrooms"],
    coordinates: "13.0604,80.2381",
  },
  {
    nameOfParkingLot: "ParkIt Anna Nagar",
    availability: "Available",
    distance: "3.0 km",
    capacity: 100,
    hourlyRate: "₹15",
    features: ["Covered Parking", "Security Guards", "Food Court"],
    coordinates: "13.0905,80.2105",
  },
  {
    nameOfParkingLot: "ParkIt Marina",
    availability: "Available",
    distance: "4.0 km",
    capacity: 70,
    hourlyRate: "₹30",
    features: ["Seaside View", "Rest Area", "Nearby Restaurants"],
    coordinates: "13.0486,80.2824",
  },
  {
    nameOfParkingLot: "ParkIt OMR",
    availability: "Available",
    distance: "5.5 km",
    capacity: 150,
    hourlyRate: "₹10",
    features: ["High-Speed Internet", "Meeting Rooms", "Cafe"],
    coordinates: "12.9352,80.2273",
  },
  {
    nameOfParkingLot: "ParkIt Kotturpuram",
    availability: "Available",
    distance: "3.5 km",
    capacity: 60,
    hourlyRate: "₹22",
    features: ["24/7 Security", "CCTV Surveillance"],
    coordinates: "13.0130,80.2490",
  },
  {
    nameOfParkingLot: "ParkIt Velachery",
    availability: "Full",
    distance: "6.1 km",
    capacity: 80,
    hourlyRate: "₹18",
    features: ["Covered Parking", "Security Guards"],
    coordinates: "12.9642,80.2187",
  },
  {
    nameOfParkingLot: "ParkIt Saidapet",
    availability: "Available",
    distance: "2.8 km",
    capacity: 45,
    hourlyRate: "₹20",
    features: ["Valet Service", "Food Court"],
    coordinates: "13.0172,80.2170",
  },
  {
    nameOfParkingLot: "ParkIt Mylapore",
    availability: "Available",
    distance: "1.8 km",
    capacity: 90,
    hourlyRate: "₹30",
    features: ["Seaside View", "CCTV Surveillance"],
    coordinates: "13.0320,80.2640",
  },
  {
    nameOfParkingLot: "ParkIt Taramani",
    availability: "Full",
    distance: "4.5 km",
    capacity: 55,
    hourlyRate: "₹24",
    features: ["Electric Vehicle Charging", "24/7 Security"],
    coordinates: "12.9725,80.2278",
  },
  {
    nameOfParkingLot: "ParkIt Adyar",
    availability: "Available",
    distance: "3.3 km",
    capacity: 100,
    hourlyRate: "₹15",
    features: ["Security Guards", "Food Court"],
    coordinates: "12.9994,80.2538",
  },
  {
    nameOfParkingLot: "ParkIt Chetpet",
    availability: "Available",
    distance: "3.7 km",
    capacity: 70,
    hourlyRate: "₹26",
    features: ["Valet Service", "CCTV Surveillance"],
    coordinates: "13.0624,80.2200",
  },
  {
    nameOfParkingLot: "ParkIt Mount Road",
    availability: "Available",
    distance: "2.1 km",
    capacity: 80,
    hourlyRate: "₹20",
    features: ["High-Speed Internet", "Online Booking"],
    coordinates: "13.0363,80.2334",
  },
  {
    nameOfParkingLot: "ParkIt Thiruvanmiyur",
    availability: "Full",
    distance: "5.9 km",
    capacity: 90,
    hourlyRate: "₹27",
    features: ["Electric Vehicle Charging", "Restrooms"],
    coordinates: "12.9948,80.2460",
  },
  {
    nameOfParkingLot: "ParkIt Alwarpet",
    availability: "Available",
    distance: "2.9 km",
    capacity: 50,
    hourlyRate: "₹28",
    features: ["Security Guards", "CCTV Surveillance"],
    coordinates: "13.0220,80.2550",
  },
  {
    nameOfParkingLot: "ParkIt Royapettah",
    availability: "Available",
    distance: "1.4 km",
    capacity: 75,
    hourlyRate: "₹21",
    features: ["Covered Parking", "Food Court"],
    coordinates: "13.0420,80.2620",
  },
  {
    nameOfParkingLot: "ParkIt Kottaiyur",
    availability: "Available",
    distance: "5.0 km",
    capacity: 120,
    hourlyRate: "₹12",
    features: ["High-Speed Internet", "Meeting Rooms"],
    coordinates: "12.9252,80.2323",
  },
  {
    nameOfParkingLot: "ParkIt Tambaram",
    availability: "Available",
    distance: "10.0 km",
    capacity: 200,
    hourlyRate: "₹15",
    features: ["24/7 Security", "CCTV Surveillance"],
    coordinates: "12.9176,80.1454",
  },
];

const BookNowPage = () => (
  <section className="py-16 bg-white w-full">
    <div className="container mx-auto flex flex-col md:flex-row">
      <div className="md:w-1/3 p-6">
        <h2 className="text-3xl font-bold text-center">Available Parking Lots</h2>
        <div className="mt-10 h-96 overflow-y-auto grid grid-cols-1 gap-6">
          {parkingLots.map((lot, index) => (
            <div key={index} className="p-6 flex justify-between mb-4 bg-gray-100 border-8 rounded-xl text-center shadow-lg">
              <div>
                <h3 className="text-xl text-start font-bold">{lot.nameOfParkingLot}</h3>
                <div className='flex'>
                  <p className="mt-2 text-gray-600">Distance: {lot.distance}</p>
                </div>
              </div>
              <Link  to="/booking/reserve" className="mt-4 bg-[#F9C935] text-black px-6 py-2 rounded-lg font-semibold">
                Reserve Spot
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-2/3 p-4">
        <h2 className="text-2xl font-bold text-center">Map View</h2>
        <iframe
          src={`https://www.google.com/maps/embed/v1/chennai?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&center=13.0827,80.2707&zoom=12&maptype=satellite`}
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className='rounded-xl'
        ></iframe>
        </div>
    </div>
  </section>
);

export default BookNowPage;
