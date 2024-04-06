import { motion } from "framer-motion";

export function Home({ show }) {
  return (
    <section className="flex items-center justify-center">
      <div className="pt-20 text-2xl text-center home-font tracking-widest">
        <motion.div animate={{ y: 100 }}>Welcome to my Portfolio</motion.div>
      </div>
    </section>
  );
}
