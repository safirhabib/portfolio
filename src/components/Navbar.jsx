import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full px-8 py-4 flex justify-between items-center bg-black/70 backdrop-blur-md text-white shadow-lg z-50"
    >
      <div className="text-2xl font-bold tracking-widest">
        SAFIR<span className="text-yellow-400">VERSE</span>
      </div>

      <ul className="flex gap-6 text-lg">
        <li className="hover:text-yellow-400 transition-colors cursor-pointer">Home</li>
        <li className="hover:text-yellow-400 transition-colors cursor-pointer">Projects</li>
        <li className="hover:text-yellow-400 transition-colors cursor-pointer">Skills</li>
        <li className="hover:text-yellow-400 transition-colors cursor-pointer">Contact</li>
      </ul>
    </motion.nav>
  )
}
