// app/Blogs/[slug]/page.jsx
import { blogs } from "../../../utils/blogs"; // Adjust the path to blogs.js

export default function BlogDetail({ params }) {
  const { slug } = params;

  const blog = blogs[slug];

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div className="container mx-auto my-6 px-4">
      <h1 className="text-4xl font-bold my-6">{blog.title}</h1>
      <div className="prose prose-lg">{blog.content}</div>
    </div>
  );
}
