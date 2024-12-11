import { ColumnDef } from "@tanstack/react-table";
import { EmployeeType } from "@/api/posts/types";
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button";

export const columns :ColumnDef<EmployeeType>[] = [
    {
        accessorKey: "no",
        header: () => <div className="text-center">No</div>,
        cell: ({ table, row }) => {
            const sortedIndex =
              table.getSortedRowModel().rows.findIndex((r) => r.id === row.id) + 1;
      
            return <div className="text-center">{sortedIndex}.</div>;
          },
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "jobTitle",
        header: "Job Title",
    },
    {
        accessorKey: "age",
        header: "Age",
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Email
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
    },
    {
        accessorKey: "department",
        header: "Department",
    },
    {
        accessorKey: "salary",
        header: "Salary",
    },
    {
        accessorKey: "location",
        header: "Location",
    },
]