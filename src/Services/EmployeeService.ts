import axios from "axios";
import { EmployeeModel } from "../Models/EmployeeModel";
import { actions, store } from "../Storage/store";
import { appConfig } from "../Utils/AppConfig";

class EmployeeService {
	public async getAllEmployees(): Promise<EmployeeModel[]> {
        if(store.getState().employees) return store.getState().employees;
        const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);
        store.dispatch(actions.initEmployees(response.data));
        return response.data;
    }

    public async getOneEmployee(id: number): Promise<EmployeeModel> {
        const employee = store.getState().employees?.find(e => e.id === id);
        if(employee) return employee;

        const response = await axios.get<EmployeeModel>(appConfig.employeesUrl + id)
        return response.data;
    }
}

export const employeeService = new EmployeeService();
