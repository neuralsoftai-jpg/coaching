'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="hero-gradient min-h-[50vh] flex items-center pt-20 px-4">
        <div className="max-w-7xl mx-auto w-full py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 premium-text">
              About UNICO
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Coming soon. Learn about our mission, vision, and the team behind UNICO Coaching.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
