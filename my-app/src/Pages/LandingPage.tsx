import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Activity,
  Globe,
  ArrowRight,
  Star,
  Server,
  Zap,
  Terminal,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

// --- Animation Variants ---
const fadeInUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const floatAnimation: any = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// --- Components ---

const Navbar = () => (
  <nav className="flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 bg-zinc-950 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full" />
      </div>
      <span className="font-medium text-sm tracking-tight">proxy.io</span>
    </div>

    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
      <a href="#product" className="hover:text-zinc-950 transition-colors">
        Product
      </a>
      <a href="#solutions" className="hover:text-zinc-950 transition-colors">
        Solutions
      </a>
      <a href="#pricing" className="hover:text-zinc-950 transition-colors">
        Pricing
      </a>
      <a href="#developers" className="hover:text-zinc-950 transition-colors">
        Developers
      </a>
    </div>

    <div className="flex items-center gap-4">
      <Link to="/login" className="hidden sm:block text-sm font-medium text-zinc-950 hover:text-zinc-600 transition-colors">
        Log in
      </Link>
      <Link to="/register" className="bg-zinc-950 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
        Apply Now — It's Free
      </Link>
    </div>
  </nav>
);

const Hero = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start"
      >
        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-3 mb-8"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-zinc-200 bg-white shadow-sm">
            <Star className="w-4 h-4 fill-zinc-950 text-zinc-950" />
          </div>
          <div>
            <p className="text-sm font-bold text-zinc-950">5.0 Rated</p>
            <p className="text-xs text-zinc-500">
              Over 12.5K — Ratings on Hunt
            </p>
          </div>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-7xl sm:text-8xl lg:text-[9rem] font-serif leading-none tracking-tight text-zinc-950 mb-8"
        >
          Gateway
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          className="w-full max-w-md border-t border-zinc-200 pt-6 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-zinc-950" />
              <span className="font-bold text-zinc-950">TechRadar</span>
            </div>
            <a
              href="#"
              className="text-xs font-medium text-zinc-500 hover:text-zinc-950 flex items-center gap-1"
            >
              Read Story <ArrowRight className="w-3 h-3" />
            </a>
          </div>
          <p className="text-lg text-zinc-700 font-medium leading-snug mb-6">
            "The Best Platform To Use For Global Traffic Routing and DDoS
            Protection, Highly Recommend"
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
              <img
                src="https://i.pravatar.cc/150?img=11"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-950">Robert J.</p>
              <p className="text-xs text-zinc-500">DevOps Engineer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center gap-4"
        >
          <Link to="/register" className="bg-zinc-950 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
            Apply Now — It's Free
          </Link>
          <button className="bg-transparent border border-zinc-300 text-zinc-950 px-8 py-4 rounded-full text-sm font-medium hover:border-zinc-950 transition-colors">
            Our Process
          </button>
        </motion.div>
      </motion.div>

      {/* Right Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full aspect-square max-w-lg mx-auto lg:ml-auto"
      >
        {/* Soft Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-purple-100 to-orange-100 rounded-[3rem] overflow-hidden">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-3xl" />
        </div>

        {/* Floating UI Elements */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 gap-6">
          {/* Incoming Request Card */}
          <motion.div
            variants={floatAnimation}
            animate="animate"
            className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 w-full max-w-xs flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                <Globe className="w-4 h-4 text-zinc-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-950">
                  Incoming HTTP/2
                </p>
                <p className="text-[10px] text-zinc-500">
                  api.example.com/v1/data
                </p>
              </div>
            </div>
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          </motion.div>

          {/* Proxy Node Card */}
          <motion.div className="bg-white p-6 rounded-[2rem] shadow-xl border border-zinc-100 w-full max-w-sm relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
            </div>
            <p className="text-xs text-zinc-500 mb-1">Active Node</p>
            <p className="text-2xl font-serif text-zinc-950 mb-4">us-east-1a</p>

            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] text-zinc-500">Latency</p>
                <p className="text-sm font-bold text-zinc-950">12ms</p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-500">Throughput</p>
                <p className="text-sm font-bold text-zinc-950">4.2 GB/s</p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-500">Status</p>
                <p className="text-sm font-bold text-emerald-600">Healthy</p>
              </div>
            </div>
          </motion.div>

          {/* Blocked Request Card */}
          <motion.div
            variants={floatAnimation}
            animate="animate"
            style={{ animationDelay: "1s" }}
            className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 w-full max-w-xs flex items-center justify-between ml-12"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                <AlertCircle className="w-4 h-4 text-red-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-950">
                  Malicious Payload
                </p>
                <p className="text-[10px] text-zinc-500">
                  Blocked by WAF Ruleset
                </p>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full bg-zinc-950 flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const LogoCloud = () => (
  <section className="border-y border-zinc-200 bg-white py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-center text-sm font-serif text-zinc-500 mb-8">
        Trusted by innovative teams worldwide
      </p>
      <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">
        {/* Placeholder Logos using text for simplicity, in a real app use SVGs */}
        <span className="text-xl font-bold font-sans tracking-tighter">
          Rakuten
        </span>
        <span className="text-xl font-bold font-serif">NCR</span>
        <span className="text-xl font-bold font-sans flex items-center gap-1">
          <div className="w-3 h-3 bg-black rounded-sm" /> monday.com
        </span>
        <span className="text-xl font-bold font-serif italic">Disney</span>
        <span className="text-xl font-bold font-sans flex items-center gap-1">
          <div className="w-4 h-4 border-2 border-black rounded-sm" /> Dropbox
        </span>
      </div>
    </div>
  </section>
);

const BentoGrid = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="mb-16 text-center max-w-2xl mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-serif text-zinc-950 mb-6">
        Everything you need to scale securely.
      </h2>
      <p className="text-zinc-500 text-lg">
        Our edge network handles routing, load balancing, and security so you
        can focus on building your application.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 1: Traffic Routing (Spans 2 columns on large screens) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className="lg:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 overflow-hidden relative min-h-[320px] flex flex-col justify-between group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
            <Server className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-2xl font-serif text-zinc-950 mb-2">
            Intelligent Routing
          </h3>
          <p className="text-zinc-500 max-w-md">
            Route traffic based on geography, latency, or custom headers.
            Seamlessly split traffic for A/B testing or canary deployments.
          </p>
        </div>

        {/* Abstract Routing Visual */}
        <div className="relative z-10 mt-8 flex items-center gap-4">
          <div className="h-2 w-24 bg-indigo-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-indigo-500 w-1/2 rounded-full"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center z-10">
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-2 w-32 bg-purple-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-purple-500 w-1/3 rounded-full"
                animate={{ x: ["-100%", "300%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5,
                }}
              />
            </div>
            <div className="h-2 w-20 bg-emerald-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-emerald-500 w-1/2 rounded-full"
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.2,
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Card 2: DDoS Protection */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 overflow-hidden relative min-h-[320px] flex flex-col justify-between group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-50" />
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-6 relative">
            <motion.div
              className="absolute inset-0 rounded-full bg-orange-200"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Shield className="w-6 h-6 text-orange-600 relative z-10" />
          </div>
          <h3 className="text-2xl font-serif text-zinc-950 mb-2">
            L7 DDoS Shield
          </h3>
          <p className="text-zinc-600 text-sm">
            Automatically mitigate volumetric and targeted application layer
            attacks without adding latency.
          </p>
        </div>
        <div className="relative z-10 mt-8 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-zinc-950">
              Threats Blocked
            </span>
            <span className="text-xs text-orange-600 font-medium">Live</span>
          </div>
          <p className="text-3xl font-serif text-zinc-950">2.4M</p>
        </div>
      </motion.div>

      {/* Card 3: Monitoring Dashboard (Dark Theme) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="bg-zinc-950 rounded-[2rem] p-8 shadow-lg overflow-hidden relative min-h-[320px] flex flex-col group"
      >
        <div className="relative z-10 mb-6">
          <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
            <Terminal className="w-6 h-6 text-zinc-300" />
          </div>
          <h3 className="text-2xl font-serif text-white mb-2">
            Real-time Logs
          </h3>
          <p className="text-zinc-400 text-sm">
            Stream access logs and metrics directly to your preferred
            observability platform.
          </p>
        </div>

        {/* Fake Terminal */}
        <div className="relative z-10 mt-auto bg-zinc-900 rounded-xl p-4 border border-zinc-800 font-mono text-[10px] leading-relaxed text-zinc-500 overflow-hidden h-32">
          <motion.div
            animate={{ y: [0, -20, -40, -60] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="flex flex-col gap-1"
          >
            <p>
              <span className="text-emerald-400">200</span> GET /api/users -
              12ms
            </p>
            <p>
              <span className="text-emerald-400">200</span> POST /api/auth -
              45ms
            </p>
            <p>
              <span className="text-amber-400">429</span> GET /api/data - Rate
              Limited
            </p>
            <p>
              <span className="text-emerald-400">200</span> GET /health - 2ms
            </p>
            <p>
              <span className="text-red-400">502</span> GET /api/legacy - Bad
              Gateway
            </p>
            <p>
              <span className="text-emerald-400">200</span> GET /api/users -
              11ms
            </p>
            <p>
              <span className="text-emerald-400">200</span> POST /api/auth -
              42ms
            </p>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-zinc-900 to-transparent" />
        </div>
      </motion.div>

      {/* Card 4: Global Edge Network (Spans 2 columns) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className="lg:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 overflow-hidden relative min-h-[320px] flex flex-col justify-between group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between h-full">
          <div className="max-w-sm">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
              <Activity className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-serif text-zinc-950 mb-2">
              Global Edge Network
            </h3>
            <p className="text-zinc-500">
              Deploy your proxy rules to 250+ edge locations worldwide in
              milliseconds. Ensure your users always hit the closest node.
            </p>
            <button className="mt-6 text-sm font-bold text-zinc-950 flex items-center gap-2 hover:gap-3 transition-all">
              View Network Map <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Abstract Map/Nodes Visual */}
          <div className="relative w-full max-w-xs aspect-video bg-zinc-50 rounded-xl border border-zinc-100 p-4 flex items-center justify-center">
            <div className="absolute w-2 h-2 bg-emerald-500 rounded-full top-1/4 left-1/4 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <div className="absolute w-2 h-2 bg-emerald-500 rounded-full bottom-1/3 left-1/2 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <div className="absolute w-2 h-2 bg-emerald-500 rounded-full top-1/3 right-1/4 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />

            {/* Connecting lines (SVG) */}
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ strokeDasharray: "4 4" }}
            >
              <motion.path
                d="M 25% 25% L 50% 66% L 75% 33%"
                fill="none"
                stroke="#10b981"
                strokeWidth="1"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-zinc-200 bg-white py-12 mt-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-zinc-950 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
        <span className="font-medium text-sm tracking-tight">proxy.io</span>
      </div>
      <div className="flex gap-6 text-sm text-zinc-500">
        <a href="#" className="hover:text-zinc-950 transition-colors">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-zinc-950 transition-colors">
          Terms of Service
        </a>
        <a href="#" className="hover:text-zinc-950 transition-colors">
          Contact
        </a>
      </div>
      <p className="text-sm text-zinc-400">
        © 2024 Proxy.io. All rights reserved.
      </p>
    </div>
  </footer>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-zinc-950 selection:bg-zinc-200 selection:text-zinc-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <BentoGrid />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
