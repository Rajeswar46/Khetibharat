// Premium easing curves
export const easings = {
    premium: [0.22, 1, 0.36, 1] as [number, number, number, number],
    smooth: [0.4, 0, 0.2, 1] as [number, number, number, number],
    bounce: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
};

// Animation variants for Framer Motion
export const fadeUp = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: 'blur(6px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.6,
            ease: easings.premium,
        },
    },
};

export const fadeIn = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: easings.premium,
        },
    },
};

export const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: easings.premium,
        },
    },
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

export const slideInLeft = {
    hidden: {
        opacity: 0,
        x: -30,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: easings.premium,
        },
    },
};

export const slideInRight = {
    hidden: {
        opacity: 0,
        x: 30,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: easings.premium,
        },
    },
};

// Hover variants
export const hoverLift = {
    rest: {
        y: 0,
        scale: 1,
    },
    hover: {
        y: -6,
        scale: 1.02,
        transition: {
            duration: 0.3,
            ease: easings.premium,
        },
    },
};

export const buttonHover = {
    rest: {
        scale: 1,
    },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.2,
            ease: easings.premium,
        },
    },
    tap: {
        scale: 0.96,
        transition: {
            duration: 0.1,
            ease: easings.premium,
        },
    },
};
