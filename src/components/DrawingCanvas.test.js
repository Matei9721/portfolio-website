import React from 'react';
import {fireEvent, render} from '@testing-library/react';

import Draw from './DrawingCanvas';

test('draws from window pointer movement without blocking hero interactions', () => {
    const context = {
        beginPath: vi.fn(),
        clearRect: vi.fn(),
        lineTo: vi.fn(),
        moveTo: vi.fn(),
        stroke: vi.fn(),
    };
    const getContext = vi
        .spyOn(HTMLCanvasElement.prototype, 'getContext')
        .mockReturnValue(context);
    const {container, unmount} = render(<Draw />);
    const canvas = container.querySelector('canvas');

    vi.spyOn(canvas, 'getBoundingClientRect').mockReturnValue({
        bottom: 200,
        height: 200,
        left: 0,
        right: 300,
        top: 0,
        width: 300,
        x: 0,
        y: 0,
        toJSON: () => {},
    });

    fireEvent.mouseMove(window, {clientX: 10, clientY: 20});
    fireEvent.mouseMove(window, {clientX: 30, clientY: 40});

    expect(context.moveTo).toHaveBeenCalledWith(10, 20);
    expect(context.lineTo).toHaveBeenCalledWith(30, 40);
    expect(context.stroke).toHaveBeenCalled();
    expect(canvas).toHaveStyle({pointerEvents: 'none'});

    unmount();
    getContext.mockRestore();
});
