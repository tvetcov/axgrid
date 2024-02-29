import { describe, expect, test, vi } from 'vitest';
import DataService from '../dataFetch.service.ts';

describe('AxGrid', () => {
    test('baseUrl is set correctly in the constructor', () => {
        const service = DataService;
        expect(service.baseUrl).toBe('./apiMocks/');
    });

    test('fetch returns data on successful response', async () => {
        const mockResponse = { data: 'Mocked data' };
        const mockFetch = vi
            .fn()
            .mockImplementationOnce(() =>
                Promise.resolve({ json: () => Promise.resolve(mockResponse) })
            );
        global.fetch = mockFetch;

        const service = DataService;
        const response = await service.fetch<string>('test');

        expect(mockFetch).toBeCalledWith('./apiMocks/test.json');
        expect(response).toEqual(mockResponse);
    });
});
