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
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Dr. Sudam Khade",
    position: "IAS",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Shri Bhaskar Lakshakar",
    position: "IAS, OSD-cum-Commissioner-cum-Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Shri Jitendra Asati",
    position: "Director, DFS, Ministry of Finance",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    name: "Shri Abhijit Bose",
    position: "Chief General Manager, Bank of India",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    name: "Shri Sanjay Srivastava",
    position: "Field General Manager, Bank of India",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 7,
    name: "Shri Suresh C. Sahoo",
    position: "General Manager NABARD, Bhopal",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 8,
    name: "Shri Nitin Madan",
    position: "Deputy General Manager, RBI, Bhopal",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
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
