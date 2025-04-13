"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqItems = [
    {
      question: "What is Best Wallet?",
      answer: "Best Wallet is a non-custodial mobile cryptocurrency wallet application that allows users to securely store, manage, and transact with multiple cryptocurrencies. It offers a range of features including cross-chain swaps, staking, and early access to presale tokens."
    },
    {
      question: "How do I earn $BEST tokens?",
      answer: "You can acquire $BEST tokens by participating in the presale on our website using cryptocurrency or a credit card. Once the presale ends, $BEST will be available on various exchanges."
    },
    {
      question: "How do I register for the Best Airdrop?",
      answer: "There is currently no active airdrop for $BEST tokens. The primary way to acquire tokens is through the presale. Always be cautious of scam airdrops claiming to distribute $BEST tokens."
    },
    {
      question: "How do I stake tokens bought in the $BEST crypto presale?",
      answer: "Once you've purchased $BEST tokens in the presale, you'll be able to stake them through our staking platform after it launches. Details about staking features, APY rates, and bonuses will be announced before the staking platform goes live."
    },
    {
      question: "When can I get my Best Airdrop tokens?",
      answer: "Best Wallet is not currently running an airdrop program. Legitimate token distribution will only happen through official channels. Always verify information through our official website and social media accounts."
    },
    {
      question: "Why should I buy $BEST crypto presale?",
      answer: "The $BEST token presale offers an opportunity to get in early on a utility token that powers the Best Wallet ecosystem. Holders benefit from reduced transaction fees, enhanced staking opportunities, exclusive access to new project launches, and governance rights."
    },
    {
      question: "Do I need to claim $BEST tokens with Best Wallet?",
      answer: "If you purchase $BEST tokens during the presale, you'll need to claim them when the token officially launches. We'll provide detailed instructions for claiming your tokens through our website and Best Wallet app."
    },
    {
      question: "How is Best Wallet different from traditional crypto wallets?",
      answer: "Best Wallet distinguishes itself with its intuitive user interface, enhanced security features, multi-chain support, and unique features like the Upcoming Tokens section. It combines the security of non-custodial wallets with user-friendly features typically found in centralized exchanges."
    },
    {
      question: "Is there a minimum purchase of $BEST tokens to join in the Best Airdrop?",
      answer: "Best Wallet is not currently conducting an airdrop. The only official way to acquire $BEST tokens is through our presale. Be cautious of any third parties claiming to offer $BEST tokens through airdrops as these may be scams."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-presale-airdrop bg-cover bg-center text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Best Wallet <span className="text-bestgold">Token Airdrop</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <button className="btn-primary text-lg px-10 py-3 mt-4">
              Join Token Airdrop
            </button>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-6 text-center"
          >
            Frequently asked questions
          </motion.h3>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <motion.div
                key={`faq-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="bg-bestblue-dark/60 backdrop-blur mb-4 rounded-lg overflow-hidden border-none">
                  <AccordionTrigger className="px-5 py-4 hover:bg-bestblue-dark/80 transition-colors text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-5 py-4 text-gray-200">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
