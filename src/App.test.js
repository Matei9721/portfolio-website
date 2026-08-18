import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import { TerminalContextProvider } from 'react-terminal';

vi.mock('react-modern-audio-player', () => ({
  default: function MockAudioPlayer({ playList = [] }) {
    return (
      <div data-testid="audio-player">
        {playList.map(({ id, name }) => <span key={id}>{name}</span>)}
      </div>
    );
  },
}));

vi.mock('./components/DrawingCanvas', () => ({
  default: function MockDrawingCanvas() {
    return null;
  },
}));

import App from './App';

const renderPortfolio = () => render(
  <TerminalContextProvider>
    <App />
  </TerminalContextProvider>,
);

const runTerminalCommand = (command) => {
  fireEvent.mouseDown(screen.getByTestId('terminal'));
  for (const key of command) {
    fireEvent.keyDown(document, { key });
  }
  fireEvent.keyDown(document, { key: 'Enter' });
};

test('renders the current portfolio', () => {
  renderPortfolio();

  expect(screen.getByTestId('terminal')).toBeInTheDocument();
  expect(screen.getByText(/use this/i)).toBeInTheDocument();
});

test('preserves the welcome message role phrase', () => {
  renderPortfolio();

  expect(screen.getByTestId('terminal')).toHaveTextContent(
    /I've been working as a\s+Software Engineer\s+and\s+Data Scientist\s+where I've build/i,
  );
});

test('exposes hero name and roles without waiting for the typewriter animation', () => {
  renderPortfolio();

  expect(within(screen.getByTestId('hero-intro')).getByText(/Matei Penca/)).toBeInTheDocument();
  expect(within(screen.getByTestId('hero-roles')).getByText(/Data Scientist/)).toBeInTheDocument();
  expect(within(screen.getByTestId('hero-roles')).getByText(/Software Engineer/)).toBeInTheDocument();
});

describe('terminal commands', () => {
  test.each([
    ['help', [/whoami/i, /education/i, /spotify/i, /experience/i, /clear/i]],
    ['whoami', /I was born in Romania/],
    ['education', /Groningen/],
    ['experience', /first experience with building/i],
    ['spotify', /Bleach/],
  ])('runs %s', async (command, expectedOutput) => {
    renderPortfolio();
    runTerminalCommand(command);

    await waitFor(() => {
      if (Array.isArray(expectedOutput)) {
        expectedOutput.forEach((output) => {
          expect(screen.getAllByText(output).length).toBeGreaterThan(0);
        });
      } else {
        expect(screen.getByText(expectedOutput)).toBeInTheDocument();
      }
    });
  });

  test('clear removes a previous command output', async () => {
    renderPortfolio();
    runTerminalCommand('whoami');
    await waitFor(() => expect(screen.getByText(/I was born in Romania/)).toBeInTheDocument());

    runTerminalCommand('clear');
    await waitFor(() => expect(screen.queryByText(/I was born in Romania/)).not.toBeInTheDocument());
  });
});

test('contains every work-experience entry and its representative content', () => {
  renderPortfolio();

  const entries = [
    ['Elsevier', /information extraction pipelines/i],
    ['Syntho', /PII \(Personally identifiable information\)/i],
    ['Adyen', /explainable fraud detection/i],
    ['U.G.', /Teaching assistant/i],
  ];

  entries.forEach(([label, content]) => {
    fireEvent.click(screen.getByRole('tab', { name: label }));
    expect(screen.getAllByText(content).length).toBeGreaterThan(0);
  });
});

test('contains every project GitHub link', () => {
  renderPortfolio();

  const projectLinks = [
    ['View GenAI ChatBot Assistant on GitHub', 'https://github.com/Matei9721/ai-search-engine'],
    ['View Project IDLab on GitHub', 'https://github.com/osoc22/project-idlab'],
    ['View this portfolio on GitHub', 'https://github.com/Matei9721/portofolio-website'],
    ['View Discord Javascript bot on GitHub', 'https://github.com/Matei9721/js-discord-bot'],
  ];

  projectLinks.forEach(([name, href]) => {
    expect(screen.getByRole('link', { name })).toHaveAttribute('href', href);
  });
});

test('does not render unnamed links or buttons', () => {
  const { container } = renderPortfolio();
  const unnamed = [...container.querySelectorAll('a, button')].filter((element) => {
    if (element.getAttribute('aria-hidden') === 'true') {
      return false;
    }

    const hasName = element.getAttribute('aria-label')
      || element.getAttribute('aria-labelledby')
      || element.getAttribute('title')
      || element.textContent.trim();
    return !hasName;
  });

  expect(unnamed).toEqual([]);
});
