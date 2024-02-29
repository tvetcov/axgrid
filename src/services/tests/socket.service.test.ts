import { describe, expect, test, vi } from 'vitest';

import SocketService from '../socket.service';

describe('WebSocket service', () => {
    test('constructor sets connection ready and error flags to false', () => {
        const service = SocketService;
        expect(service.connection_ready).toBe(false);
        expect(service.connection_error).toBe(false);
    });

    test('onOpen sets connection ready flag to true and calls callback', () => {
        const service = SocketService;
        const mockCallback = vi.fn();
        service.onOpen(mockCallback);

        // Simulate the open event using vi.mock
        vi.mock('ws', () => ({
            onopen: mockCallback
        }));

        // @ts-expect-error - We are testing the onOpen method
        service.websocket.onopen();

        expect(service.connection_ready).toBe(true);
        expect(mockCallback).toBeCalledTimes(1);
    });

    test('onClose sets connection ready flag to false and calls callback', () => {
        const service = SocketService;
        const mockCallback = vi.fn();
        service.onClose(mockCallback);

        // Simulate the close event using vi.mock
        vi.mock('ws', () => ({
            onclose: mockCallback
        }));

        // @ts-expect-error - We are testing the onClose method
        service.websocket.onclose();

        expect(service.connection_ready).toBe(false);
        expect(mockCallback).toBeCalledTimes(1);
    });

    test('onMessage calls callback with received message', () => {
        const service = SocketService;
        const mockCallback = vi.fn();
        const testMessage = 'This is a test message';
        service.onMessage(mockCallback);

        // Simulate the message event using vi.mock
        vi.mock('ws', () => ({
            onmessage: (event: { data: unknown }) => event.data === testMessage
        }));

        // @ts-expect-error - We are testing the onClose method
        service.websocket.onmessage({ data: testMessage });

        expect(mockCallback).toBeCalledTimes(1);
        expect(mockCallback).toBeCalledWith(testMessage);
    });

    test('send sends the message through the websocket', () => {
        const service = SocketService;
        const testMessage = 'This is a test message to send';
        const mockSend = vi.fn();
        service.websocket.send = mockSend;

        service.send(testMessage);

        expect(mockSend).toBeCalledTimes(1);
        expect(mockSend).toBeCalledWith(testMessage);
    });

    test('close closes the websocket connection', () => {
        const service = SocketService;
        const mockClose = vi.fn();
        service.websocket.close = mockClose;

        service.close();

        expect(mockClose).toBeCalledTimes(1);
    });
});
