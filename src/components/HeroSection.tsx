"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const HeroSection = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 8,
    minutes: 51,
    seconds: 26,
  });
  const { language, translations, setLanguage } = useLanguage();

  const totalRaised = "$11,577,418.01";
  const tokenPrice = "$0.0246";

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newSeconds = prevTime.seconds - 1;

        if (newSeconds >= 0) {
          return { ...prevTime, seconds: newSeconds };
        }

        const newMinutes = prevTime.minutes - 1;
        if (newMinutes >= 0) {
          return { ...prevTime, minutes: newMinutes, seconds: 59 };
        }

        const newHours = prevTime.hours - 1;
        if (newHours >= 0) {
          return { ...prevTime, hours: newHours, minutes: 59, seconds: 59 };
        }

        const newDays = prevTime.days - 1;
        if (newDays >= 0) {
          return { days: newDays, hours: 23, minutes: 59, seconds: 59 };
        }

        clearInterval(timer);
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <section className="relative bg-banner-desktop bg-cover bg-center min-h-screen pt-28 pb-16 overflow-hidden">
      {/* Info Button */}
      <div className="fixed bottom-4 left-40 z-50">
        <Button
          onClick={() => setShowInfo(!showInfo)}
          className="bg-bestblue hover:bg-bestblue/90 text-white rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </Button>

        <AnimatePresence>
          {showInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-12 left-0 bg-bestblue-dark/90 backdrop-blur-sm text-bestblue p-4 rounded-lg shadow-lg w-64"
            >
              <h3 className="font-semibold mb-2">关于本站</h3>
              <p className="text-sm mb-2">作者: Best Wallet Token Team</p>
              <p className="text-sm mb-2">版本: 1.0.0</p>
              <p className="text-sm">©2024 Best Wallet Token. All rights reserved.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 bg-bestblue-dark/50"></div>

      {/* Floating coin animations */}
      <motion.div
        className="absolute top-24 right-1/3"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/shapes/coin.svg"
          alt="Floating coin"
          width={60}
          height={60}
        />
      </motion.div>

      <motion.div
        className="absolute top-40 left-1/4"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Image
          src="/images/shapes/coin.svg"
          alt="Floating coin"
          width={40}
          height={40}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-1/4"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Image
          src="/images/shapes/coin.svg"
          alt="Floating coin"
          width={50}
          height={50}
        />
      </motion.div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-1/3 left-10 md:left-20"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/shapes/shape1.svg"
          alt="Shape"
          width={80}
          height={80}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-10 md:right-20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <Image
          src="/images/shapes/shape2.svg"
          alt="Shape"
          width={100}
          height={100}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/4"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <Image
          src="/images/shapes/shape3.svg"
          alt="Shape"
          width={70}
          height={70}
        />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            智创无界， <span className="text-bestgold">码</span>见未来
            </h1>
            <h2 className="text-xl md:text-2xl mb-8">
            Intelligent Creation Without Limits, Code Shapes the Future
            </h2>

            <div className="flex items-center mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={star <= 4 ? "#FFD700" : "none"}
                    stroke={star <= 4 ? "#FFD700" : "#FFD700"}
                    strokeWidth="2"
                    className={cn(star === 5 && "mr-2")}
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="ml-2">Rated 4.5</span>
            </div>
          </div>

          {/* Right column - Buy form */}
          <div className="bg-bestblue-dark/90 p-6 rounded-2xl border border-bestblue/30 shadow-xl">
            <h2 className="text-2xl font-semibold text-white text-center mb-4">
            {translations.nav.Welcome}
            </h2>
            <h3 className="text-lg text-white text-center mb-6">
              ALL In Now!
            </h3>

            <div className="grid grid-cols-4 gap-2 mb-4">
              <div className="bg-bestblue-dark p-3 rounded-lg border border-bestblue/30 text-center">
                <div className="text-white text-2xl font-semibold">{formatTime(timeLeft.days)}</div>
                <div className="text-bestgray-light text-xs">          {translations.nav.Developer}
                </div>
              </div>
              <div className="bg-bestblue-dark p-3 rounded-lg border border-bestblue/30 text-center">
                <div className="text-white text-2xl font-semibold">{formatTime(timeLeft.hours)}</div>
                <div className="text-bestgray-light text-xs">{translations.nav.Project}</div>
              </div>
              <div className="bg-bestblue-dark p-3 rounded-lg border border-bestblue/30 text-center">
                <div className="text-white text-2xl font-semibold">{formatTime(timeLeft.minutes)}</div>
                <div className="text-bestgray-light text-xs">{translations.nav.Hardware}</div>
              </div>
              <div className="bg-bestblue-dark p-3 rounded-lg border border-bestblue/30 text-center">
                <div className="text-white text-2xl font-semibold">{formatTime(timeLeft.seconds)}</div>
                <div className="text-bestgray-light text-xs">{translations.nav.Engagement}</div>
              </div>
            </div>

            <div className="text-center text-sm text-bestgray-light mb-6">
              UNTIL GITHUB INCREASE
            </div>

            <div className="bg-bestblue/20 p-3 rounded-lg text-center mb-6">
              {/* <div className="text-white text-sm">https://github.com/78/xiaozhi-esp32</div> */}
              <div className="text-white text-lg font-semibold mt-1">https://github.com/78/xiaozhi-esp32</div>
            </div>

            <div className="space-y-4 mb-6">
              <button className="w-full btn-primary py-2.5">
              Download the finished product package
              </button>
              <button className="w-full btn-secondary py-2.5">
              I want to register
              </button>
            </div>

            <div className="text-center">
              <a href="#" className="text-sm text-bestblue hover:underline">
              Not returning to use?
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
