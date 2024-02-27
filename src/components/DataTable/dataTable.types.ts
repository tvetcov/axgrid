import { MouseEvent, ReactNode } from 'react';

export type Order = 'asc' | 'desc';

export interface DataTableProps<T> {
    rows: T[];
    columns: HeadCell<T>[];
    rowIdKey: keyof T;
    rowActions?: RowAction<T>[];
}

export interface HeadCell<T> {
    id: string;
    label: string;
    cellRenderer: (row: T) => ReactNode;
    width: number;
}

export interface DataTableHeaderProps<T> {
    onRequestSort: (event: MouseEvent<unknown>, property: string) => void;
    order: Order;
    orderBy: string;
    headCells: HeadCell<T>[];
}

export interface RowAction<T> {
    label: string;
    icon: ReactNode;
    onClick: (row: T) => void;
    getIsDisabled: (row: T) => boolean;
}

export interface DataTableBodyProps<T> {
    visibleRows: T[];
    emptyRows: number;
    rowIdKey: keyof T;
    defaultColumns: HeadCell<T>[];
    rowActions?: RowAction<T>[];
}
