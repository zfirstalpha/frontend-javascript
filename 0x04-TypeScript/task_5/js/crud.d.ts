/// <reference types="node" />
import { RowElement } from "./interface";

declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: number): void;
declare function updateRow(rowId: number, row: RowElement): number;

