/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, RotateCcw } from "lucide-react";
import { HEXAGRAMS } from "./constants";

export default function App() {
  const [lines, setLines] = useState<number[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const castHexagram = useCallback(() => {
    if (isGenerating) return;
    
    setIsGenerating(true);
    setLines([]);

    let count = 0;
    const interval = setInterval(() => {
      // Securely generate a bit
      const bit = window.crypto.getRandomValues(new Uint8Array(1))[0] % 2;
      setLines((prev) => [...prev, bit]);
      count++;
      
      if (count === 6) {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 600); 
  }, [isGenerating]);

  const reset = () => {
    setLines([]);
    setIsGenerating(false);
  };

  const currentHexagram = useMemo(() => {
    if (lines.length < 6) return null;
    const binaryKey = lines.join("");
    return HEXAGRAMS[binaryKey];
  }, [lines]);

  return (
    <div className="fixed inset-0 bg-[#F5F5F7] text-black font-sans flex flex-col items-center justify-center overflow-hidden selection:bg-black selection:text-white">
      
      {/* Main Container */}
      <main className="flex flex-col items-center justify-center gap-16 w-full max-w-sm px-12">
        
        {/* Hexagram Name: Large, atmospheric Chinese character */}
        <div className="h-24 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!isGenerating && currentHexagram && (
              <motion.h1
                key="name"
                initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(8px)", y: -20 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-9xl font-zh text-black select-none pointer-events-none"
              >
                {currentHexagram.chinese}
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        {/* Hexagram Lines Visualization */}
        <div className="relative w-64 h-72 flex flex-col-reverse justify-center gap-6">
          <AnimatePresence mode="popLayout">
            {lines.length > 0 ? (
              lines.map((bit, idx) => (
                <motion.div
                  key={`line-${idx}`}
                  initial={{ opacity: 0, scaleX: 0, y: 15 }}
                  animate={{ opacity: 1, scaleX: 1, y: 0 }}
                  transition={{ 
                    duration: 0.9, 
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-[14px] w-full origin-center"
                >
                  {bit === 1 ? (
                    <div className="w-full h-full bg-black rounded-full" />
                  ) : (
                    <div className="w-full h-full flex gap-7">
                      <div className="flex-1 bg-black rounded-full" />
                      <div className="flex-1 bg-black rounded-full" />
                    </div>
                  )}
                </motion.div>
              ))
            ) : (
              /* Minimal Placeholder */
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.03 }}
                exit={{ opacity: 0 }}
                className="flex flex-col-reverse gap-6 w-full"
              >
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-3 w-full bg-black rounded-full" />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Button */}
        <div className="h-32 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {lines.length < 6 ? (
              <motion.button
                key="cast"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={castHexagram}
                disabled={isGenerating}
                className={`
                  w-20 h-20 rounded-full flex items-center justify-center transition-all duration-700
                  ${isGenerating ? "bg-black/10 text-black/20" : "bg-black text-white shadow-xl hover:shadow-2xl"}
                `}
              >
                <Sparkles size={32} className={isGenerating ? "animate-pulse" : ""} />
              </motion.button>
            ) : (
              <motion.button
                key="reset"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={reset}
                className="w-20 h-20 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 shadow-sm"
              >
                <RotateCcw size={28} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

      </main>
    </div>
  );
}
