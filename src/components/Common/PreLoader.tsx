"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PreLoader = () => {
  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute w-[350px] h-[350px] bg-sky-400/20 blur-[120px] rounded-full" />

      {/* CONTENT */}
      <div className="relative flex flex-col items-center">
        {/* LOGO ANIMATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 1,
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <Image
            src="/images/logo.png"
            alt="Nexcell Gadgets"
            width={260}
            height={120}
            priority
            className="object-contain drop-shadow-[0_10px_35px_rgba(14,165,233,0.35)]"
          />
        </motion.div>

        {/* LOADING TEXT */}
        <motion.p
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="mt-6 text-gray-600 tracking-[6px] text-sm font-semibold uppercase"
        >
          Nexcell Experience
        </motion.p>

        {/* PREMIUM LOADER BAR */}
        <div className="relative mt-6 w-56 h-2 bg-sky-100 rounded-full overflow-hidden shadow-inner">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PreLoader;