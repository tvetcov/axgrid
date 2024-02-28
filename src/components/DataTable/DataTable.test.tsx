import { describe, expect, it, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import DataTable from './DataTable.component';
import { getComparator, stableSort } from './dataTable.utils.ts';

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
];

describe('DataTable component', () => {
    it('renders correctly', () => {
        render(
            <DataTable rows={[]} columns={[]} rowActions={[]} rowIdKey="id" />
        );

        expect(screen.getByText('Rows per page:')).toBeInTheDocument();
    });
});

describe('DataTable utils', () => {
    test('sorts an empty array', () => {
        expect(stableSort([], (a, b) => a - b)).toEqual([]);
    });

    test('sorts an array by a single property', () => {
        const sortedByName = stableSort(people, (a, b) =>
            a.name.localeCompare(b.name)
        );
        expect(sortedByName).toEqual([
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 30 },
            { name: 'Charlie', age: 25 }
        ]);
    });

    test('sorts an array with equal values', () => {
        const sortedByAgeThenName = stableSort(people, (a, b) => {
            const ageComparison = a.age - b.age;
            if (ageComparison !== 0) return ageComparison;
            return a.name.localeCompare(b.name);
        });
        expect(sortedByAgeThenName).toEqual([
            { name: 'Alice', age: 25 },
            { name: 'Charlie', age: 25 },
            { name: 'Bob', age: 30 }
        ]);
    });
});

describe('getComparator', () => {
    test('returns ascending comparator for ascending order', () => {
        const comparator = getComparator('asc', 'age');
        expect(comparator(people[0], people[1])).toBeLessThan(0);
    });

    test('returns descending comparator for descending order', () => {
        const comparator = getComparator('desc', 'age');
        expect(comparator(people[0], people[1])).toBeGreaterThan(0);
    });
});
