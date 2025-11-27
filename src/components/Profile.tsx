import React from 'react';

const Profile = () => {
  return (
    <section id="profile" className="py-32 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-zinc-500 text-sm font-light tracking-[0.2em] uppercase">
              Profile Image
            </p>
            <h2 className="text-4xl sm:text-5xl font-extralight text-white leading-tight">
              My Profile Picture
            </h2>
          </div>

          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/300x300/ffffff/000000?text=Profile"
              alt="Profile Image"
              className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-8 border-zinc-700 object-cover shadow-2xl"
            />
          </div>

          <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            This is my profile image section. You can update this image as needed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
