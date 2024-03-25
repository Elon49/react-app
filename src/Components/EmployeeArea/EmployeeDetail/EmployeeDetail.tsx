import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import { employeeService } from "../../../Services/EmployeeService";
import { useTitle } from "../../../Utils/UseTitle";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import "./EmployeeDetail.css";

export function EmployeeDetail(): JSX.Element {

    const params = useParams();

    useTitle('employee detail' + params.id);

    const [employee, setEmployee] = useState<EmployeeModel>();
    const navigate = useNavigate();

    useEffect(() => {
        employeeService.getOneEmployee(+params.id)
            .then((dbEmployeeDetail: EmployeeModel) => setEmployee(dbEmployeeDetail));
    }, []);

    if (!employee) return <Spinner />


    return (
        <div className="EmployeeDetail">
            details...
            {employee.firstName}
            {employee.lastName}
            {employee.country}
            {employee.city}
            {employee.birthDate}
            <img src={employee.imageUrl} />
            <br />
            <br />
        </div>
    );
}
