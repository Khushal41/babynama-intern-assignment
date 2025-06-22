'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Webinar {
  id: number;
  title: string;
  speaker: string;
  date: string;
  description: string;
}

const webinars: Webinar[] = [
  {
    id: 1,
    title: "Nutrition Tips for Newborns",
    speaker: "Dr. Sumitra Meena",
    date: "2025-07-01",
    description: "Learn expert-backed nutrition tips for newborns and infants.",
  },
  {
    id: 2,
    title: "Sleep Routines for Infants",
    speaker: "Dr. Aman Verma",
    date: "2025-07-05",
    description: "Understand how to develop consistent sleep schedules.",
  },
  {
    id: 3,
    title: "Mental Health for New Parents",
    speaker: "Dr. Reema Sharma",
    date: "2025-07-10",
    description: "A session focused on stress and mental wellness for new parents.",
  },
];

const WebinarsPage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedWebinar, setSelectedWebinar] = useState<Webinar | null>(null);

  const handleViewDetails = (webinar: Webinar) => {
    console.log(`Viewing details for webinar ID: ${webinar.id}`);
    setSelectedWebinar(webinar);
    setSelectedId(webinar.id);
  };

  const closeModal = () => {
    setSelectedWebinar(null);
    setSelectedId(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-white">Upcoming Webinars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {webinars.map((webinar) => (
          <motion.div
            layout
            key={webinar.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex flex-col justify-between h-full border rounded-2xl p-6 shadow ${selectedId === webinar.id ? "border-blue-600 bg-blue-50" : "bg-white"}`}
          >
            <div>
              <h2 className="text-xl font-semibold mb-3 text-black">{webinar.title}</h2>
              <p className="text-gray-900 mb-1"><strong>Speaker:</strong> {webinar.speaker}</p>
              <p className="text-gray-900 mb-4"><strong>Date:</strong> {webinar.date}</p>
            </div>
            <button
              onClick={() => handleViewDetails(webinar)}
              className="mt-auto w-full bg-blue-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Details
            </button>
          </motion.div>
        ))}
      </div>
      {/* Modal */}
      <AnimatePresence>
        {selectedWebinar && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h2 className="text-xl font-bold mb-2 text-black">{selectedWebinar.title}</h2>
              <p className="mb-2 text-black"><strong>Speaker:</strong> {selectedWebinar.speaker}</p>
              <p className="mb-2 text-black"><strong>Date:</strong> {selectedWebinar.date}</p>
              <p className="mb-4 text-black"><strong>Description:</strong> {selectedWebinar.description}</p>
              <button
                onClick={closeModal}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WebinarsPage;
