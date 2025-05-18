import React from 'react';
import Hero from './Hero';
import Profile from './Profile';
import aboutHero from '../assets/cherry_blossoms.png';

export default function About() {
  return (
    <div className="overflow-hidden">
      <Hero image={aboutHero}>
        <h1 className="text-3xl font-bold mb-4">A to Z Coaching</h1>
        <p className="text-lg leading-relaxed">Empowering growth and transformation</p>
      </Hero>
      <div className="mt-8 px-4 max-w-3xl mx-auto text-lg leading-relaxed">
        <p>
Life is an incredible journey filled with challenges, exciting milestones, and unexpected twists and turns. Sometimes having a trained professional to talk with and share life’s challenges is beneficial to explore feelings, learn new skills, and tap into strengths and strategies.
        </p>
        <br />
        <p>
As a Licensed Marriage and Family Therapist and a former California credentialed teacher, I have over 18 years of experience working with families, teens, children, couples, and individuals. My work centers around people and my goal is to help people discover and learn to integrate and work with their strengths, passion, and potential in a mindful “here and now” way.
        </p>

        <Profile />
      </div>
    </div>
  );
}

