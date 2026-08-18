import React from 'react';
import PropTypes from 'prop-types';
import {ReactTerminal} from 'react-terminal';
import AudioPlayer from 'react-modern-audio-player';

import {terminalContent} from '../content/terminalContent';

const terminalTheme = {
    'my-custom-theme': {
        themeBGColor: '#efeff0',
        themeToolbarColor: '#efeff0',
        themeColor: '#262323',
        themePromptColor: '#310930',
    },
};

const renderSegments = (segments) => segments.map((segment, index) => {
    if (segment.type === 'lineBreak') {
        return <br key={`line-break-${index}`} />;
    }

    if (segment.type === 'entity') {
        return (
            <span data-entity={segment.entity} key={`entity-${index}`}>
                {segment.value}
            </span>
        );
    }

    if (segment.type === 'strong') {
        return <strong key={`strong-${index}`}>{segment.value}</strong>;
    }

    return <React.Fragment key={`text-${index}`}>{segment.value}</React.Fragment>;
});

const TerminalText = ({segments}) => <span>{renderSegments(segments)}</span>;

TerminalText.propTypes = {
    segments: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        value: PropTypes.string,
        entity: PropTypes.string,
    })).isRequired,
};

const SpotifyCommand = () => {
    const playlist = terminalContent.spotify.playlist.map((track) => ({
        name: (
            <a href={track.youtubeUrl} rel="noopener noreferrer" target="_blank">
                {track.title} 🔗
            </a>
        ),
        writer: track.writer,
        img: track.img,
        src: track.src,
        id: track.id,
    }));

    return (
        <span>
            <TerminalText segments={terminalContent.spotify.intro} />
            <AudioPlayer
                activeUI={{
                    all: true,
                    playButton: true,
                    volume: true,
                    volumeSlider: true,
                    repeatType: true,
                    trackTime: true,
                    trackInfo: true,
                    artwork: true,
                }}
                audioInitialState={{
                    muted: false,
                    volume: 0.2,
                    curPlayId: 1,
                    repeatType: 'ALL',
                    isPlaying: false,
                }}
                playList={playlist}
            />
        </span>
    );
};

const TerminalSection = () => {
    const commands = {
        help: (
            <span>
                {terminalContent.help.map(([command, description]) => (
                    <React.Fragment key={command}>
                        <strong>{command}</strong> - {description} <br />
                    </React.Fragment>
                ))}
            </span>
        ),
        whoami: <TerminalText segments={terminalContent.commands.whoami} />,
        cd: (directory) => `changed path to ${directory}`,
        education: <TerminalText segments={terminalContent.commands.education} />,
        experience: <TerminalText segments={terminalContent.commands.experience} />,
        spotify: <SpotifyCommand />,
    };

    return (
        <div className="terminal">
            <ReactTerminal
                commands={commands}
                theme="my-custom-theme"
                themes={terminalTheme}
                welcomeMessage={<TerminalText segments={terminalContent.welcome} />}
            />
        </div>
    );
};

export default TerminalSection;
