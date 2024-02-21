import { HeadCell, Order } from './dataTable.types.ts';

export const isSelected = <T>(id: T[keyof T], selected: T[keyof T][]) =>
    selected.indexOf(id) !== -1;

export function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

export function getComparator<T, K extends keyof T>(order: Order, orderBy: K) {
    return order === 'desc'
        ? (a: T, b: T) => descendingComparator<T>(a, b, orderBy)
        : (a: T, b: T) => -descendingComparator<T>(a, b, orderBy);
}

export const getDefaultColumns = <T>(row: T): HeadCell<T>[] => {
    if (!row) return [];

    const keys = Object.keys(row as Record<string, unknown>) || [];

    return keys.map((key: string) => ({
        id: key as keyof T,
        label: key,
        numeric: typeof row[key as keyof T] === 'number',
        disablePadding: false
    }));
};
