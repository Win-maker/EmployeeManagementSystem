import { DataTable } from "@/common/data-table"
import { columns } from "./columns"; 
// import api from "@/api";
import { PostType } from "@/api/posts/types";
const posts: PostType[] = [
    { userId: 5, id: 1, title: "Post Title 1", body: "This is the body of post 1. It contains some text for the post content." },
    { userId: 2, id: 2, title: "Post Title 2", body: "This is the body of post 2. It contains some text for the post content." },
    { userId: 2, id: 3, title: "Post Title 3", body: "This is the body of post 3. It contains some text for the post content." },
    { userId: 4, id: 4, title: "Post Title 4", body: "This is the body of post 4. It contains some text for the post content." },
    { userId: 5, id: 5, title: "Post Title 5", body: "This is the body of post 5. It contains some text for the post content." },
    { userId: 5, id: 6, title: "Post Title 6", body: "This is the body of post 6. It contains some text for the post content." },
    { userId: 2, id: 7, title: "Post Title 7", body: "This is the body of post 7. It contains some text for the post content." },
    { userId: 4, id: 8, title: "Post Title 8", body: "This is the body of post 8. It contains some text for the post content." },
    { userId: 3, id: 9, title: "Post Title 9", body: "This is the body of post 9. It contains some text for the post content." },
    { userId: 3, id: 10, title: "Post Title 10", body: "This is the body of post 10. It contains some text for the post content." }
];


const PostsView = () => {
    // const {data = []} = api.posts.getAllPosts.useQuery()
    // console.log("here is fetch data ....", data);
  return (
    <>
     <div className="container mx-auto p-4">
      <DataTable columns={columns} data={posts} />
    </div>
    </>
  )
}

export default PostsView