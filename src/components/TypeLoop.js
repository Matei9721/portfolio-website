import React, {useState, useEffect} from 'react';
import Typewriter from 'typewriter-effect';
import useSound from 'use-sound';
import ReactGA from 'react-ga4';
import {GithubOutlined, LinkedinOutlined, FilePdfOutlined} from '@ant-design/icons';
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
        <div className="centered-container">
            {/*When clicking the text, the sound plays, but because of a bug, works only when clicking the name.*/}
            <div data-testid="hero-intro" onClick={play}>
                <span className="visually-hidden">Hello there, my name is Matei Penca.</span>
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

            <span className="social-links">
                <SocialLink
                    className="social-link--hero"
                    href="https://github.com/Matei9721"
                    icon={<GithubOutlined aria-hidden="true" />}
                    label="Matei Penca on GitHub"
                />
                <SocialLink
                    className="social-link--hero"
                    href="https://www.linkedin.com/in/matei-penca/"
                    icon={<LinkedinOutlined aria-hidden="true" />}
                    label="Matei Penca on LinkedIn"
                />
                <SocialLink
                    className="social-link--hero"
                    href="https://drive.google.com/uc?id=1PkFNgiAtsiT0sTWurVpcqrFWsyTM7pn-&export=download"
                    icon={<FilePdfOutlined aria-hidden="true" />}
                    label="Download Matei Penca's CV"
                    onClick={() => ReactGA.event({
                        category: 'Social Links',
                        action: 'Click',
                        label: 'CV',
                    })}
                />
            </span>

        </div>


    );
};

export default TypeLoop;
