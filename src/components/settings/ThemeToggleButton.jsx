import { motion, AnimatePresence } from "framer-motion";
import { BiMoon } from "react-icons/bi";
import { FiSun } from "react-icons/fi";
import useThemeStore from "../../store/useThemeStore";

const themeVariants = {
    initial: (direction) => ({
      rotate: direction === "dark" ? -120 : 120, 
      scale: 0,
      opacity: 0,
    }),
    animate: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.18,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (direction) => ({
      rotate: direction === "dark" ? 120 : -120,
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

const ThemeToggleButton = ({toggleNav}) => {
    const {theme, setTheme} = useThemeStore();
    
  return (
   <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`relative flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 ${toggleNav ? "hidden" : "block"}`}
    >
      <AnimatePresence mode="wait" custom={theme}>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            custom="dark"
            variants={themeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <FiSun className="h-5 w-5 dark:text-dark-text" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            custom="light"
            variants={themeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <BiMoon className="h-5 w-5 dark:text-dark-text" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

export default ThemeToggleButton
