
import React from 'react';
import type { Poll } from '../types';

// --- HELPER ICON COMPONENTS ---
const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const ChartBarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);

const DotsVerticalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
    </svg>
);


// --- POLL CARD COMPONENT ---
interface PollCardProps {
  poll: Poll;
}

const PollCard: React.FC<PollCardProps> = ({ poll }) => {
  const statusColor = poll.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400';
  
  return (
    <div className="bg-slate-800/50 rounded-lg shadow-lg p-6 transition-all duration-300 hover:bg-slate-800 hover:shadow-indigo-500/10 hover:-translate-y-1 backdrop-blur-sm border border-slate-700/50">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-slate-100">{poll.title}</h3>
        <button className="text-slate-500 hover:text-slate-300">
            <DotsVerticalIcon className="h-5 w-5"/>
        </button>
      </div>
      <p className="mt-2 text-slate-400">{poll.question}</p>
      <div className="mt-6 flex justify-between items-center">
        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusColor}`}>{poll.status}</span>
        <div className="flex items-center text-slate-400">
          <ChartBarIcon className="h-5 w-5 mr-2" />
          <span className="font-medium text-slate-300">{poll.totalVotes.toLocaleString()}</span>
          <span className="ml-1 text-sm">votes</span>
        </div>
      </div>
    </div>
  );
};

// --- MAIN DASHBOARD COMPONENT ---
const PollsDashboard: React.FC = () => {
  const samplePolls: Poll[] = [
    { id: 1, title: 'Q3 Product Roadmap', question: 'Which feature should we prioritize for the next quarter?', status: 'Active', totalVotes: 12403 },
    { id: 2, title: 'Company Offsite Location', question: 'Where should we hold our next company-wide offsite?', status: 'Active', totalVotes: 7821 },
    { id: 3, title: 'New Logo Design', question: 'Which of the new logo concepts do you prefer?', status: 'Closed', totalVotes: 21567 },
    { id: 4, title: 'Cafeteria Menu', question: 'What new cuisine should be added to the cafeteria menu?', status: 'Active', totalVotes: 3456 },
    { id: 5, title: 'Holiday Party Theme', question: 'What should be the theme for this year\'s holiday party?', status: 'Closed', totalVotes: 9812 },
    { id: 6, title: 'Tech Stack Choice', question: 'Should we migrate our frontend to Vue.js or stick with React?', status: 'Closed', totalVotes: 15233 },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white">Polls Dashboard</h1>
            <p className="mt-1 text-lg text-slate-400">Manage and view results for all company polls.</p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300">
            <PlusIcon className="h-5 w-5" />
            <span>Create New Poll</span>
          </button>
        </header>
        
        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {samplePolls.map(poll => (
              <PollCard key={poll.id} poll={poll} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PollsDashboard;
