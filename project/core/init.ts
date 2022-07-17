import App from 'next/app';
import install from "@/core/install.ts";

const init = () => {
    install(App);
};

export default init;