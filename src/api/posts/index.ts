import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios from "axios";
import { PostType } from "./types";

export const getAllPosts = {
  useQuery: (
    opt?: Omit<UseQueryOptions<PostType[], Error, PostType[], QueryKey>, "queryKey" | "queryFn">
  ) =>
    useQuery<PostType[], Error, PostType[], QueryKey>(
      ["getAllPosts"], 
      async () => {
        const response = await axios.get<PostType[]>(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (response.status !== 200) {
          throw new Error("Failed to fetch employees");
        }
        console.log("original fetch .....", response.data)
        return response.data; 
      },
      
      {
        ...opt, 
      }
      
    ),
};
