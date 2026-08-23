import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { vi } from 'vitest';

import App from './App';

const playEasterEgg = vi.hoisted(() => vi.fn());

vi.mock('use-sound', () => ({
  default: () => [playEasterEgg],
}));

const renderPortfolio = () => render(<App />);

const runTerminalCommand = (command) => {
  const input = screen.getByRole('textbox', { name: /terminal command/i });
  fireEvent.change(input, { target: { value: command } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
};

test('renders the redesigned portfolio structure', () => {
  renderPortfolio();

  expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Hello there, my name is Matei Penca/i, level: 1 }))
    .toBeInTheDocument();
  expect(screen.getByTestId('terminal')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /personal projects/i })).toBeInTheDocument();
});

test('renders the decorative desktop background as an inaccessible layer', () => {
  const { container } = renderPortfolio();
  const doodles = screen.getByTestId('background-doodles');

  expect(doodles).toHaveAttribute('aria-hidden', 'true');
  expect(doodles.querySelectorAll('.background-doodle')).toHaveLength(9);
  expect(doodles.querySelectorAll('.background-doodle__orbit-ring')).toHaveLength(18);
  expect(doodles.querySelectorAll('.background-doodle__orbit-node')).toHaveLength(27);
  expect(container.querySelector('[class*="background-doodle--brackets"]')).not.toBeInTheDocument();
  expect(container.querySelector('.background-doodle--crosshair')).not.toBeInTheDocument();
  expect(container.querySelector('.background-doodle--scribble')).not.toBeInTheDocument();
});

test('does not render decorative system labels or build credits', () => {
  renderPortfolio();

  [
    /FILE 001/i,
    /INTERACTIVE/i,
    /BUILT FOR NO GOOD REASON/i,
    /LOCAL SESSION/i,
    /Made with React/i,
  ].forEach((label) => expect(screen.queryByText(label)).not.toBeInTheDocument());

  expect(screen.queryByRole('link', {name: /Back to the introduction/i})).not.toBeInTheDocument();
});

test('preserves both roles in the welcome message', () => {
  renderPortfolio();

  expect(screen.getByTestId('terminal')).toHaveTextContent(
    /I am a\s+AI Engineer\s+and\s+Data Scientist\s+working on search/i,
  );
});

test('exposes the hero identity without waiting for the typewriter animation', () => {
  renderPortfolio();

  expect(screen.getByRole('heading', {
    name: /Hello there, my name is Matei Penca/i,
    level: 1,
  })).toBeInTheDocument();
  expect(screen.getByTestId('hero-intro')).toBeInTheDocument();
  expect(screen.getByText(
    /Senior Data Scientist and AI Engineer based in Randstad, Netherlands/i,
  )).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /hidden hello there easter egg/i }))
    .toBeInTheDocument();
});

test('shows a concise code profile on the off-centre identity screen', () => {
  const { container } = renderPortfolio();

  expect(screen.getByTestId('hero-roles')).toBeInTheDocument();
  expect(container.querySelector('.identity-screen__code')).toHaveTextContent(/Randstad, Netherlands/i);
  expect(container.querySelector('.identity-screen__code')).not.toHaveAttribute('role', 'button');
});

test('puts the hello there easter egg on the hero text instead of the identity screen', () => {
  const { container } = renderPortfolio();

  const easterEgg = screen.getByRole('button', { name: /hidden hello there easter egg/i });
  const identityScreen = container.querySelector('.identity-screen');

  fireEvent.click(easterEgg);
  fireEvent.click(identityScreen);

  expect(container.querySelector('.hero__statement')).toContainElement(easterEgg);
  expect(identityScreen).not.toContainElement(easterEgg);
  expect(easterEgg.querySelector('svg')).not.toBeInTheDocument();
  expect(playEasterEgg).toHaveBeenCalledTimes(1);
});

describe('terminal commands', () => {
  test.each([
    ['help', [/whoami/i, /education/i, /spotify/i, /experience/i, /clear/i]],
    ['whoami', /I was born in Romania/],
    ['education', /Groningen/],
    ['experience', /first software role was at/i],
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

  test('clear removes previous command output', async () => {
    renderPortfolio();
    runTerminalCommand('whoami');
    await waitFor(() => expect(screen.getByText(/I was born in Romania/)).toBeInTheDocument());

    runTerminalCommand('clear');
    await waitFor(() => expect(screen.queryByText(/I was born in Romania/)).not.toBeInTheDocument());
    expect(screen.getByText(/Console cleared/i)).toBeInTheDocument();
  });

  test('suggested commands are interactive', () => {
    renderPortfolio();
    fireEvent.click(screen.getByRole('button', { name: 'help' }));

    expect(screen.getByText(/Who am I\?/i)).toBeInTheDocument();
  });

  test('spotify renders playable song previews', () => {
    renderPortfolio();
    runTerminalCommand('spotify');

    expect(screen.getByLabelText(/Bleach by Anatu preview/i)).toHaveAttribute('controls');
    expect(screen.getByLabelText(/Interstelar by Alexia preview/i)).toHaveAttribute('controls');
    expect(screen.getByLabelText(/Candy Thief by Beatpella preview/i)).toHaveAttribute('controls');
  });
});

test('focuses work experience on Elsevier and Syntho', () => {
  renderPortfolio();

  expect(screen.getByRole('heading', { name: /Senior Data Scientist/i }))
    .toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Python Software Engineer Intern/i }))
    .toBeInTheDocument();
  expect(screen.getAllByText(/information-extraction pipelines/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/planning, reasoning, and research agents/i)).toBeInTheDocument();
  expect(screen.getByText(/20% uplift in reselling/i)).toBeInTheDocument();
  expect(screen.getByText(/boosting user retention by more than 30%/i)).toBeInTheDocument();
  expect(screen.getByText(/processes millions of documents annually/i)).toBeInTheDocument();
  const technologies = screen.getByRole('list', { name: /Elsevier relevant technologies/i });
  expect(technologies.children).toHaveLength(10);
  expect(technologies).toHaveTextContent(/LLMs · SFT \/ DPO fine-tuning/i);
  expect(technologies).toHaveTextContent(/Vector DBs · OpenSearch/i);
  expect(screen.getByText(/Improved PII and relationship scanners/i)).toBeInTheDocument();
  expect(screen.getByText(/Built a D3 dashboard and maintained Python services/i)).toBeInTheDocument();
  expect(screen.getByText(/Improved engineering reliability through unit and integration testing/i)).toBeInTheDocument();
  const synthoTechnologies = screen.getByRole('list', { name: /Syntho relevant technologies/i });
  expect(synthoTechnologies.children).toHaveLength(5);
  expect(synthoTechnologies).toHaveTextContent(/Python/);
  expect(synthoTechnologies).toHaveTextContent(/D3\.js/);
  expect(screen.queryByText('Adyen')).not.toBeInTheDocument();
  expect(screen.queryByText('U.G.')).not.toBeInTheDocument();
  expect(screen.getByText('2023 — now')).toBeInTheDocument();
  expect(screen.getByText('2021 — 2022')).toBeInTheDocument();
  expect(screen.getByRole('list', {name: /Elsevier role progression/i})).toBeInTheDocument();
});

test('links Elsevier AI products from the experience details', () => {
  renderPortfolio();

  const productLinks = [
    ['EmbaseAI', 'https://www.elsevier.com/products/embase/embase-ai'],
    [
      'ReaxysAI',
      'https://www.elsevier.com/about/press-releases/elsevier-introduces-reaxys-ai-search-enabling-faster-and-more-accessible',
    ],
    ['PharmapendiumAI', 'https://www.elsevier.com/products/pharmapendium/pharmapendium-ai'],
    ['Embiology', 'https://www.elsevier.com/products/embiology'],
  ];

  productLinks.forEach(([name, href]) => {
    expect(screen.getByRole('link', { name })).toHaveAttribute('href', href);
  });
});

test('contains every personal project GitHub link', () => {
  const { container } = renderPortfolio();

  const projectLinks = [
    ['View BeerRunJPN on GitHub', 'https://github.com/Matei9721/beer-run-jpn'],
    ['View Romanian CS Forces on GitHub', 'https://github.com/Matei9721/cs-tracker'],
    ['View Ashfall DM control room on GitHub', 'https://github.com/Matei9721/ashfall-dnd'],
    ['View Anime recommender on GitHub', 'https://github.com/Matei9721/anime-recommender'],
  ];

  projectLinks.forEach(([name, href]) => {
    expect(screen.getByRole('link', { name })).toHaveAttribute('href', href);
  });

  const projectGrid = container.querySelector('.projects-grid');
  expect(projectGrid).toBeInTheDocument();
  expect(projectGrid.children).toHaveLength(projectLinks.length);
  expect([...projectGrid.children].every((child) => child.tagName === 'ARTICLE')).toBe(true);
  expect(container.querySelector('.project-card__meta')).not.toBeInTheDocument();
});

test('uses masking tape as the paper-workshop fastener motif', () => {
  const { container } = renderPortfolio();
  const tapePieces = [...container.querySelectorAll('.paper-tape')];

  expect(tapePieces).toHaveLength(11);
  expect(tapePieces.every((tape) => tape.getAttribute('aria-hidden') === 'true')).toBe(true);
  expect(container.querySelector('.paper-bandage')).not.toBeInTheDocument();
  expect(container.querySelector('.note-pin')).not.toBeInTheDocument();
});

test('uses two corner tapes on wide notes and one on project notes', () => {
  const { container } = renderPortfolio();
  const workNotes = container.querySelectorAll('.experience-entry');
  const projectNotes = container.querySelectorAll('.project-card');

  expect(workNotes).toHaveLength(2);
  workNotes.forEach((note) => {
    expect(note.querySelectorAll('.paper-tape')).toHaveLength(2);
    expect(note.querySelector('.paper-tape--left')).toHaveAttribute('aria-hidden', 'true');
    expect(note.querySelector('.paper-tape--right')).toHaveAttribute('aria-hidden', 'true');
  });

  expect(projectNotes).toHaveLength(4);
  projectNotes.forEach((note) => {
    expect(note.querySelectorAll('.paper-tape')).toHaveLength(1);
    expect(note.querySelector('.paper-tape')).toHaveAttribute('aria-hidden', 'true');
  });
});

test('does not mount the removed drawing canvas', () => {
  const { container } = renderPortfolio();

  expect(container.querySelector('canvas')).not.toBeInTheDocument();
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
