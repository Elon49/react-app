import { PayloadAction } from "@reduxjs/toolkit";
import { EmployeeModel } from "../Models/EmployeeModel";



export function initEmployees(currentState: EmployeeModel[], action: PayloadAction<EmployeeModel[]>): EmployeeModel[] {
    return action.payload;
}

export function addEmployee(currentState: EmployeeModel[], action: PayloadAction<EmployeeModel>): EmployeeModel[] {
    return [...currentState, action.payload];
}

export function updateEmployee(currentState: EmployeeModel[], action: PayloadAction<EmployeeModel>): EmployeeModel[] {
    return currentState.map( p => p.id === action.payload.id ? action.payload : p);
}

export function deleteEmployee(currentState: EmployeeModel[], action: PayloadAction<number>): EmployeeModel[] {
    return currentState.filter( p => p.id !== action.payload);
}