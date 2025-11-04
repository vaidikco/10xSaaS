"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
export default function Home() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
  const container = document.getElementById("starfield");
  const numStars = 120;
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    const size = Math.random() * 2 + 1;
    const opacity = Math.random() * 0.8 + 0.2;

    star.className = "absolute rounded-full bg-white";
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.opacity = opacity;
    star.style.filter = "blur(1px)";
    star.style.transition = "transform 10s ease-in-out";

    container.appendChild(star);
    stars.push(star);
  }

  const animateStars = () => {
    stars.forEach((star) => {
      const moveX = Math.random() * 40 - 20; // move left/right
      const moveY = Math.random() * 20 - 10; // slight vertical drift
      star.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  };

  const interval = setInterval(animateStars, 1);
  return () => {
    clearInterval(interval);
    container.innerHTML = "";
  };
}, []);

  const sendInquiry = async () => {
    if (!message.trim()) return;

    setStatus("Sending...");

    try {
      const webhookURL =
        "https://discord.com/api/webhooks/1399023038988554302/wlaROVzMhmcCLVtrkyVXTlT7axURHKXlTfhR2Z77oS6Jqx9qX9QbnWJNGOOrBR98jlf8";

      const payload = {
        content: `💬 New Collaboration Inquiry:\n${message}`,
      };

      const res = await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("Done. Ready to cook? 🔥");
        setMessage("");
      } else {
        setStatus("❌ Something went wrong.");
      }
    } catch (err) {
      setStatus("❌ Network error.");
    }
  };

  return (
    <div>
      <section className="relative bg-black overflow-hidden min-h-screen flex flex-col font-sans justify-center items-center pb-8">
        <div
  id="starfield"
  className="absolute inset-0 overflow-hidden bg-black"
  style={{ zIndex: 0 }}
></div>

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2, duration: 5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-[40vw] text-white flex flex-col justify-center items-center z-10"
        >
        <div>
        <div id="lamp1" className="absolute opacity-70 blur-[85px] pointer-events-none"></div>
        <div id="lamp2" className="absolute opacity-70 blur-[85px] pointer-events-none"></div>
        <div id="lamp3" className="absolute opacity-70 blur-[85px] pointer-events-none"></div>

        </div></motion.div>
        {/* Motion Wrapper for main content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-[40vw] text-white flex flex-col justify-center items-center z-10"
        >
          {/* Tagline Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="px-1.5 py-1 rounded-2xl flex border-[#0a0a0a] border-4 bg-[#323232]"
          >
            <p className="text-sm">
              Pay <span className="font-semibold ">Less</span> Get{" "}
              <span className="italic font-serif">more</span>
            </p>
          </motion.div>

          {/* Main Titles */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl font-semibold text-center tracking-tighter mt-4"
          >
            10x SaaS Apps.
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-6xl font-serif italic text-center"
          >
            coming soon.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="text-md text-[#8b8a8a] mt-4"
          >
            Ready For Revolution?
          </motion.p>

          {/* Inquiry Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-4 flex w-full max-w-md bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden shadow-inner"
          >
            <input
              type="text"
              placeholder="Collaborate to extrapolate..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-[#777] px-4 py-3 focus:outline-none"
            />
            <button
              onClick={sendInquiry}
              className="px-5 bg-[#323232] hover:bg-[#444] font-serif cursor-pointer italic text-white font-medium transition-all duration-200"
            >
              Enter
            </button>
          </motion.div>

          {/* Status Message */}
          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="text-sm text-[#8b8a8a] mt-3 font-light"
            >
              {status}
            </motion.p>
          )}

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-4 text-center"
          >
            <p className="text-md text-[#8b8a8a] font-medium flex items-center justify-center">
              By
              <img
                src="/pfp.jpg"
                className="ml-2 mr-1 w-5 h-5 rounded-full"
                alt="Profile"
              />
              <a
                className="cursor-pointer hover:text-[#666666] hover:underline"
                href="https://www.github.com/vaidikco"
              >
                Vaidik Khurana.
              </a>
            </p>

            <p className="text-md text-[#8b8a8a] mt-1">
              Powered by{" "}
              <a
                className="cursor-pointer hover:text-[#666666] hover:underline"
                href="https://www.vaidik.co"
              >
                <span className="font-serif italic font-bold mx-1">vc.</span>
                vaidik.co
              </a>
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
