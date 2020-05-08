export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};
export const staggerFast = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export const staggerFaster = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
