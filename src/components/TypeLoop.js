import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import useSound from 'use-sound';
import hoverSound from '../obi-wan-hello-there.mp3';
import '../App.css'; // Make sure to adjust the path to your CSS file
import { GithubOutlined, LinkedinOutlined, FilePdfOutlined } from '@ant-design/icons';

const TypeLoop = () => {
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setStartTyping(true);
        }, 2900); // 2 seconds delay

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    const [play] = useSound(hoverSound);
    return (

        <div className="centered-container">
                <div  onClick={play}>
                    <Typewriter onClick={play}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('<span class="typewriter-string">Hello there, my name is </span><span data-entity="person"> Matei Penca </span>')
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
                {startTyping && (
                    <Typewriter
                        options={{
                            strings: [
                                '<span class="typewriter-role-string">const role = </span><span class="typewriter-string">"Data Scientist";</span>',
                                '<span class="typewriter-role-string">const role_new = </span><span class="typewriter-string">"Software Engineer";</span>'],
                            autoStart: true,
                            loop: true,
                            pauseFor: 900,
                            delay: 75,
                            cursor: '<span class="typewriter-cursor"></span>',
                        }}
                    />
                )}

            <span style={{position: "absolute", zIndex: 2, bottom: 40}}>
                <a href={"https://github.com/Matei9721"} target="_blank" rel="noopener noreferrer">
        <GithubOutlined style={{ fontSize: '64px', paddingRight: 15}} />
      </a>

                <a href={"https://www.linkedin.com/in/matei-penca/"} target="_blank" rel="noopener noreferrer">
        <LinkedinOutlined style={{ fontSize: '64px', paddingRight: 15}} />
      </a>

                <a href={"https://drive.google.com/uc?id=1qVG1OtJsJgdzWsN4y9vVT18Rmo3XezKz&export=download"}>
        <FilePdfOutlined style={{ fontSize: '64px', }} />
      </a>
            </span>

        </div>


    );
};

export default TypeLoop;
