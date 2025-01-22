"use client";
import React from "react";
import { useState } from 'react';
function MainComponent() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      restaurant: "Saravana Bhavan",
      location: "Anna Nagar, Chennai",
      rating: 4.5,
      review: "Amazing South Indian food! Must try their Masala Dosa.",
      popularDish: "Masala Dosa",
      author: "Priya R.",
      date: "2025-01-15",
    },
    {
      id: 2,
      restaurant: "Murugan Idli Shop",
      location: "T. Nagar, Chennai",
      rating: 4.8,
      review: "Best idlis in Chennai! The chutney varieties are exceptional.",
      popularDish: "Podi Idli",
      author: "Karthik S.",
      date: "2025-01-10",
    },
    {
      id: 3,
      restaurant: "Dindigul Thalappakatti",
      location: "Nungambakkam, Chennai",
      rating: 4.6,
      review:
        "The biryani here is absolutely fantastic! Authentic Dindigul style.",
      popularDish: "Mutton Biryani",
      author: "Rahul M.",
      date: "2025-01-08",
    },
    {
      id: 4,
      restaurant: "Anjappar",
      location: "Adyar, Chennai",
      rating: 4.3,
      review:
        "Great Chettinad cuisine. The chicken pepper masala is a must-try!",
      popularDish: "Chicken Pepper Masala",
      author: "Deepa K.",
      date: "2025-01-05",
    },
    {
      id: 5,
      restaurant: "Hotel Junior Kuppanna",
      location: "Kodambakkam, Chennai",
      rating: 4.4,
      review:
        "Authentic Tamil Nadu style non-veg meals. Amazing nattu kozhi curry.",
      popularDish: "Nattu Kozhi Curry",
      author: "Vijay S.",
      date: "2025-01-03",
    },
    {
      id: 6,
      restaurant: "Bombay Brasserie",
      location: "Phoenix Market City, Chennai",
      rating: 4.2,
      review:
        "Modern Indian cuisine with great ambiance. Loved the fusion dishes.",
      popularDish: "Butter Chicken Kulcha",
      author: "Sneha P.",
      date: "2025-01-01",
    },
    {
      id: 7,
      restaurant: "Buhari Hotel",
      location: "Mount Road, Chennai",
      rating: 4.7,
      review:
        "Historic restaurant with amazing biryani. The original creators of Chicken 65!",
      popularDish: "Chicken 65",
      author: "Ahmed R.",
      date: "2024-12-30",
    },
    {
      id: 8,
      restaurant: "Mathsya",
      location: "Egmore, Chennai",
      rating: 4.5,
      review:
        "Excellent pure vegetarian food. Their thali is comprehensive and delicious.",
      popularDish: "Special Thali",
      author: "Lakshmi N.",
      date: "2024-12-28",
    },
    {
      id: 9,
      restaurant: "Ratna Cafe",
      location: "Triplicane, Chennai",
      rating: 4.6,
      review: "Famous for their sambar! The idli-sambar here is legendary.",
      popularDish: "Idli Sambar",
      author: "Raman K.",
      date: "2024-12-25",
    },
    {
      id: 10,
      restaurant: "Nair Mess",
      location: "Triplicane, Chennai",
      rating: 4.4,
      review:
        "Simple, authentic Kerala meals. Their fish curry is outstanding.",
      popularDish: "Fish Curry Meals",
      author: "Maya T.",
      date: "2024-12-23",
    },
    {
      id: 11,
      restaurant: "Sangeetha Veg Restaurant",
      location: "Mylapore, Chennai",
      rating: 4.3,
      review:
        "Great variety of South Indian breakfast items. Fresh and consistent quality.",
      popularDish: "Ghee Pongal",
      author: "Venkat R.",
      date: "2024-12-20",
    },
    {
      id: 12,
      restaurant: "Eden",
      location: "Besant Nagar, Chennai",
      rating: 4.5,
      review:
        "Amazing grilled seafood with a beach view. Perfect evening dinner spot.",
      popularDish: "Grilled Fish",
      author: "Sarah J.",
      date: "2024-12-18",
    },
    {
      id: 13,
      restaurant: "Pandian Hotel",
      location: "K.K. Nagar, Chennai",
      rating: 4.2,
      review:
        "Famous for their parotta and kothu parotta. Great late-night spot.",
      popularDish: "Kothu Parotta",
      author: "Tamil S.",
      date: "2024-12-15",
    },
    {
      id: 14,
      restaurant: "Adyar Ananda Bhavan",
      location: "Multiple Locations, Chennai",
      rating: 4.4,
      review:
        "Consistent quality sweets and snacks. Their mysore pak is famous.",
      popularDish: "Mysore Pak",
      author: "Gita M.",
      date: "2024-12-13",
    },
    {
      id: 15,
      restaurant: "Madras Pavilion",
      location: "ITC Grand Chola, Chennai",
      rating: 4.8,
      review:
        "Luxury dining with excellent spread of cuisines. Perfect for special occasions.",
      popularDish: "Sunday Brunch",
      author: "Rohit P.",
      date: "2024-12-10",
    },
    {
      id: 16,
      restaurant: "Kakada Ramprasad",
      location: "Sowcarpet, Chennai",
      rating: 4.6,
      review:
        "Best chaat in Chennai! Their pani puri and bhel puri are must-try.",
      popularDish: "Pani Puri",
      author: "Anita G.",
      date: "2024-12-08",
    },
    {
      id: 17,
      restaurant: "Benjarong",
      location: "Alwarpet, Chennai",
      rating: 4.7,
      review: "Authentic Thai cuisine with beautiful ambiance. Great service!",
      popularDish: "Green Curry",
      author: "Meera S.",
      date: "2024-12-05",
    },
    {
      id: 18,
      restaurant: "Copper Kitchen",
      location: "ECR, Chennai",
      rating: 4.3,
      review:
        "Lovely beachside restaurant with great Continental and Indian options.",
      popularDish: "Wood Fired Pizza",
      author: "James P.",
      date: "2024-12-03",
    },
    {
      id: 19,
      restaurant: "Hot Chips",
      location: "Multiple Locations, Chennai",
      rating: 4.1,
      review: "Famous for their snacks and sweets. Their mixture is legendary.",
      popularDish: "Chennai Mixture",
      author: "Radha K.",
      date: "2024-12-01",
    },
    {
      id: 20,
      restaurant: "Zaitoon",
      location: "Velachery, Chennai",
      rating: 4.5,
      review:
        "Excellent Arabian food. Their shawarmas and grills are fantastic.",
      popularDish: "Shawarma",
      author: "Ali M.",
      date: "2024-11-29",
    },
  ]);

  const [showAddReview, setShowAddReview] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleAddReview = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newReview = {
      id: reviews.length + 1,
      restaurant: formData.get("restaurant"),
      location: formData.get("location"),
      rating: Number(formData.get("rating")),
      review: formData.get("review"),
      popularDish: formData.get("popularDish"),
      author: formData.get("author"),
      date: new Date().toISOString().split("T")[0],
    };
    setReviews([...reviews, newReview]);
    setShowAddReview(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 md:py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 font-roboto text-[#333333]">
          Chennai Food Reviews 🍽️
        </h1>
        <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="p-2 rounded-lg border w-full md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={() => setShowAddReview(!showAddReview)}
            className="bg-[#FF4F4F] text-white px-6 py-2 rounded-lg hover:bg-[#E63946] transition-colors"
          >
            {showAddReview ? "Cancel" : "Add Review"}
          </button>
        </div>

        {showAddReview && (
          <form
            onSubmit={handleAddReview}
            className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="restaurant"
                placeholder="Restaurant Name"
                required
                className="p-2 border rounded w-full"
              />
              <input
                type="text"
                name="location"
                placeholder="Location in Chennai"
                required
                className="p-2 border rounded w-full"
              />
              <input
                type="number"
                name="rating"
                placeholder="Rating (1-5)"
                min="1"
                max="5"
                step="0.1"
                required
                className="p-2 border rounded w-full"
              />
              <input
                type="text"
                name="popularDish"
                placeholder="Popular Dish"
                required
                className="p-2 border rounded w-full"
              />
              <input
                type="text"
                name="author"
                placeholder="Your Name"
                required
                className="p-2 border rounded w-full"
              />
              <textarea
                name="review"
                placeholder="Write your review"
                required
                className="p-2 border rounded w-full md:col-span-2"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 w-full md:w-auto bg-[#4CAF50] text-white px-6 py-2 rounded-lg hover:bg-[#45a049] transition-colors"
            >
              Submit Review
            </button>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {reviews
            .filter(
              (review) =>
                review.restaurant
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                review.location.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((review) => (
              <div
                key={review.id}
                className="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-[#333333]">
                      {review.restaurant}
                    </h2>
                    <p className="text-sm md:text-base text-gray-600">
                      📍 {review.location}
                    </p>
                  </div>
                  <div className="bg-[#FFD700] px-3 py-1 rounded-full font-bold text-sm">
                    ⭐ {review.rating}
                  </div>
                </div>
                <div className="mb-4 flex-grow">
                  <p className="font-semibold text-[#FF4F4F] text-sm md:text-base">
                    Popular Dish: {review.popularDish}
                  </p>
                  <p className="mt-2 text-sm md:text-base">{review.review}</p>
                </div>
                <div className="text-xs md:text-sm text-gray-500 flex justify-between items-center mt-auto">
                  <span>By {review.author}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;