import { ColumnDef } from "@tanstack/react-table";
import { PostType } from "@/api/posts/types";

export const columns:ColumnDef<PostType>[] = [
    {
        accessorKey: "userId",
        header: "UserId",
      },
      {
        accessorKey:"id",
        header:"ID"
      },
      {
        accessorKey:"title",
        header:"Title"
      },
      {
        accessorKey:"body",
        header:"Body"
      }
]
