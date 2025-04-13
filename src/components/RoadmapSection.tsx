"use client";

import { motion } from 'framer-motion';

interface RoadmapPhaseProps {
  phase: string;
  items: string[];
  completed: boolean;
  current: boolean;
}

const RoadmapPhase = ({ phase, items, completed, current }: RoadmapPhaseProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex-1"
    >
      <div className="mb-4">
        <h3 className={`text-xl font-semibold mb-3 ${current ? 'text-bestblue' : 'text-bestblue-dark'}`}>
          {phase}
        </h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={`${phase}-${index}`}
            className={`flex items-start gap-2 ${completed ? 'text-gray-500' : 'text-gray-700'}`}
          >
            {completed ? (
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            ) : current ? (
              <svg className="w-5 h-5 text-bestblue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            )}
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const RoadmapSection = () => {
  const roadmapData = [
    {
      phase: 'PHASE 1',
      items: [
        'Project Development',
        'Initial Website Launch',
        'Platform Security',
        'Branding Released',
        'Legal Entity Established',
        'Litepaper Released'
      ],
      completed: true,
      current: false,
    },
    {
      phase: 'PHASE 2',
      items: [
        'Best Wallet Development',
        'Community Building',
        'Audit Completed',
        'CEX Discussions',
        'Public Presale',
        'Marketing Campaign'
      ],
      completed: true,
      current: false,
    },
    {
      phase: 'PHASE 3',
      items: [
        'Multi-Chain Wallet Launch',
        'Staking Platform Live',
        'DEX Aggregator Launch',
        'CEX Listings',
        'Cross-Chain Bridge Integration',
        'NFT Integration'
      ],
      completed: false,
      current: true,
    },
    {
      phase: 'PHASE 4',
      items: [
        'Best Card Launch',
        'Mobile App Features Extension',
        'Governance Implementation',
        'Global Marketing Campaign',
        'Additional CEX Listings',
        'Best Swap Upgrade'
      ],
      completed: false,
      current: false,
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Roadmap</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The Best Wallet ecosystem project roadmap lays out all the key development steps that have been completed and are due to be delivered.
          </p>
        </div>

        {/* Progress bar */}
        <div className="relative mb-12">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"/>
          <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-bestblue -translate-y-1/2"/>

          <div className="relative flex justify-between">
            {roadmapData.map((phase, index) => (
              <div key={phase.phase} className="flex flex-col items-center">
                <div
                  className={`w-6 h-6 rounded-full z-10 border-2
                    ${phase.completed || phase.current
                      ? 'bg-bestblue border-bestblue'
                      : 'bg-white border-gray-300'}`}
                />
                <span
                  className={`text-sm mt-2 font-medium
                    ${phase.completed
                      ? 'text-gray-500'
                      : phase.current
                        ? 'text-bestblue'
                        : 'text-gray-400'}`}
                >
                  Phase {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapData.map((phase) => (
            <RoadmapPhase
              key={phase.phase}
              phase={phase.phase}
              items={phase.items}
              completed={phase.completed}
              current={phase.current}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
