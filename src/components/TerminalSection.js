import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {ExternalLink} from 'lucide-react';

import {terminalContent} from '../content/terminalContent';
import PaperTape from './PaperTape';

const renderText = (value) => value.split(/(Elsevier)/gi).map((part, index) => (
    part.toLowerCase() === 'elsevier'
        ? <span className="elsevier-text" key={`elsevier-${index}`}>{part}</span>
        : part
));

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

    return <React.Fragment key={`text-${index}`}>{renderText(segment.value)}</React.Fragment>;
});

const TerminalText = ({segments}) => <span>{renderSegments(segments)}</span>;

TerminalText.propTypes = {
    segments: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        value: PropTypes.string,
        entity: PropTypes.string,
    })).isRequired,
};

const HelpOutput = () => (
    <dl className="terminal-help">
        {terminalContent.help.map(([command, description]) => (
            <React.Fragment key={command}>
                <dt>{command}</dt>
                <dd>{description}</dd>
            </React.Fragment>
        ))}
    </dl>
);

const SpotifyOutput = () => (
    <div className="terminal-playlist">
        <TerminalText segments={terminalContent.spotify.intro} />
        <ol>
            {terminalContent.spotify.playlist.map((track) => (
                <li key={track.id}>
                    <div className="terminal-playlist__track">
                        <div className="terminal-playlist__title">
                            <strong>{track.title}</strong>
                            <span>{track.writer}</span>
                        </div>
                        <audio
                            aria-label={`${track.title} by ${track.writer} preview`}
                            controls
                            preload="metadata"
                            src={track.src}
                        >
                            Your browser does not support audio playback.
                        </audio>
                    </div>
                    <a href={track.youtubeUrl} rel="noopener noreferrer" target="_blank">
                        Listen <ExternalLink aria-hidden="true" />
                    </a>
                </li>
            ))}
        </ol>
    </div>
);

const commandOutput = {
    help: <HelpOutput />,
    whoami: <TerminalText segments={terminalContent.commands.whoami} />,
    education: <TerminalText segments={terminalContent.commands.education} />,
    experience: <TerminalText segments={terminalContent.commands.experience} />,
    spotify: <SpotifyOutput />,
};

const quickCommands = ['help', 'whoami', 'experience', 'spotify', 'clear'];

const TerminalSection = () => {
    const [command, setCommand] = useState('');
    const [entries, setEntries] = useState([
        {command: null, id: 0, output: <TerminalText segments={terminalContent.welcome} />},
    ]);
    const nextId = useRef(1);
    const outputRef = useRef(null);

    const runCommand = (rawCommand) => {
        const normalizedCommand = rawCommand.trim().toLowerCase();

        if (!normalizedCommand) {
            return;
        }

        if (normalizedCommand === 'clear') {
            setEntries([]);
            setCommand('');
            return;
        }

        let output = commandOutput[normalizedCommand];

        if (!output && normalizedCommand.startsWith('cd ')) {
            output = `changed path to ${rawCommand.trim().slice(3)}`;
        }

        if (!output) {
            output = (
                <span>
                    command not found: <strong>{normalizedCommand}</strong>. Try <strong>help</strong>.
                </span>
            );
        }

        const id = nextId.current;
        nextId.current += 1;
        setEntries((currentEntries) => [
            ...currentEntries,
            {command: normalizedCommand, id, output},
        ]);
        setCommand('');
        window.requestAnimationFrame?.(() => {
            outputRef.current?.scrollTo?.({top: outputRef.current.scrollHeight, behavior: 'smooth'});
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        runCommand(command);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.nativeEvent?.isComposing) {
            event.preventDefault();
            runCommand(command);
        }
    };

    return (
        <div className="terminal-frame">
            <PaperTape position="left" />
            <PaperTape position="right" />
            <div className="terminal" data-testid="terminal">
                <div className="terminal__toolbar">
                    <span className="terminal__lights" aria-hidden="true">
                        <i /><i /><i />
                    </span>
                    <span>profile — zsh — 80×24</span>
                </div>

                <div aria-live="polite" className="terminal__output" ref={outputRef}>
                    {entries.length === 0 && (
                        <p className="terminal__empty">Console cleared. Type <strong>help</strong> to continue.</p>
                    )}
                    {entries.map((entry) => (
                        <div className="terminal__entry" key={entry.id}>
                            {entry.command && (
                                <p className="terminal__command">
                                    <span aria-hidden="true">❯</span> {entry.command}
                                </p>
                            )}
                            <div className="terminal__response">{entry.output}</div>
                        </div>
                    ))}
                </div>

                <form className="terminal__form" onSubmit={handleSubmit}>
                    <label className="visually-hidden" htmlFor="terminal-command">Terminal command</label>
                    <span aria-hidden="true">❯</span>
                    <input
                        autoCapitalize="none"
                        autoComplete="off"
                        id="terminal-command"
                        onChange={(event) => setCommand(event.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="type a command"
                        spellCheck="false"
                        value={command}
                    />
                    <button type="submit">Run</button>
                </form>
            </div>

            <div aria-label="Suggested terminal commands" className="terminal-shortcuts">
                {quickCommands.map((quickCommand) => (
                    <button key={quickCommand} onClick={() => runCommand(quickCommand)} type="button">
                        {quickCommand}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TerminalSection;
