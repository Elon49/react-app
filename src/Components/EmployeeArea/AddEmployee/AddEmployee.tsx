import { useNavigate } from "react-router";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/UseTitle";
import "./AddEmployee.css";

export function AddEmployee(): JSX.Element {
    useTitle('add an employee');


    const navigate = useNavigate();

    async function send(employee: EmployeeModel) {
        try {
            employee.image = (employee.image as unknown as FileList)[0];
            
        } catch (err: any) {
            notify.error(err);
        }
    }
    return (
        <div className="AddEmployee">
			
        </div>
    );
}
