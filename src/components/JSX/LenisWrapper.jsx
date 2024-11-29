import { ReactLenis, useLenis } from 'lenis/react';

const LenisWrapper = ({ children }) => {
    useLenis(({ scroll }) => {
        console.log('Scroll position:', scroll);
    });

    return <ReactLenis root>{children}</ReactLenis>;
};

export default LenisWrapper;
