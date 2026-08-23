import React, {useState, useEffect} from 'react';
import Typewriter from 'typewriter-effect';
import useSound from 'use-sound';
import ReactGA from 'react-ga4';
import SocialLink from './SocialLink';

// CSS imports
import '../App.css';

// Load Easter egg Obi Wan Kenobi sound to play when clicking on my name
import hoverSound from '../obi-wan-hello-there.mp3';

const TypeLoop = () => {
    const [startTyping, setStartTyping] = useState(false);

    // Add timer to reset typing animation
    useEffect(() => {
        ReactGA.initialize('G-645W9NXVRJ');

        const timeoutId = setTimeout(() => {
            setStartTyping(true);
        }, 2900); // 2.9 seconds delay

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    // Load sound as JS object to play on click.
    const [play] = useSound(hoverSound);

    // Intro phrase to display using the effect
    const introPhrase = '<span class="typewriter-string">Hello there, my name is' +
        ' </span><span data-entity="person"> Matei Penca </span>'

    const roles = [
        '<span class="typewriter-role-string">const role = </span>' +
        '<span class="typewriter-string">"Data Scientist";</span>',
        '<span class="typewriter-role-string">const role_new = </span>' +
        '<span class="typewriter-string">"Software Engineer";</span>']

    return (
        <section className="centered-container hero" aria-labelledby="hero-name">
            <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
            <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
            <p className="hero-kicker">AI systems · data science · software</p>
            {/*When clicking the text, the sound plays, but because of a bug, works only when clicking the name.*/}
            <div className="hero-intro" data-testid="hero-intro" onClick={play}>
                <h1 className="visually-hidden" id="hero-name">Hello there, my name is Matei Penca.</h1>
                <Typewriter onClick={play}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(introPhrase)
                                    .callFunction(() => {
                                        setStartTyping(true)
                                    })
                                    .start();
                            }}
                            options={{
                                loop: false,
                                delay: 75,
                                cursor: '<span class="typewriter-cursor"></span>',
                            }}
                />
            </div>
            <div data-testid="hero-roles">
                <span className="visually-hidden">Data Scientist. Software Engineer.</span>
                {startTyping && (
                    <Typewriter
                        options={{
                            strings: roles,
                            autoStart: true,
                            loop: true,
                            pauseFor: 900,
                            delay: 75,
                            cursor: '<span class="typewriter-cursor"></span>',
                        }}
                    />
                )}
            </div>

            <div className="social-links" aria-label="Profile links">
                <SocialLink
                    className="social-link--hero"
                    href="https://github.com/Matei9721"
                    icon={<><span aria-hidden="true">↗</span> GitHub</>}
                    label="Matei Penca on GitHub"
                />
                <SocialLink
                    className="social-link--hero"
                    href="https://www.linkedin.com/in/matei-penca/"
                    icon={<><span aria-hidden="true">↗</span> LinkedIn</>}
                    label="Matei Penca on LinkedIn"
                />
                <SocialLink
                    className="social-link--hero"
                    href="https://drive.google.com/uc?id=1PkFNgiAtsiT0sTWurVpcqrFWsyTM7pn-&export=download"
                    icon={<><span aria-hidden="true">↓</span> CV</>}
                    label="Download Matei Penca's CV"
                    onClick={() => ReactGA.event({
                        category: 'Social Links',
                        action: 'Click',
                        label: 'CV',
                    })}
                />
            </div>
            <a className="hero-scroll" href="#about">
                <span>Scroll to explore</span>
                <span aria-hidden="true">↓</span>
            </a>
        </section>


    );
};

export default TypeLoop;
