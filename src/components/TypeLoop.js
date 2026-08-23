import React, {useEffect, useState} from 'react';
import Typewriter from 'typewriter-effect';
import useSound from 'use-sound';
import ReactGA from 'react-ga4';
import {
    ArrowDownRight,
    CodeXml,
    Contact,
    ExternalLink,
    FileText,
} from 'lucide-react';

import hoverSound from '../obi-wan-hello-there.mp3';
import PaperTape from './PaperTape';

const TypeLoop = () => {
    const [reduceMotion, setReduceMotion] = useState(false);
    const [play] = useSound(hoverSound, {volume: 0.45});

    useEffect(() => {
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const syncMotionPreference = () => setReduceMotion(motionQuery.matches);

        syncMotionPreference();
        motionQuery.addEventListener?.('change', syncMotionPreference);

        return () => motionQuery.removeEventListener?.('change', syncMotionPreference);
    }, []);

    const introPhrase = '<span data-entity="person">Matei Penca</span>';
    const rolePhrases = [
        '<span class="identity-screen__assignment">'
            + '<span class="identity-screen__keyword">var</span> role =</span>'
            + '<span data-entity="role">Senior Data Scientist</span><span>;</span>',
        '<span class="identity-screen__assignment">'
            + '<span class="identity-screen__keyword">var</span> role =</span>'
            + '<span data-entity="role">AI Engineer</span><span>;</span>',
    ];

    return (
        <section aria-labelledby="hero-heading" className="hero">
            <div className="hero__copy">
                <h1
                    aria-label="Hello there, my name is Matei Penca."
                    className="hero__statement"
                    id="hero-heading"
                >
                    <button
                        aria-label="Play the hidden hello there easter egg"
                        className="hero__intro-trigger"
                        onClick={play}
                        type="button"
                    >
                        <span aria-hidden="true" className="hero__intro-copy">
                            <span className="hero__intro-prefix">Hello there,<br />my name is</span>
                            <span className="hero__type" data-testid="hero-intro">
                                {reduceMotion ? (
                                    <span data-entity="person">Matei Penca</span>
                                ) : (
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter.typeString(introPhrase).start();
                                        }}
                                        options={{
                                            loop: false,
                                            delay: 55,
                                            cursor: '<span class="typewriter-cursor"></span>',
                                        }}
                                    />
                                )}
                            </span>
                        </span>
                    </button>
                </h1>
                <p className="hero__summary">
                    At <span className="elsevier-text">Elsevier</span> I work on search, information extraction, and GenAI software.
                    At home I build tools for oddly specific problems.
                </p>

                <div className="hero__actions">
                    <a className="hero__action--primary" href="#work">
                        Work <ArrowDownRight aria-hidden="true" />
                    </a>
                    <a href="https://github.com/Matei9721" rel="noopener noreferrer" target="_blank">
                        <CodeXml aria-hidden="true" /> GitHub <ExternalLink aria-hidden="true" />
                    </a>
                    <a href="https://www.linkedin.com/in/matei-penca/" rel="noopener noreferrer" target="_blank">
                        <Contact aria-hidden="true" /> LinkedIn <ExternalLink aria-hidden="true" />
                    </a>
                    <a
                        href="https://drive.google.com/uc?id=1PkFNgiAtsiT0sTWurVpcqrFWsyTM7pn-&export=download"
                        onClick={() => ReactGA.event({
                            category: 'Social Links',
                            action: 'Click',
                            label: 'CV',
                        })}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <FileText aria-hidden="true" /> CV
                    </a>
                </div>
            </div>

            <div className="hero__screen-wrap">
                <PaperTape />
                <div className="identity-screen">
                    <div className="identity-screen__toolbar" aria-hidden="true">
                        <span className="identity-screen__lights"><i /><i /><i /></span>
                        <span>identity.py</span>
                    </div>

                    <p className="visually-hidden">
                        Senior Data Scientist and AI engineer based in Randstad, Netherlands.
                    </p>
                    <div className="identity-screen__code">
                        <span
                            aria-hidden="true"
                            className="identity-screen__line identity-screen__line--animated"
                            data-testid="hero-roles"
                        >
                            {reduceMotion ? (
                                <span className="identity-screen__reduced-role">
                                    <span className="identity-screen__assignment">
                                        <span className="identity-screen__keyword">var</span> role =
                                    </span>
                                    <span data-entity="role">Senior Data Scientist</span>
                                    <span>;</span>
                                </span>
                            ) : (
                                <Typewriter
                                    options={{
                                        strings: rolePhrases,
                                        autoStart: true,
                                        loop: true,
                                        pauseFor: 1200,
                                        delay: 55,
                                        deleteSpeed: 32,
                                        cursor: '<span class="typewriter-cursor"></span>',
                                    }}
                                />
                            )}
                        </span>
                        <span aria-hidden="true" className="identity-screen__line identity-screen__line--location">
                            <span className="identity-screen__assignment">
                                <span className="identity-screen__keyword">const</span> location =
                            </span>
                            <span data-entity="location">Randstad, Netherlands</span><span>;</span>
                        </span>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default TypeLoop;
