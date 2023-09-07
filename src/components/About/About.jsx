import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { services } from "../../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { ServiceCard } from "./ServiceCard";

const About = () => {
  const textRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // IntersectionObserver setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.unobserve(textRef.current);
        }
      },
      { threshold: 0.1 },
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [textRef]);

  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className={`${styles.sectionHeadText} shimmerText`}
        >
          Overview.
        </motion.h2>
      </div>
      <div ref={textRef} className="relative">
        {isInView && (
          <motion.p
            className={`mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] overflow-hidden`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Versatile and dedicated Full Stack Engineer, experienced in
            collaborating with cross-functional teams to design, develop, and
            deploy high-performance web applications. Adept at employing a
            diverse array of programming languages and frameworks, I'm committed
            to producing clean, well-tested, and maintainable code that meets
            business objectives. My expertise lies not only in mastering the
            technical aspects but also in understanding the end-user perspective
            to build intuitive, user-friendly applications.
          </motion.p>
        )}
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
