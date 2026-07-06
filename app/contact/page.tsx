'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="hero-gradient min-h-[50vh] flex items-center pt-20 px-4">
        <div className="max-w-7xl mx-auto w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 premium-text">
              Get in Touch
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you. Contact our team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Mail,
                title: 'Email',
                content: 'hello@unicocoaching.com',
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '+1 (555) 123-4567',
              },
              {
                icon: MapPin,
                title: 'Location',
                content: 'New York, NY, USA',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl glass-effect border border-primary/10 text-center"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
