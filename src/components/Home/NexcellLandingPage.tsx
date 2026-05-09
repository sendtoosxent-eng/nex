"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ShoppingBag,
  ShieldCheck,
  Truck,
  Star,
} from "lucide-react";



export default function NexcellLandingPage() {
  return (
    <main className="bg-white overflow-hidden">
      {/* ================= LOADER ================= */}
      <div className="fixed inset-0 bg-white flex items-center justify-center z-[999] animate-pulse">
        <div className="flex flex-col items-center">
          <Image
  src="/images/logo.png"
  alt="Nexcell"
  width={170}
  height={70}
  className="object-contain"
/>

          <div className="w-52 h-2 bg-sky-100 rounded-full mt-6 overflow-hidden">
            <div className="h-full w-1/2 bg-sky-500 rounded-full animate-[loading_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-sky-100" />

        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-sky-300/30 blur-[120px] rounded-full" />

        <div className="absolute bottom-[-150px] left-[-100px] w-[450px] h-[450px] bg-sky-400/20 blur-[120px] rounded-full" />

        {/* NAVBAR */}
        <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-16 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
  src="/images/logo.png"
  alt="Nexcell"
  width={170}
  height={70}
  className="object-contain"
/>
          </div>

          <div className="hidden md:flex items-center gap-10 text-black font-medium">
            <a href="#" className="hover:text-sky-500 transition">
              Home
            </a>

            <a href="#" className="hover:text-sky-500 transition">
              Shop
            </a>

            <a href="#" className="hover:text-sky-500 transition">
              Categories
            </a>

            <a href="#" className="hover:text-sky-500 transition">
              Contact
            </a>
          </div>

          <Link
            href="/shop"
            className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-2xl transition-all duration-300 shadow-xl"
          >
            Visit Store
          </Link>
        </nav>

        {/* HERO CONTENT */}
        <div className="relative z-20 grid md:grid-cols-2 gap-10 items-center px-6 md:px-16 pt-32 pb-16 w-full">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-300 px-5 py-2 rounded-full">
              <Star className="text-sky-500 w-4 h-4" />

              <span className="text-sky-600 text-sm font-semibold">
                Latest Premium Gadgets
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight text-black">
              The Future Of
              <br />

              <span className="text-sky-500">
                Smart Gadgets
              </span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Discover premium smartphones, accessories and innovative
              gadgets designed for the next generation.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">
              <Link
                href="/shop"
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-[0_10px_40px_rgba(14,165,233,0.35)] hover:scale-105"
              >
                Go To Shop

                <ChevronRight className="w-5 h-5" />
              </Link>

              <button className="border border-sky-300 hover:bg-sky-50 px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
                Explore Products
              </button>
            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-sky-500" />

                <div>
                  <h3 className="font-bold text-black">
                    Authentic
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Genuine Products
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Truck className="text-sky-500" />

                <div>
                  <h3 className="font-bold text-black">
                    Fast Delivery
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Across Uganda
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ShoppingBag className="text-sky-500" />

                <div>
                  <h3 className="font-bold text-black">
                    Premium Store
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Trusted Quality
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center"
          >
            {/* GLOW */}
            <div className="absolute w-[500px] h-[500px] bg-sky-400/20 blur-[120px] rounded-full" />

            {/* PHONE */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="relative z-20"
            >
              <Image
  src="/images/iphone-gold.png"
  alt="Nexcell"
  width={170}
  height={70}
  className="object-contain"
/>
            </motion.div>

            {/* SHOPPER IMAGE */}
            <div className="absolute bottom-[-40px] left-[-40px] hidden md:block">
              <Image
  src="/images/iphone-hand.png"
  alt="Nexcell"
  width={170}
  height={70}
  className="object-contain"
/>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="px-6 md:px-16 pb-20">
        <div className="bg-white rounded-3xl border border-sky-100 shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-4xl font-black text-sky-500">
              500+
            </h2>

            <p className="text-gray-600 mt-2">
              Products
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-black text-sky-500">
              10K+
            </h2>

            <p className="text-gray-600 mt-2">
              Happy Clients
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-black text-sky-500">
              99%
            </h2>

            <p className="text-gray-600 mt-2">
              Satisfaction
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-black text-sky-500">
              24/7
            </h2>

            <p className="text-gray-600 mt-2">
              Support
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}