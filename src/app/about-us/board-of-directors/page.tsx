import React from 'react';
import { DirectorsCarousel } from '@/components/ui/directors-carousel';

export const metadata = {
  title: 'Board of Directors | MPGB',
  description: 'Meet the Board of Directors of Madhya Pradesh Gramin Bank.',
};

const directorsData = [
  {
    id: 1,
    name: "Shri Ramesh Chandra Behera",
    position: "Chairman MPGB",
    image: "/rameshchandra.png",
  },
  {
    id: 2,
    name: "Dr. Sudam Khade",
    position: "IAS",
    image: "/sudamkahde.png",
  },
  {
    id: 3,
    name: "Shri Bhaskar Lakshakar",
    position: "IAS, OSD-cum-Commissioner-cum-Director",
    image: "/bhaskar.png",
  },
  {
    id: 4,
    name: "Shri Jitendra Asati",
    position: "Director, DFS, Ministry of Finance",
    image: "/jitendrasati.png",
  },
  {
    id: 5,
    name: "Shri Abhijit Bose",
    position: "Chief General Manager, Bank of India",
    image: "/abhijeet.png",
  },
  {
    id: 6,
    name: "Shri Sanjay Srivastava",
    position: "Field General Manager, Bank of India",
    image: "/sanjay.png",
  },
  {
    id: 7,
    name: "Shri Suresh C. Sahoo",
    position: "General Manager NABARD, Bhopal",
    image: "/sureshsahoo.png",
  },
  {
    id: 8,
    name: "Shri Nitin Madan",
    position: "Deputy General Manager, RBI, Bhopal",
    image: "/nitin.png",
  }
];

export default function BoardOfDirectorsPage() {
  return (
    <div className="min-h-screen bg-[#050B14] text-slate-200 selection:bg-blue-500/30 overflow-hidden pt-32 pb-20">
      {/* Background Gradients & Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Our <span className="text-blue-400">Board of Directors</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Meet the visionary leaders who are carrying us forward. Their expertise and dedication are the driving force behind our mission.
          </p>
        </div>

        <div className="mt-12">
          <DirectorsCarousel directors={directorsData} />
        </div>
      </div>
    </div>
  );
}
