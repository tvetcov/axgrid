import { ChangeEvent, MouseEvent } from 'react';

export type Order = 'asc' | 'desc';

export interface HeadCell<T> {
    disablePadding: boolean;
    id: keyof T;
    label: string;
    numeric: boolean;
}

export interface DataTableHeaderProps<T> {
    numSelected: number;
    onRequestSort: (event: MouseEvent<unknown>, property: keyof T) => void;
    onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: keyof T;
    rowCount: number;
    headCells: HeadCell<T>[];
}

export interface DataTableBodyProps<T> {
    visibleRows: T[];
    handleClick: (id: T[keyof T]) => void;
    emptyRows: number;
    rowIdKey: keyof T;
    selected: T[keyof T][];
    defaultColumns: HeadCell<T>[];
}

export interface Data {
    id: number;
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
}
