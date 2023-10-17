import { motion, useIsPresent } from 'framer-motion';

const PrivacyScreen = () => {
    const isPresent = useIsPresent();
  return (
    <motion.div
    initial={{ scaleX: 1 }}
    animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
    exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
    style={{ originX: isPresent ? 0 : 1 , position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#C15002',
        zIndex: 2,}}
    ></motion.div>
  );
};

export default PrivacyScreen;
