'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Clock, Users, Award, TrendingUp, Zap, Target } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: 'The Art & Science of Coaching (ICF Level 1 & 2)',
      duration: '12 weeks',
      level: 'Professional Pathway',
      students: '1,250+',
      price: '$4,999',
      description: 'UNICO\'s flagship solution-focused coaching program. Master the core competencies required to qualify for ICF Associate Certified Coach (ACC) and Professional Certified Coach (PCC) credentials.',
      includes: [
        'Weekly 1-on-1 mentor coaching sessions',
        'Solution-focused coaching methodology',
        'ICF credentialing exam preparation',
        'Live online practice masterminds',
        'Brain-friendly learning materials',
        'UNICO Toolkit & coaching templates',
        'Access to global coaching community',
        'Lifetime program resources access',
      ],
      outcomes: [
        'Build a professional coaching practice from scratch',
        'Master the 8 core ICF coaching competencies',
        'Conduct powerful, life-changing discovery sessions',
        'Gain credentials recognized globally in 85+ countries',
      ],
      featured: true,
    },
    {
      id: 2,
      title: 'Executive & Leadership Coaching Program',
      duration: '8 weeks',
      level: 'Advanced Leaders',
      students: '450+',
      price: '$3,499',
      description: 'Comprehensive program designed for corporate executives, HR directors, and business leaders to master executive presence, strategic alignment, and team-building.',
      includes: [
        'Biweekly 1-on-1 executive coaching',
        'Executive presence training framework',
        '360-degree feedback tools integration',
        'Organizational dynamics workshops',
        'Leadership assessment toolkits',
        'Peer executive mastermind circles',
        '6 months email support & coaching feedback',
      ],
      outcomes: [
        'Develop a cohesive, strategic leadership vision',
        'Build and align high-performing corporate teams',
        'Navigate complex stakeholder and board relationships',
        'Enhance team engagement through coaching habits',
      ],
    },
    {
      id: 3,
      title: 'Career Acceleration Program',
      duration: '8 weeks',
      level: 'Intermediate Professionals',
      students: '680+',
      price: '$2,999',
      description: 'Accelerated program for mid-level professionals seeking rapid advancement, promotion readiness, salary negotiation strategy, and personal branding.',
      includes: [
        'Biweekly coaching strategy sessions',
        'Career roadmap and progression plan',
        'Interview preparation and role-play',
        'LinkedIn & resume personal branding',
        'Corporate networking strategy roadmap',
        'Salary negotiation coaching toolkit',
        '3 months follow-up email support',
      ],
      outcomes: [
        'Design a clear pathway to your next promotion',
        'Master salary and benefits negotiation skills',
        'Create a highly visible, professional personal brand',
        'Build a network of corporate advocates and mentors',
      ],
    },
    {
      id: 4,
      title: 'Entrepreneurial Mastery Program',
      duration: '16 weeks',
      level: 'Startup Founders',
      students: '220+',
      price: '$6,999',
      description: 'Intensive program for founders, startups owners, and business partners focusing on scaling operations, founder psychology, and venture fundraising.',
      includes: [
        'Weekly 1-on-1 business coaching',
        'Pitch deck design & fundraising coaching',
        'Scalable operations playbook templates',
        'Financial forecasting & modeling tools',
        'Exclusive founder networking events',
        'Growth hacking and marketing advisory',
        'Lifetime email support & founder resources',
      ],
      outcomes: [
        'Build systems that scale and automate operations',
        'Prepare investor pitch decks and practice fundraising',
        'Master the psychological stresses of founder life',
        'Create a compelling narrative that attracts top talent',
      ],
    },
    {
      id: 5,
      title: 'Coaching Competencies for Managers',
      duration: '6 weeks',
      level: 'Managers & Team Leads',
      students: '540+',
      price: '$2,499',
      description: 'Help managers shift from directors to developers. Learn brain-friendly coaching methodologies, active listening, and constructive feedback loops.',
      includes: [
        'Biweekly team coaching simulation sessions',
        'Constructive feedback loop templates',
        'Active listening framework guides',
        'Conflict resolution & mediation training',
        'Delegation planning and goal tracking tools',
        '6 months email support & manager peer group',
      ],
      outcomes: [
        'Transition your style from directing to coaching teams',
        'Provide brain-friendly, motivating feedback',
        'Resolve internal team conflicts with coaching tools',
        'Increase team ownership, accountability, and output',
      ],
    },
    {
      id: 6,
      title: 'Work-Life Integration Program',
      duration: '6 weeks',
      level: 'Foundational Well-being',
      students: '890+',
      price: '$1,999',
      description: 'Holistic program helping professionals establish healthy boundaries, prevent burnout, optimize schedules, and maintain peak performance.',
      includes: [
        'Biweekly well-being coaching calls',
        'Stress management & breathing techniques',
        'Time prioritization templates & workbooks',
        'Healthy boundaries communication strategies',
        'Work-life integration audit resources',
        '3 months follow-up email support',
      ],
      outcomes: [
        'Implement sustainable day-to-day integration plans',
        'De-escalate stress and avoid occupational burnout',
        'Establish firm boundaries without hurting relationships',
        'Maintain long-term, high-energy peak performance',
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-white text-[#0b1d33]">
      <Header />

      {/* Courses Hero - Dark Navy Gradient */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 bg-gradient-to-br from-[#0b2b40] via-[#081e30] to-[#051522] text-white">
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/15 border border-secondary/30 text-[#e2a54a] text-sm font-semibold uppercase tracking-wider mb-4">
              Our Training Pathway
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Coaching Programs for Every Stage
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Choose the program that aligns with your leadership or career goals. All programs feature live instruction from ICF credentialed master coaches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24 bg-[#faf6f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-3xl border border-[#e2e8f0] bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group ${
                  course.featured
                    ? 'lg:col-span-2 border-[#e2a54a] ring-4 ring-[#e2a54a]/10'
                    : ''
                }`}
              >
                {course.featured && (
                  <div className="absolute top-4 right-4 px-4 py-1.5 bg-[#e2a54a] text-[#0b2b40] text-xs font-bold rounded-full z-10 uppercase tracking-wider">
                    FLAGSHIP PROGRAM
                  </div>
                )}

                <div className={`p-8 md:p-10 ${course.featured ? 'grid md:grid-cols-2 gap-12' : ''}`}>
                  {/* Left side - Course Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#0b2b40]/10 text-[#0b2b40] text-xs font-bold uppercase tracking-wider">
                        {course.level}
                      </span>
                      <span className="text-sm text-[#5a6e7f] font-semibold">{course.students} Trained</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-[#0b2b40] mb-3">
                      {course.title}
                    </h3>

                    <p className="text-[#5a6e7f] mb-6 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-[#faf6f0]">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-[#e2a54a]" />
                        <span className="text-sm text-[#0b2b40] font-semibold">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-[#e2a54a]" />
                        <span className="text-sm text-[#0b2b40] font-semibold">{course.students}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-[#e2a54a]" />
                        <span className="text-sm text-[#0b2b40] font-semibold">ICF Accredited</span>
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="mb-8">
                      <h4 className="font-bold text-[#0b2b40] mb-4">What&apos;s Included:</h4>
                      <ul className="space-y-2">
                        {course.includes.slice(0, 4).map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#e2a54a] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[#5a6e7f]">{item}</span>
                          </li>
                        ))}
                        {course.includes.length > 4 && (
                          <li className="text-sm text-[#4ba3c3] font-semibold">
                            +{course.includes.length - 4} more benefits and resources
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Right side - Outcomes & CTA */}
                  {course.featured ? (
                    <div className="flex flex-col justify-between">
                      <div className="mb-8">
                        <h4 className="font-bold text-[#0b2b40] mb-4">Expected Outcomes:</h4>
                        <ul className="space-y-3">
                          {course.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-[#4ba3c3] flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-[#5a6e7f]">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-[#faf6f0] border border-[#e2e8f0] rounded-2xl p-6 mb-6">
                        <p className="text-xs text-[#5a6e7f] mb-1 font-semibold uppercase tracking-wider">Tuition Investment</p>
                        <p className="text-4xl font-extrabold text-[#0b2b40] mb-1">{course.price}</p>
                        <p className="text-xs text-[#5a6e7f]">Interest-free monthly installments available</p>
                      </div>

                      <button className="w-full bg-[#0b2b40] text-white py-4 rounded-full font-bold hover:bg-[#061c2b] transition-all hover:scale-105 shadow-md">
                        Enroll in Program
                        <ArrowRight className="w-4 h-4 inline ml-2" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col justify-between">
                      <div className="mb-8">
                        <h4 className="font-bold text-[#0b2b40] mb-4">Expected Outcomes:</h4>
                        <ul className="space-y-3">
                          {course.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-[#4ba3c3] flex-shrink-0 mt-1" />
                              <span className="text-sm text-[#5a6e7f]">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-[#e2e8f0]">
                        <div>
                          <p className="text-xs text-[#5a6e7f] font-semibold uppercase tracking-wider mb-1">Investment</p>
                          <p className="text-2xl font-bold text-[#0b2b40]">{course.price}</p>
                        </div>
                        <button className="px-6 py-3 rounded-full bg-[#e2a54a] text-[#0b2b40] font-bold text-sm hover:bg-[#d49439] transition-all">
                          Enroll Now
                          <ArrowRight className="w-4 h-4 ml-2 inline" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Program Section */}
      <section className="py-24 bg-white border-y border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b2b40] mb-6 leading-tight">
              Corporate & custom coaching training
            </h2>
            <p className="text-lg text-[#5a6e7f] mb-8 max-w-2xl mx-auto leading-relaxed">
              We design and implement custom coaching solutions aligned to your specific business challenges, leadership matrices, and remote workspace dynamics.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#0b2b40] text-white font-bold inline-flex items-center hover:bg-[#061c2b] transition-all hover:scale-105 shadow-md"
            >
              Request Custom Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Program Features Section */}
      <section className="py-24 bg-[#faf6f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b2b40] mb-4">
              All Programs Include
            </h2>
            <p className="text-lg text-[#5a6e7f]">
              Premium support elements designed to ensure your long-term success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: 'Dedicated Master Coach',
                description: 'Assigned an ICF credentialed coach with 15+ years experience in executive leadership.',
              },
              {
                icon: Award,
                title: 'ICF Credential Pathway',
                description: 'Earn credits mapped directly toward your ACC or PCC credentials.',
              },
              {
                icon: CheckCircle,
                title: 'Progress Assessment',
                description: 'Regular feedback on your coaching conversations from senior mentor coaches.',
              },
              {
                icon: TrendingUp,
                title: 'Alumni Network Access',
                description: 'Gain access to the global UNICO alumni portal, ongoing webinars, and toolkits.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm"
              >
                <item.icon className="w-10 h-10 text-[#e2a54a] mb-4" />
                <h3 className="text-lg font-bold text-[#0b2b40] mb-2">{item.title}</h3>
                <p className="text-sm text-[#5a6e7f] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0b2b40] via-[#081e30] to-[#051522] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Invest in Your Growth & Impact
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Schedule a complimentary 20-minute discovery call with a coaching advisor to explore tuition packages and find the right pathway.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#e2a54a] text-[#0b2b40] font-bold inline-flex items-center hover:bg-[#d49439] transition-all hover:scale-105 shadow-md"
            >
              Book Discovery Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
