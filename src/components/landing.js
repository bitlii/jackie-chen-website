import React, {createRef} from "react";
import "./landing.scss";
import {motion, useTransform, useViewportScroll} from "framer-motion";
import {Button, Container, Flag, Icon} from "semantic-ui-react";

export default function Landing() {
    let bottomSection = createRef();

    const {scrollY} = useViewportScroll();
    const fade = useTransform(scrollY, [0, window.innerHeight/1.5], [1, 0]);

    const scrollToNextSection = () => bottomSection.scrollIntoView({behavior: "smooth", alignToTop: false});

    return (
        <Container id="home" className="landing-section section">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ y: [100, 0], opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="header">
                    <h1 id="name">Jackie Chen</h1>
                    <div>
                        <Flag name="nz"/>
                        <Flag name="cn"/>
                    </div>
                    <br/>
                    <p> Computer & Data Scientist, Powerlifter, Gamer, Footballer </p>
            </motion.div>

            <motion.div
                style={{ opacity: fade }}
                id="bottom-section"
                ref={el => bottomSection = el}>
                <Button icon basic inverted circular onClick={() => scrollToNextSection()}>
                    <Icon className="angle down"/>
                </Button>
            </motion.div>

        </Container>
    );
}