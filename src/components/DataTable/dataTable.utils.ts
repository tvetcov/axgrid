import { Order } from '../dataTable.types';

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

export function getComparator<T>(order: Order, orderBy: string) {
    return order === 'desc'
        ? (a: T, b: T) => descendingComparator<T>(a, b, orderBy as keyof T)
        : (a: T, b: T) => -descendingComparator<T>(a, b, orderBy as keyof T);
}
