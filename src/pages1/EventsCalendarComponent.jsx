// EventsCalendar.jsx
import React, { useState } from 'react';

const EventsCalendar = () => {
  const [events] = useState([
    {
      id: 1,
      title: "Local Artisan Market",
      date: "March 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Downtown Square",
      description: "Browse handcrafted items from over 50 local artisans and makers."
    },
    {
      id: 2,
      title: "Pottery Workshop",
      date: "March 20, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Community Arts Center",
      description: "Learn basic pottery techniques from master potter Jane Smith."
    },
    {
      id: 3,
      title: "Photography Exhibition",
      date: "April 5-10, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "City Gallery",
      description: "Featuring stunning landscapes captured by local photographers."
    }
  ]);

  return (
    <section id="events" className="mb-16">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-semibold mb-6">Events Calendar</h2>
        <p className="text-gray-600 mb-8">Discover upcoming exhibitions, markets, and workshops in your community.</p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map(event => (
            <div key={event.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 p-4">
                <h3 className="text-xl font-medium">{event.title}</h3>
                <p className="text-gray-700">{event.date}</p>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-2"><span className="font-medium">Time:</span> {event.time}</p>
                <p className="text-gray-600 mb-2"><span className="font-medium">Location:</span> {event.location}</p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded hover:bg-indigo-50 transition-colors">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;