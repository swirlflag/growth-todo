const breakpoints = {
    "sx2": "320px",
    "sx": "480px",
    "sm": "576px",
    "md": "768px",
    "lg": "992px",
    "lx": "1200px",
    "lx2": "1400px",
    "lx3": "1600px",
};

export const media = {
    "sx2": `screen and (max-width: ${breakpoints["sx2"]})`,
    "sx": `screen and (max-width: ${breakpoints["sx"]})`,
    "sm": `screen and (max-width: ${breakpoints["sm"]})`,
    "md": `screen and (max-width: ${breakpoints["md"]})`,
    "lg": `screen and (max-width: ${breakpoints["lg"]})`,
    "lx": `screen and (max-width: ${breakpoints["lx"]})`,
    "lx2": `screen and (max-width: ${breakpoints["lx2"]})`,
    "lx3": `screen and (max-width: ${breakpoints["lx3"]})`,

    less: (size) => `screen and (max-width: ${size}px)`,
    over: (size) => `screen and (min-width: ${size}px)`,

    between: (a, b) => {
        const [min,max] = [a, b].sort((a, b) => a - b);
        return `screen and (max-width : ${max}px) and (min-width : ${min}px)`;
    }
};