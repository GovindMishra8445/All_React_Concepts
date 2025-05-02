import React, { useState } from "react";

const Model = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log("Form submitted");
    handleCloseModal();
  };
  return (
    <div>
      <button onClick={handleShowModal}>Sign In</button>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-red-500 font-bold hover:text-gray-700"
              onClick={handleCloseModal}
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Sign In
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                type="submit"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Model;
