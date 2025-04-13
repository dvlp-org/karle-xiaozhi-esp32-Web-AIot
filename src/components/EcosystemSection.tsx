"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';

const features = [
  {
    id: 'buy',
    title: 'Buy',
    imageSrc: '/images/store-1.png',
    description: 'Through our integration of Onramper, get the best exchange rates and lowest processing fees when buying crypto, including Bitcoin, Ethereum, Solana, and more! Hold $BEST tokens for reduced transaction fees when purchasing.',
  },
  {
    id: 'store',
    title: 'Store',
    imageSrc: '/images/store-2.png',
    description: 'Securely hold all your digital assets in one app and manage your entire crypto portfolio. Best Wallet uses decentralized account recovery and advanced anti-fraud mechanisms.',
  },
  {
    id: 'deposit',
    title: 'Deposit',
    imageSrc: '/images/store-3.png',
    description: 'Deposit all your crypto funds from centralized exchanges or another crypto wallet into Best Wallet, with thousands of supported tokens and over 50 different chains.',
  },
  {
    id: 'send',
    title: 'Send',
    imageSrc: '/images/store-4.png',
    description: 'Send your crypto seamlessly, with useful features like an address book for easy repeat transactions and clear breakdowns of gas fees.',
  },
  {
    id: 'swap',
    title: 'Swap',
    imageSrc: '/images/store-5.png',
    description: 'Swap your tokens directly within the app, including cross-chain swaps using an autorouter to find the best exchange rates and lowest fees. Hold $BEST tokens for substantially reduced swap fees.',
  },
  {
    id: 'sell',
    title: 'Sell',
    imageSrc: '/images/store-6.png',
    description: 'Sell your crypto directly in-app, meaning you can cash your crypto whenever. Buy, trade, and hold your crypto as it goes up, then exchange it for your local currency. Hold $BEST for substantially reduced selling fees.',
  },
  {
    id: 'manage_portfolio',
    title: 'Manage Portfolio',
    imageSrc: '/images/store-7.png',
    description: 'Best Wallet supports multiwallet functionality, meaning you can track all your crypto assets across all your wallets. You can create and manage several wallets all within the same app.',
  },
  {
    id: 'stake',
    title: 'Stake',
    imageSrc: '/images/store-8.png',
    description: 'Buy and stake your crypto within the app for industry-high APY through our ecosystem of exclusive staking partner offers.',
  },
  {
    id: 'spend',
    title: 'Spend',
    imageSrc: '/images/store-9.png',
    description: 'Spend your crypto directly with the Best Card, supported by Google and Apple Pay. Get up to 8% cashback on every purchase and low-to-no fees when you hold and stake $BEST tokens.',
  },
  {
    id: 'token_launchpad',
    title: 'Token Launchpad',
    imageSrc: '/images/store-11.png',
    description: 'Buy into high-potential private stage or trending presales. Check out hype signals and project achievements. Only within Best Wallet can you see all your presale tokens before launch, meaning you can track your purchased balance, their value throughout the presale stages, and the go-live dates.',
  },
  {
    id: 'secure',
    title: 'Secure',
    imageSrc: '/images/store-12.png',
    description: 'Best Wallet is fortified with the latest cutting-edge security measures, pairing comprehensive app security with extensive crypto protection. Secure your non-custodial wallet with Two-Factor Authentication and Google/Apple account recovery.',
  },
];

const cryptoChains = [
  { id: 'ethereum', name: 'Ethereum', icon: '/images/crypto-logos/ethereum.svg' },
  { id: 'bitcoin', name: 'Bitcoin', icon: '/images/crypto-logos/bitcoin.svg' },
  { id: 'solana', name: 'Solana', icon: '/images/crypto-logos/solana.svg' },
  { id: 'cardano', name: 'Cardano', icon: '/images/crypto-logos/cardano.svg' },
  { id: 'polkadot', name: 'Polkadot', icon: '/images/crypto-logos/polkadot.svg' },
  { id: 'avalanche', name: 'Avalanche', icon: '/images/crypto-logos/avalanche.svg' },
  // More chains can be added here
];

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    position: 'Crypto Enthusiast',
    avatar: '/images/testimonials/user1.jpg',
    company: 'CryptoDaily',
    quote: 'With Upcoming Tokens, Best Wallet has raised the bar for crypto wallet functionality. The UI is intuitive and the security features are impressive.'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    position: 'DeFi Researcher',
    avatar: '/images/testimonials/user2.jpg',
    company: 'Cryptonews',
    quote: 'Easy to use, endlessly capable... The standout app in crypto this year. The cross-chain functionality is particularly impressive.'
  },
  {
    id: 3,
    name: 'Michael Torres',
    position: 'Blockchain Developer',
    avatar: '/images/testimonials/user3.jpg',
    company: 'CoinTelegraph',
    quote: 'Innovative, secure and intuitive - Best Wallet is a major new player in the Crypto Wallets space. Its security features set a new standard.'
  },
];

const EcosystemSection = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setActiveCard(id);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <section id="ecosystem" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -left-40 top-1/4 opacity-10">
        <Image
          src="/images/ui-elements/circle-pattern.svg"
          alt="Background design"
          width={300}
          height={300}
        />
      </div>
      <div className="absolute -right-40 bottom-1/4 opacity-10">
        <Image
          src="/images/ui-elements/circle-pattern.svg"
          alt="Background design"
          width={300}
          height={300}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            The Best Wallet <span className="text-bestblue">Ecosystem</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8"
          >
            <div className="flex flex-col items-center">
              <Image
                src="/images/tokens/best-wallet.svg"
                alt="Best Wallet"
                width={60}
                height={60}
                className="mb-2"
              />
              <span className="text-bestblue-dark font-semibold">Best Wallet</span>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/tokens/best-dex.svg"
                alt="Best DEX"
                width={60}
                height={60}
                className="mb-2"
              />
              <span className="text-bestblue-dark font-semibold">Best DEX</span>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/tokens/best-card.svg"
                alt="Best Card"
                width={60}
                height={60}
                className="mb-2"
              />
              <span className="text-bestblue-dark font-semibold">Best Card</span>
            </div>
          </motion.div>
        </div>

        <Tabs defaultValue="buy" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-px bg-gray-200" />
            <TabsList className="w-full h-auto p-0 bg-transparent overflow-x-auto flex gap-1 md:gap-4 justify-start md:justify-center">
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="flex items-center py-2 px-3 border-b-2 border-transparent data-[state=active]:border-bestblue data-[state=active]:text-bestblue"
                >
                  {feature.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="mt-8">
            {features.map((feature) => (
              <TabsContent key={feature.id} value={feature.id} className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-2xl font-semibold text-bestblue-dark mb-4">{feature.title}</h3>
                      <p className="text-gray-600 mb-6">{feature.description}</p>

                      <div className="mt-6">
                        <h4 className="text-sm font-semibold text-gray-500 mb-2">60+ Chains Supported:</h4>
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <div className="flex flex-wrap items-center gap-4">
                            {cryptoChains.map((chain) => (
                              <div key={chain.id} className="flex flex-col items-center">
                                <div className="bg-white p-2 rounded-full shadow-sm">
                                  <Image
                                    src={chain.icon}
                                    alt={chain.name}
                                    width={24}
                                    height={24}
                                    className="h-6 w-6"
                                  />
                                </div>
                                <span className="text-xs mt-1 text-gray-600">{chain.name}</span>
                              </div>
                            ))}
                            <div className="bg-white p-2 rounded-full shadow-sm">
                              <span className="text-xs font-medium text-gray-500">+50 more</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="order-1 lg:order-2 flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative max-w-xs"
                    >
                      <Image
                        src="https://ext.same-assets.com/2290528396/849522504.png"
                        alt={`${feature.title} screenshot`}
                        width={300}
                        height={600}
                        className="rounded-2xl shadow-2xl"
                      />
                      {/* Feature highlights with check icons */}
                      <div className="absolute -right-4 top-1/4 bg-white px-3 py-2 rounded-lg shadow-md">
                        <div className="flex items-center text-sm">
                          <Image
                            src="/images/ui-elements/check-circle.svg"
                            alt="Feature"
                            width={16}
                            height={16}
                            className="mr-2"
                          />
                          <span className="text-bestblue-dark font-medium">Secure</span>
                        </div>
                      </div>
                      <div className="absolute -left-4 top-1/2 bg-white px-3 py-2 rounded-lg shadow-md">
                        <div className="flex items-center text-sm">
                          <Image
                            src="/images/ui-elements/check-circle.svg"
                            alt="Feature"
                            width={16}
                            height={16}
                            className="mr-2"
                          />
                          <span className="text-bestblue-dark font-medium">Fast</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>

        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-center mb-8"
          >
            Featured in
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-bestblue-dark">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partner logos section */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-center mb-6 text-gray-600"
          >
            Trusted by industry leaders
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          >
            <Image src="/images/partners/coinbase.svg" alt="Coinbase" width={120} height={40} className="h-8 w-auto opacity-70" />
            <Image src="/images/partners/binance.svg" alt="Binance" width={120} height={40} className="h-8 w-auto opacity-70" />
            <Image src="/images/partners/kraken.svg" alt="Kraken" width={120} height={40} className="h-8 w-auto opacity-70" />
            <Image src="/images/partners/crypto-com.svg" alt="Crypto.com" width={120} height={40} className="h-8 w-auto opacity-70" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
