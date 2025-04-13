"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const BenefitCard = ({ icon, title, description, delay }: BenefitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <Image
            src={icon}
            alt={title}
            width={64}
            height={64}
            className="h-16 w-16 object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold text-bestblue-dark mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "/images/benefits/early-access.svg",
      title: "Early Access to New Projects",
      description: "$BEST gives you exclusive access to the best crypto presales and new projects before they launch.",
      delay: 0.1,
    },
    {
      icon: "/images/benefits/reduced-fees.svg",
      title: "Reduced Transaction Fees",
      description: "Benefit from reduced transaction fees across the Best Wallet ecosystem when you hold the $BEST token.",
      delay: 0.2,
    },
    {
      icon: "/images/benefits/staking-rewards.svg",
      title: "Higher Staking Rewards",
      description: "Hold $BEST tokens to gain higher APY staking opportunities in our staking aggregator.",
      delay: 0.3,
    },
    {
      icon: "/images/benefits/governance.svg",
      title: "Community Governance",
      description: "Vote on key decisions within the $BEST ecosystem. Governance rights mean you control the project's direction.",
      delay: 0.4,
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Buy $BEST Token Now!</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-bestblue-dark mb-6">Get Best Wallet Token Benefits</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Best Wallet is primed to shake up the rapidly growing non-custodial wallet market valued at $11 billion.
            Buy tokens in the $BEST crypto presale above or directly in-app to enjoy unrivalled holder benefits!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={benefit.delay}
            />
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <Image
            src="https://ext.same-assets.com/2290528396/189994652.svg"
            alt="Techopedia"
            width={120}
            height={40}
            className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="https://ext.same-assets.com/2290528396/3150269376.svg"
            alt="Bitcoinist"
            width={120}
            height={40}
            className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="https://ext.same-assets.com/2290528396/1399514988.svg"
            alt="Cryptopolitan"
            width={120}
            height={40}
            className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="https://ext.same-assets.com/2290528396/325129437.svg"
            alt="99bitcoins"
            width={120}
            height={40}
            className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="https://ext.same-assets.com/2290528396/2515393851.svg"
            alt="readwrite"
            width={120}
            height={40}
            className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="https://ext.same-assets.com/2290528396/989499846.svg"
            alt="cointelegraph"
            width={120}
            height={40}
            className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="https://ext.same-assets.com/2290528396/3004305911.svg"
            alt="Cryptonews"
            width={120}
            height={40}
            className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
