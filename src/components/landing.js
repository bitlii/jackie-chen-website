import React, {createRef} from "react";
import "./landing.scss";
import {motion, useTransform, useViewportScroll} from "framer-motion";
import {Button, Container, Icon, Popup} from "semantic-ui-react";

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
                ease: "easeOut",
                delayChildren: 1,
                staggerChildren: 1
            }
        }
    }

    const subtextVariants = {
        hidden: {opacity: 0},
        show: {opacity: 1},
    }


    const scrollToNextSection = () => bottomSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest", alignToTop: false});

    const copyEmailToClipboard = () => navigator.clipboard.writeText("itsjackiechen@gmail.com");

    return (
        <Container id="home" className="landing-section section">
            <motion.div
                initial={{opacity: 0}}
                animate={{y: [100, 0], opacity: 1}}
                transition={{ease: "easeOut", duration: 3}}
                className="header">
                <h1 id="name">Jackie Chen</h1>
                <motion.p
                    variants={subtextContainer}
                    initial="hidden"
                    animate="show">
                    <motion.span variants={subtextVariants} className="subtext">
                        Computer Scientist,
                    </motion.span>
                    <motion.span variants={subtextVariants} className="subtext">
                        Data Scientist,
                    </motion.span>
                    <motion.span variants={subtextVariants} className="subtext">
                        Powerlifter,
                    </motion.span>
                    <motion.span variants={subtextVariants} className="subtext">
                        Gamer.
                    </motion.span>
                </motion.p>

                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ease: "easeOut", duration: 2, delay: 5}}>
                    <h5>You can reach me through these places:</h5>
                    <Popup
                        on="click"
                        size="mini"
                        position="bottom center"
                        trigger={<Icon className="mail" size="large" link onClick={() => copyEmailToClipboard()}/>}
                        content={"Email has been copied to your clipboard"}
                        hideOnScroll>
                    </Popup>
                    <a href="https://github.com/bitlii">
                        <Icon className="github" size="large" link/>
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                style={{opacity: fade}}
                id="bottom-section"
                ref={el => bottomSection = el}>
                <Button icon basic inverted circular onClick={() => scrollToNextSection()}>
                    <Icon className="angle down" color="white"/>
                </Button>
            </motion.div>

        </Container>
    );
}
