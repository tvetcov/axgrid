import { ChangeEvent, MouseEvent, ReactNode } from 'react';

export type Order = 'asc' | 'desc';

export interface HeadCell<T = unknown> {
    id: string;
    label: string;
    cellRenderer: (row: T) => ReactNode;
    width: number;
}

export interface DataTableHeaderProps {
    numSelected: number;
    onRequestSort: (event: MouseEvent<unknown>, property: string) => void;
    onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
    headCells: HeadCell[];
}

export interface DataTableBodyProps<T> {
    visibleRows: T[];
    handleClick: (id: T[keyof T]) => void;
    emptyRows: number;
    rowIdKey: keyof T;
    selected: T[keyof T][];
    defaultColumns: HeadCell[];
}

export interface Data {
    id: number;
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
}
