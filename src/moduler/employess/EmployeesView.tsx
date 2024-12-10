import { DataTable } from "@/common/data-table";
import {columns} from './columns'
import { EmployeeType } from "@/api/posts/types";

const employees: EmployeeType[] = [
    { id: 1, name: "John Doe", jobTitle: "Software Engineer", age: 29, email: "john.doe@example.com", department: "Engineering", salary: 85000, location: "New York" },
    { id: 2, name: "Jane Smith", jobTitle: "Product Manager", age: 35, email: "jane.smith@example.com", department: "Product", salary: 95000, location: "San Francisco" },
    { id: 3, name: "Robert Brown", jobTitle: "Data Scientist", age: 28, email: "robert.brown@example.com", department: "Engineering", salary: 88000, location: "Chicago" },
    { id: 4, name: "Emily Johnson", jobTitle: "UX Designer", age: 32, email: "emily.johnson@example.com", department: "Design", salary: 75000, location: "Los Angeles" },
    { id: 5, name: "Michael Williams", jobTitle: "HR Manager", age: 40, email: "michael.williams@example.com", department: "Human Resources", salary: 65000, location: "Miami" },
    { id: 6, name: "Sophia Davis", jobTitle: "Marketing Specialist", age: 27, email: "sophia.davis@example.com", department: "Marketing", salary: 72000, location: "Austin" },
    { id: 7, name: "David Lee", jobTitle: "Sales Executive", age: 33, email: "david.lee@example.com", department: "Sales", salary: 80000, location: "Boston" },
    { id: 8, name: "Olivia Martinez", jobTitle: "Customer Support", age: 25, email: "olivia.martinez@example.com", department: "Customer Service", salary: 52000, location: "Dallas" },
    { id: 9, name: "William Wilson", jobTitle: "Software Developer", age: 30, email: "william.wilson@example.com", department: "Engineering", salary: 90000, location: "Seattle" },
    { id: 10, name: "Ava Taylor", jobTitle: "Finance Analyst", age: 38, email: "ava.taylor@example.com", department: "Finance", salary: 105000, location: "Washington DC" }
];


const EmployeesView = () => {
  return (
    <div className="container mx-auto p-4">
    <DataTable columns={columns} data={employees} />
  </div>
  )
}

export default EmployeesView

