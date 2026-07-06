'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Users,
  BookOpen,
  Zap,
  Target,
  Award,
  Lightbulb,
  Calendar,
  Globe,
  GraduationCap,
  Quote,
  ArrowUpRight,
  Check,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0b1d33]">
      <Header />

      {/* Hero Section - Deep Blue Midnight */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0b2b40] via-[#081e30] to-[#051522] text-white overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-left"
            >
              <motion.div variants={fadeInUp} className="mb-4">
                <span className="inline-block px-4 py-2 rounded-full bg-secondary/15 border border-secondary/30 text-[#e2a54a] text-sm font-semibold uppercase tracking-wide">
                  ✨ ELITE ICF-ACCREDITED COACH TRAINING
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight"
              >
                WELCOME TO <span className="text-[#e2a54a]">UNICO</span>
              </motion.h1>

              <motion.h2
                variants={fadeInUp}
                className="text-2xl md:text-3xl font-medium text-white/95 mb-6 italic"
              >
                45+ Years of Coach Training Excellence
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl"
              >
                Achieve the gold standard in professional coaching. Our Solution-Focused, brain-friendly methodologies empower you to unlock human potential, elevate your leadership presence, and build a prestigious coaching career.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/courses"
                  className="px-8 py-4 rounded-full bg-[#e2a54a] text-[#0b2b40] font-bold text-center hover:bg-[#d49439] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Explore Training Pathway
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </Link>
                <Link
                  href="/courses"
                  className="px-8 py-4 rounded-full border-2 border-white/60 text-white font-bold text-center hover:border-white hover:bg-white/10 transition-all"
                >
                  View Course Calendar
                </Link>
              </motion.div>
            </motion.div>

            {/* Premium Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-[#0b2b40]"
            >
              <img
                src="/hero_coach_v2.png"
                alt="UNICO Professional Executive Coach"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Floating Badges */}
              <div className="absolute top-4 left-4 px-4 py-2 rounded-xl bg-[#0b2b40]/80 backdrop-blur-md border border-white/20 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#e2a54a]" />
                <span className="text-sm font-semibold text-white">ICF Level 1 & 2 Accredited</span>
              </div>
              <div className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#4ba3c3]" />
                <span className="text-sm font-semibold text-white">45K+ Alumni Globally</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-[#071526] py-10 border-y border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '45,000+', label: 'Coaches Trained' },
              { value: '85+', label: 'Countries Represented' },
              { value: '45+', label: 'Years of Experience' },
              { value: 'ICF Gold Standard', label: 'Solution-Focused Curriculum' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl md:text-4xl font-extrabold text-[#e2a54a] mb-1">{stat.value}</p>
                <p className="text-sm text-white/70 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Premium Cream Canvas */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf6f0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-bold text-[#e2a54a] uppercase tracking-wider block mb-3">
                ABOUT UNICO COACHING
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b2b40] mb-6 tracking-tight leading-tight">
                Pioneers of Solution-Focused Coach Training
              </h2>
              <p className="text-lg text-[#5a6e7f] mb-6 leading-relaxed">
                Since 1980, UNICO has been a world leader in ICF-certified coach training. Founded by our team of master certified coaches, our unique &quot;brain-friendly&quot; methodology is built on positive psychology, neurological alignment, and solution-focused inquiry.
              </p>
              <p className="text-lg text-[#5a6e7f] mb-8 leading-relaxed">
                Rather than analyzing past failures, UNICO coaches learn to facilitate conversations that look forward, visualizing success and mapping practical, self-directed paths to sustainable outcomes.
              </p>

              <div className="space-y-4">
                {[
                  'Solution-focused legacy of unlimited human capability',
                  'Brain-friendly learning design that accelerates retention',
                  'Structured pathways to ICF credentialing (ACC, PCC, MCC)',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e2a54a]/20 flex items-center justify-center text-[#e2a54a]">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="font-semibold text-[#0b2b40]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Global Connection Graphics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-[#0b2b40] text-white overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-cover opacity-10 bg-[url('https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&q=80&w=800')]" />
              
              <Globe className="w-16 h-16 text-[#e2a54a] mb-6 relative z-10" />
              <h3 className="text-2xl font-bold mb-4 relative z-10">A Global Community of Achievers</h3>
              <p className="text-white/80 leading-relaxed mb-6 relative z-10">
                UNICO coach training programs are taught in over 15 languages, bridging cultures across 85+ countries. Whether you train live online or hybrid, you connect with an elite global network of professionals.
              </p>
              <div className="flex gap-4 relative z-10">
                <span className="px-3 py-1 rounded bg-white/10 text-xs font-semibold">Vancouver</span>
                <span className="px-3 py-1 rounded bg-white/10 text-xs font-semibold">London</span>
                <span className="px-3 py-1 rounded bg-white/10 text-xs font-semibold">Dubai</span>
                <span className="px-3 py-1 rounded bg-white/10 text-xs font-semibold">Mumbai</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pathways Section ("How Can We Help You?") */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-[#e2a54a] uppercase tracking-wider block mb-3">
              Tailored Programs
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b2b40] mb-4">
              How Can We Help You?
            </h2>
            <p className="text-lg text-[#5a6e7f] max-w-2xl mx-auto">
              Select the pathway that matches your career aspiration or organizational mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Become a Certified Coach',
                subtitle: 'FOR INDIVIDUALS',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
                description: 'Build a premium coaching practice or transition into professional coaching. Learn tools to guide clients to self-discovery, strategic clarity, and sustainable career breakthroughs.',
                badge: 'The Art & Science of Coaching',
                cta: 'Explore Coach Training',
                href: '/courses',
                color: 'border-[#e2a54a] hover:shadow-[#e2a54a]/10',
                btnColor: 'bg-[#e2a54a] text-[#0b2b40]',
              },
              {
                title: 'Train Your Organization',
                subtitle: 'FOR CORPORATIONS',
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
                description: 'Cultivate a highly engaged coaching culture within your organization. Equip executives, managers, and teams with brain-friendly skills that optimize engagement and performance.',
                badge: 'Corporate Coaching & Leadership',
                cta: 'Explore Corporate Solutions',
                href: '/courses',
                color: 'border-[#4ba3c3] hover:shadow-[#4ba3c3]/10',
                btnColor: 'bg-[#4ba3c3] text-white',
              },
            ].map((path, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`flex flex-col rounded-3xl overflow-hidden border-2 bg-white transition-all duration-300 hover:shadow-2xl ${path.color}`}
              >
                <div className="h-64 relative">
                  <img
                    src={path.image}
                    alt={path.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="text-xs font-bold text-[#e2a54a] bg-black/40 px-3 py-1 rounded-full uppercase tracking-wider">
                      {path.subtitle}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#5a6e7f] block mb-2">Core Curriculum: {path.badge}</span>
                    <h3 className="text-2xl font-bold text-[#0b2b40] mb-4">{path.title}</h3>
                    <p className="text-[#5a6e7f] leading-relaxed mb-6">{path.description}</p>
                  </div>
                  <Link
                    href={path.href}
                    className={`inline-flex items-center justify-center py-3 px-6 rounded-full font-bold transition-all hover:scale-105 ${path.btnColor}`}
                  >
                    {path.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold text-[#e2a54a] uppercase tracking-wider block mb-3">
              YOUR METHODOLOGY
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b2b40] mb-4">
              Your Learning Journey
            </h2>
            <p className="text-lg text-[#5a6e7f] max-w-2xl mx-auto">
              Follow our structured, brain-friendly pathway to become an elite certified coach.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4"
          >
            {[
              { step: '1', title: 'Enroll', desc: 'Secure your cohort place' },
              { step: '2', title: 'Learn', desc: 'Attend live online classes' },
              { step: '3', title: 'Practice', desc: 'Conduct peer coaching' },
              { step: '4', title: 'Get Certified', desc: 'Gain ICF credentials' },
              { step: '5', title: 'Build Career', desc: 'Launch coaching practice' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col items-center flex-1 relative text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-[#0b2b40] text-white flex items-center justify-center text-2xl font-black mb-4 shadow-lg border-2 border-[#e2a54a] group-hover:scale-110 transition-transform duration-300 z-10">
                  {item.step}
                </div>
                <h4 className="font-bold text-[#0b2b40] text-lg mb-1">{item.title}</h4>
                <p className="text-xs text-[#5a6e7f] max-w-[150px]">{item.desc}</p>
                {i < 4 && (
                  <div className="hidden md:block absolute left-[60%] top-8 w-[calc(100%-40px)] h-0.5 bg-gradient-to-r from-[#e2a54a] to-[#4ba3c3] z-0" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Courses Catalog ("Join an Upcoming Course") */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f0f6fa]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-[#e2a54a] uppercase tracking-wider block mb-3">
              ENROLL TODAY
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b2b40] mb-4">
              Join an Upcoming Course
            </h2>
            <p className="text-lg text-[#5a6e7f] max-w-2xl mx-auto">
              Secure your place in our high-demand cohorts. Facilitated live online via Zoom.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'The Art & Science of Coaching (Level 1 & 2)',
                duration: '12 Weeks',
                schedule: 'Mon & Wed (Live Zoom)',
                date: 'July 20, 2026',
                price: '$4,999',
                level: 'ICF Accredited',
                tag: 'POPULAR',
              },
              {
                title: 'Executive Leadership Coaching Certification',
                duration: '8 Weeks',
                schedule: 'Tue & Thu (Live Zoom)',
                date: 'August 12, 2026',
                price: '$3,499',
                level: 'Advanced Leaders',
                tag: 'EXECUTIVE',
              },
              {
                title: 'Coaching Competencies for Managers',
                duration: '4 Weeks',
                schedule: 'Fridays (Live Zoom)',
                date: 'September 05, 2026',
                price: '$1,999',
                level: 'Core Skills',
                tag: 'FOUNDATIONAL',
              },
            ].map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-[#e2a54a] bg-[#e2a54a]/10 px-3 py-1 rounded-full">
                      {course.tag}
                    </span>
                    <span className="text-xs text-[#5a6e7f] font-semibold">{course.level}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0b2b40] mb-4 min-h-[56px]">
                    {course.title}
                  </h3>

                  <div className="space-y-3 mb-6 pt-4 border-t border-[#f0f6fa]">
                    <div className="flex items-center gap-2 text-sm text-[#5a6e7f]">
                      <Calendar className="w-4 h-4 text-[#e2a54a]" />
                      <span>Starts: <strong>{course.date}</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#5a6e7f]">
                      <Clock className="w-4 h-4 text-[#e2a54a]" />
                      <span>Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#5a6e7f]">
                      <Users className="w-4 h-4 text-[#e2a54a]" />
                      <span>Format: {course.schedule}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-[#faf6f0] border-t border-[#e2e8f0] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#5a6e7f] block">Investment</span>
                    <span className="text-2xl font-bold text-[#0b2b40]">{course.price}</span>
                  </div>
                  <Link
                    href="/courses"
                    className="px-5 py-2.5 rounded-full bg-[#e2a54a] text-[#0b2b40] font-bold text-sm hover:bg-[#d49439] transition-all"
                  >
                    Enroll Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ICF Award Member & Credentials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0b2b40] text-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Coach Trainer Clapping */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
                alt="ICF Credentialed Mentor Coach Clapping"
                className="w-full h-auto object-cover max-h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b40]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0b2b40]/90 backdrop-blur-md border border-white/10">
                <p className="text-sm font-semibold italic text-white/90">
                  &quot;Solution-focused coaching isn&apos;t just about asking questions, it&apos;s about helping people activate their inner resourcefulness.&quot;
                </p>
                <p className="text-xs text-[#e2a54a] font-bold mt-2">— Lead Trainer, UNICO Coaching</p>
              </div>
            </motion.div>

            {/* ICF credentials details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-bold text-[#e2a54a] uppercase tracking-wider block mb-3">
                GLOBAL ACCREDITATION
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                ICF Award Member & Pioneer
              </h2>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                As a long-standing member of the International Coaching Federation (ICF), UNICO has pioneered the integration of neuroscientific findings and coaching psychology.
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Our programs carry full Level 1 (formerly ACSTH) and Level 2 (formerly ACTP) accreditations. Graduates receive credentials recognized in corporate boardrooms and private practices globally.
              </p>

              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                <div>
                  <p className="text-2xl font-bold text-[#e2a54a]">ACTP</p>
                  <p className="text-xs text-white/60">Level 2 Path</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#e2a54a]">ACSTH</p>
                  <p className="text-xs text-white/60">Level 1 Path</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#e2a54a]">CCE</p>
                  <p className="text-xs text-white/60">Continuous Ed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials - What Our Community Says */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf6f0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-[#e2a54a] uppercase tracking-wider block mb-3">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b2b40] mb-4">
              What Our Community Says
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Jenkins',
                role: 'Director of HR, Microsoft',
                text: 'UNICO training fundamentally reshaped my leadership style. The Solution-Focused framework helps our team stay agile and highly collaborative under pressure.',
                rating: 5,
                img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
              },
              {
                name: 'David Varma',
                role: 'Founder & CEO, ScaleCorp',
                text: 'As an entrepreneur, the Entrepreneurial Mastery principles I learned gave me structural clarity to scale. I now coach my co-founders effectively.',
                rating: 5,
                img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
              },
              {
                name: 'Elena Rostova',
                role: 'Professional Executive Coach',
                text: 'The Art & Science of Coaching program gave me the confidence and credentialing to transition to a full-time coaching business. The mentor support is unparalleled.',
                rating: 5,
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-[#e2e8f0] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {Array(item.rating)
                      .fill(0)
                      .map((_, j) => (
                        <Star key={j} className="w-5 h-5 fill-[#e2a54a] text-[#e2a54a]" />
                      ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#e2a54a]/20 mb-4" />
                  <p className="text-[#5a6e7f] leading-relaxed mb-6 italic">
                    &quot;{item.text}&quot;
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-[#f0f6fa]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-[#0b2b40]">{item.name}</h4>
                    <p className="text-xs text-[#5a6e7f]">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section - Upcoming Free Events */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <span className="text-sm font-bold text-[#e2a54a] uppercase tracking-wider block mb-3">
                LIVE DEMONSTRATIONS
              </span>
              <h2 className="text-4xl font-extrabold text-[#0b2b40] mb-6 leading-tight">
                Join an Upcoming Webinar
              </h2>
              <p className="text-lg text-[#5a6e7f] mb-8 leading-relaxed">
                Curious about Solution-Focused coaching? Register for our upcoming live webinars to watch master coaches run live sessions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center font-bold text-[#e2a54a] hover:text-[#d49439] transition-colors"
              >
                Schedule Personal Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {[
                {
                  date: 'July 10, 2026',
                  title: 'Introduction to Solution-Focused Coaching',
                  time: '10:00 AM - 11:30 AM PST',
                  desc: 'Discover the core brain-friendly frameworks and see a live coaching demonstration.',
                },
                {
                  date: 'July 24, 2026',
                  title: 'How to Build a Resilient Corporate Coaching Culture',
                  time: '12:00 PM - 01:30 PM PST',
                  desc: 'Learn how to integrate micro-coaching habits into everyday leadership behavior.',
                },
                {
                  date: 'Aug 07, 2026',
                  title: 'Becoming an ICF Certified Coach: The Pathway Explained',
                  time: '09:00 AM - 10:00 AM PST',
                  desc: 'A complete roadmap mapping Level 1/2 requirements, mentor hours, and ICF exams.',
                },
              ].map((event, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#f0f6fa] border border-[#e2e8f0] flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                >
                  <div className="flex-1">
                    <span className="text-xs font-bold text-[#e2a54a] block mb-1">
                      {event.date} | {event.time}
                    </span>
                    <h3 className="text-xl font-bold text-[#0b2b40] mb-2">{event.title}</h3>
                    <p className="text-sm text-[#5a6e7f]">{event.desc}</p>
                  </div>
                  <button className="px-6 py-3 rounded-full bg-[#0b2b40] text-white font-bold hover:bg-[#061c2b] transition-all whitespace-nowrap">
                    Reserve Free Seat
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insights Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f0f6fa]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-[#e2a54a] uppercase tracking-wider block mb-3">
              COACHING RESEARCH
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b2b40] mb-4">
              Featured Insights
            </h2>
            <p className="text-lg text-[#5a6e7f] max-w-2xl mx-auto">
              Explore the latest articles, strategies, and neuroscience research on leadership coaching.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'The Science of Brain-Friendly Conversations in Leadership',
                desc: 'How solution-focused coaching activates the prefrontal cortex, boosting problem-solving and engagement.',
                img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
              },
              {
                title: 'Solution-Focused vs. Problem-Focused Coaching: The Core Shift',
                desc: 'Why focusing on visual goals rather than analyzing obstacles accelerates success and builds resilience.',
                img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
              },
              {
                title: 'How to Design a Resilient Corporate Coaching Culture',
                desc: 'A step-by-step organizational guide to training managers to ask solution-focused coaching questions.',
                img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600',
              },
            ].map((insight, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden">
                    <img
                      src={insight.img}
                      alt={insight.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-lg font-bold text-[#0b2b40] mb-3 hover:text-[#e2a54a] transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-[#5a6e7f] leading-relaxed">{insight.desc}</p>
                  </div>
                </div>
                <div className="px-8 pb-8 pt-4">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-bold text-[#0b2b40] hover:text-[#e2a54a]"
                  >
                    Read Article
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0b2b40] via-[#081e30] to-[#051522] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Ready to Start Your Coaching Journey?
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Join thousands of successful executives, leaders, and entrepreneurs who have transformed their lives with UNICO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses"
                className="px-8 py-4 rounded-full bg-[#e2a54a] text-[#0b2b40] font-bold hover:bg-[#d49439] transition-all shadow-lg"
              >
                Enroll Today
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-all"
              >
                Talk to a Coach Advisor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
