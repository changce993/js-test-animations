export const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export const firstName = {
  initial: { y: 0 },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

export const lastName = {
  initial: { y: 0 },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

export const letter = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: { ...transition, duration: 1 },
  },
};