import React from 'react';
import portrait from '../assets/portrait.jpg'; // Replace with your actual image path

export default function Profile() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 mt-12 bg-emerald-50">
      <img
        src={portrait}
        alt="Portrait of the coach"
        className="w-48 h-48 object-cover rounded-full shadow-md"
      />
      <div className="text-lg max-w-2xl space-y-4">
        <p>
Mary Roberts is an experienced LMFT therapist with an BA in Psychology from UCLA and an MA in Counseling Psychology from National University.
        </p>
        <p>
Her coaching centers on developing effective life skills, healthy habits, positive communication, and improving family dynamics.
        </p>
      </div>
    </section>
  );
}

