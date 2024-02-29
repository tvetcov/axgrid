import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { http } from 'msw';
import { setupServer } from 'msw/node';
import { TestRouter } from 'tests/test.utils';

import Dashboard from './Dashboard.component';

const RESPONSE_SOURCES_MOCK = [
    {
        id: 2092,
        source: 'Thermal',
        price: '$96.42',
        minimumPurchaseQuantity: 572,
        status: 'Open',
        contractTerms: {
            duration: '2 years',
            penalty: '36% of remaining contract value',
            legalConditions: 'Refer to standard contract terms'
        },
        paymentTerms: {
            paymentMethod: 'Wire Transfer',
            paymentDate: '2024-02-28T22:00:00.000Z'
        },
        customFields: [
            {
                id: 1,
                value: '500 MW'
            },
            {
                id: 2,
                value: '89%'
            },
            {
                id: 3,
                value: 'https://cdn.savemyexams.com/cdn-cgi/image/f=auto,width=1920/uploads/2023/07/2-1-10-temperature-gradient-diagram-png-ib-2025-physics.png'
            },
            {
                id: 4,
                value: '3.5%'
            },
            {
                id: 5,
                value: '64°08\'32.0"N 21°56\'26.8"W'
            },
            {
                id: 6,
                value: 'https://justenergy.com/blog/thermal-energy-what-it-is-how-it-works-environmental-impact/'
            }
        ]
    }
];
const RESPONSE_FIELDS_MOCK = {
    Thermal: [
        {
            id: 1,
            name: 'Capacity',
            type: 'TextFieldData'
        },
        {
            id: 2,
            name: 'Heat Source Stability',
            type: 'TextFieldData'
        },
        {
            id: 3,
            name: 'Temperature Gradient',
            type: 'TextFieldData',
            subType: 'link'
        },
        {
            id: 4,
            name: 'Conversion Efficiency',
            type: 'TextFieldData'
        },
        {
            id: 5,
            name: 'Location',
            type: 'TextFieldData',
            subType: 'geolocation'
        },
        {
            id: 6,
            name: 'Environmental Impact and Regulation',
            type: 'TextFieldData',
            subType: 'link'
        }
    ]
};

const handlers = [
    http.get('/apiMocks/energySources.json', () => {
        return new Response(JSON.stringify(RESPONSE_SOURCES_MOCK), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }),
    http.get('/apiMocks/fields.json', () => {
        return new Response(JSON.stringify(RESPONSE_FIELDS_MOCK), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    })
];

const server = setupServer(...handlers);

beforeAll(() => {
    server.listen();
});

afterEach(() => {
    server.resetHandlers();
});

describe('Dashboard page', () => {
    it('should render the Dashboard page', async () => {
        render(<Dashboard />, { wrapper: TestRouter });

        expect(
            await waitFor(() => screen.findByText('Energy Source Deals'))
        ).toBeInTheDocument();
    });

    it('should render energy selector buttons accordingly to data provided', async () => {
        render(<Dashboard />, { wrapper: TestRouter });

        expect(
            await waitFor(() => screen.findByTestId('ThermostatIcon'))
        ).toBeInTheDocument();
    });

    it('should render energy table accordingly to data provided', async () => {
        const resource = RESPONSE_SOURCES_MOCK[0];
        render(<Dashboard />, { wrapper: TestRouter });

        // render the price
        expect(
            await waitFor(() => screen.findByText(resource.price))
        ).toBeInTheDocument();

        // render the status
        expect(
            await waitFor(() => screen.findByText(resource.status))
        ).toBeInTheDocument();

        // render the minimumPurchaseQuantity
        expect(
            await waitFor(() =>
                screen.findByText(resource.minimumPurchaseQuantity)
            )
        ).toBeInTheDocument();

        // render the duration
        expect(
            await waitFor(() =>
                screen.findByText(resource.contractTerms.duration)
            )
        ).toBeInTheDocument();

        // render the penalty
        expect(
            await waitFor(() =>
                screen.findByText(resource.contractTerms.penalty)
            )
        ).toBeInTheDocument();

        // render the legalConditions
        expect(
            await waitFor(() =>
                screen.findByText(resource.contractTerms.legalConditions)
            )
        ).toBeInTheDocument();

        // render the paymentMethod
        expect(
            await waitFor(() =>
                screen.findByText(resource.paymentTerms.paymentMethod)
            )
        ).toBeInTheDocument();
    });
});
