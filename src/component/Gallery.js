"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import training from '../asset/img/training.jpg'
import discussion from '../asset/img/GD.jpg'
import third from '../asset/img/third.jpg'
import forth from '../asset/img/forth.jpg'
import fifth from '../asset/img/5th.jpg'
import six from '../asset/img/6th.jpg'
import seven from '../asset/img/7th.jpg'
import eight from '../asset/img/8th.jpg'
import nine from '../asset/img/9th.jpg'
import ten from '../asset/img/10th.jpg'
import engtern from '../asset/img/engtern.jpg'

// Import your video file
import sampleVideo from '../asset/img/video.mp4'

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [selectedItem, setSelectedItem] = useState(null)

  const galleryItems = [
    { 
      type: 'image', 
      src: training, 
      alt: 'Training Session',
      title: 'Training Session'
    },
    { 
      type: 'image', 
      src: discussion, 
      alt: 'Presentation',
      title: 'Group Discussion'
    },
    { 
      type: 'image', 
      src: third, 
      alt: 'Group photo',
      title: 'Hemvati Nandan Bahuguna Garhwal University Organising workshop on Personality Development & Soft Skills Training Programs'
    },
    { 
      type: 'image', 
      src: forth, 
      alt: 'Meeting room',
      title: 'Hemvati Nandan Bahuguna Garhwal University Organising workshop on Personality Development & Soft Skills Training Programs'
    },
    { 
      type: 'image', 
      src: fifth, 
      alt: 'Meeting room',
      title: 'Alumni Interaction Session on Skill up, Stand Out: Pre Graduation Strategies for a Stellar Career'
    },
    { 
      type: 'image', 
      src: six, 
      alt: 'Meeting room',
      title: 'Alumni Interaction Session on Skill up, Stand Out: Pre Graduation Strategies for a Stellar Career'
    },
    { 
      type: 'image', 
      src: seven, 
      alt: 'Meeting room',
      title: '1:1/1:2 Live Session'
    },
    { 
      type: 'image', 
      src: eight, 
      alt: 'Meeting room',
      title: '1:1 Online Session'
    },
    { 
      type: 'image', 
      src: nine, 
      alt: 'Meeting room',
      title: '1:1/1:2 Live Session'
    },
    { 
      type: 'image', 
      src: ten, 
      alt: 'Meeting room',
      title: '1:1 Online Session'
    },
    { 
      type: 'image', 
      src: engtern, 
      alt: 'Meeting room',
      title: 'Engtern'
    },
    { 
      type: 'video', 
      src: sampleVideo, 
      thumbnail: ten, // Using an existing image as thumbnail for demonstration
      alt: 'Sample Video',
      
    },
  ]

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === activeTab)

  const handleItemClick = (item) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal()
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-100"
    >

      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-indigo-500 py-12 text-center "
      >
        <h1 className="text-4xl font-bold text-white">Gallery</h1>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex gap-4 mb-8 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 rounded-md transition-colors ${
              activeTab === 'all'
                ? 'bg-indigo-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            ALL
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('video')}
            className={`px-6 py-2 rounded-md transition-colors ${
              activeTab === 'video'
                ? 'bg-indigo-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            VIDEOS
          </motion.button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.1 // Stagger effect
                }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                onClick={() => handleItemClick(item)}
              >
                {item.type === 'video' ? (
                  <div className="relative w-full h-full">
                    <img
                      src={item.thumbnail}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-300"
                      >
                        <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-indigo-600 ml-1" />
                      </motion.div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300"
                >
                  <motion.h3 
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="text-transparent group-hover:text-white font-bold text-lg text-center px-4 py-2 bg-black bg-opacity-75 rounded-lg"
                  >
                    {item.title}
                  </motion.h3>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 modal-overlay"
            onClick={handleModalClick}
          >
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full mx-4"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 z-50"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className=" rounded-lg overflow-hidden"
              >
                {selectedItem.type === 'video' ? (
                  <video
                    controls
                    autoPlay
                    className="w-full h-[580px]"
                  >
                    <source src={selectedItem.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    className="w-full h-auto"
                  />
                )}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-4 "
                >
                  <h2 className="text-xl font-semibold text-gray-800">{selectedItem.title}</h2>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Gallery

