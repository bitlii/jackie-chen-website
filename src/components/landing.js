import React, {createRef} from "react";
import "./landing.scss";
import {motion, useTransform, useViewportScroll} from "framer-motion";
import {Button, Container, Flag, Icon} from "semantic-ui-react";

export default function Landing() {
    let bottomSection = createRef();

    // Scroll to fade v button.
    const {scrollY} = useViewportScroll();
    const fade = useTransform(scrollY, [0, window.innerHeight/3], [1, 0]);

    // Subtext fade-in display animation.
    const subtextContainer = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 1
            }
        }
    }

    const subtextVariants = {
        hidden: {opacity: 0},
        show: {opacity: 1},
    }

    // Scroll to the first section.
    const scrollToNextSection = () => bottomSection.scrollIntoView({behavior: "smooth", alignToTop: false});

    return (
        <Container id="home" className="landing-section section">
            <motion.div
                initial={{opacity: 0}}
                animate={{y: [100, 0], opacity: 1}}
                transition={{ease: "easeOut", duration: 3, staggerChildren: 2}}
                className="header">
                    <h1 id="name">Jackie Chen</h1>
                    <div>
                        <Flag name="nz"/>
                        <Flag name="cn"/>
                    </div>
                    <br/>
                    <motion.p
                        variants={subtextContainer}
                        initial="hidden"
                        animate="show">
                        <motion.span
                            variants={subtextVariants}
                            className="subtext">
                            Computer Scientist,
                        </motion.span>
                        <motion.span
                            variants={subtextVariants}
                            className="subtext">
                            Data Scientist,
                        </motion.span>
                        <motion.span
                            variants={subtextVariants}
                            className="subtext">
                            Powerlifter,
                        </motion.span>
                        <motion.span
                            variants={subtextVariants}
                            className="subtext">
                            Gamer.
                        </motion.span>
                    </motion.p>
            </motion.div>

            <motion.div
                style={{opacity: fade}}
                id="bottom-section"
                ref={el => bottomSection = el}>
                <Button icon basic inverted circular onClick={() => scrollToNextSection()}>
                    <Icon className="angle down"/>
                </Button>
            </motion.div>

        </Container>
    );
}