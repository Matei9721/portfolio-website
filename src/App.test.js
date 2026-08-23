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
  expect(screen.getByRole('region', {name: /Interactive terminal/i})).toHaveAttribute('tabindex', '0');
  expect(screen.getByText(/use this/i)).toBeInTheDocument();
});

test('preserves the welcome message role phrase', () => {
  renderPortfolio();

  expect(screen.getByTestId('terminal')).toHaveTextContent(
    /I work as a\s+Software Engineer\s+and\s+Data Scientist\s+across search/i,
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
    ['experience', /first experience building/i],
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

test('shows the current career progression and omits older low-relevance roles', () => {
  renderPortfolio();

  expect(screen.getByRole('heading', {name: 'Elsevier'})).toBeInTheDocument();
  expect(screen.getByRole('heading', {name: 'Senior Data Scientist'})).toBeInTheDocument();
  expect(screen.getByRole('heading', {name: 'Data Scientist III'})).toBeInTheDocument();
  expect(screen.getByRole('heading', {name: 'Data Scientist II'})).toBeInTheDocument();
  expect(screen.getByRole('heading', {name: 'Data Science Intern'})).toBeInTheDocument();
  expect(screen.getByText(/multi-agent deep-research assistant/i)).toBeInTheDocument();
  expect(screen.getByText(/synthetic-data quality reports/i)).toBeInTheDocument();
  expect(screen.queryByText('Adyen')).not.toBeInTheDocument();
  expect(screen.queryByText('U.G.')).not.toBeInTheDocument();
});

test('contains every project GitHub link', () => {
  const { container } = renderPortfolio();

  const projectLinks = [
    ['View the chatbot source', 'https://github.com/Matei9721/ai-search-engine'],
    ['View the IDLab source', 'https://github.com/osoc22/project-idlab'],
    ['View this portfolio source', 'https://github.com/Matei9721/portofolio-website'],
    ['View the Discord bot source', 'https://github.com/Matei9721/js-discord-bot'],
  ];

  projectLinks.forEach(([name, href]) => {
    expect(screen.getByRole('link', { name })).toHaveAttribute('href', href);
  });

  const projectGrid = container.querySelector('.projects-grid');
  expect(projectGrid).toBeInTheDocument();
  expect(projectGrid.children).toHaveLength(projectLinks.length);
  expect([...projectGrid.children].every((child) => child.classList.contains('project-card')))
    .toBe(true);
});

test('keeps the primary portfolio interactions discoverable', () => {
  renderPortfolio();

  expect(screen.getByRole('link', {name: /Matei Penca on GitHub/i})).toBeInTheDocument();
  expect(screen.getByRole('link', {name: /Matei Penca on LinkedIn/i})).toBeInTheDocument();
  expect(screen.getByRole('link', {name: /Download Matei Penca's CV/i})).toBeInTheDocument();
  expect(screen.getByRole('link', {name: /Back to top/i})).toHaveAttribute('href', '#top');
  expect(screen.getByRole('link', {name: /Scroll to explore/i})).toHaveAttribute('href', '#about');
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
