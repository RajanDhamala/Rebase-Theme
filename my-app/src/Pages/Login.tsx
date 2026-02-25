import { motion } from "framer-motion";
import { ArrowRight, Lock, Mail, Github } from "lucide-react";
import { Link } from "react-router-dom";

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

const Login = () => {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-zinc-950 selection:bg-zinc-200 selection:text-zinc-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Brand */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-zinc-950 rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-2.5 h-2.5 bg-white rounded-full" />
          </div>
          <span className="font-medium tracking-tight">proxy.io</span>
        </Link>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="sm:mx-auto sm:w-full sm:max-w-md"
      >
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-serif text-zinc-950 mb-3 tracking-tight">
            Welcome back
          </h2>
          <p className="text-zinc-500">
            Log in to manage your gateway and routing rules.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-zinc-100 overflow-hidden relative"
        >
          {/* Subtle gradient effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <form className="space-y-6" action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-950 mb-2"
                >
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-zinc-400" aria-hidden="true" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full pl-11 pr-4 py-3 border border-zinc-200 rounded-xl text-zinc-950 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:border-zinc-950 sm:text-sm transition-colors bg-neutral-50/50"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-zinc-950"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-zinc-500 hover:text-zinc-950 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Forgot password toggled (No page yet)");
                      }}
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-zinc-400" aria-hidden="true" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full pl-11 pr-4 py-3 border border-zinc-200 rounded-xl text-zinc-950 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:border-zinc-950 sm:text-sm transition-colors bg-neutral-50/50"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 bg-zinc-950 text-white px-6 py-3.5 rounded-full font-medium hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900"
                >
                  Sign in
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white text-zinc-500 font-medium">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-transparent border border-zinc-200 text-zinc-950 px-4 py-2.5 rounded-xl font-medium hover:border-zinc-950 transition-colors">
                  <Github className="w-5 h-5" />
                  GitHub
                </button>
                <button className="flex items-center justify-center gap-2 bg-transparent border border-zinc-200 text-zinc-950 px-4 py-2.5 rounded-xl font-medium hover:border-zinc-950 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </button>
              </div>
            </div>

            <p className="mt-8 text-center text-sm text-zinc-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-bold text-zinc-950 hover:underline transition-all"
              >
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
