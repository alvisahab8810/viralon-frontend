// pages/blog/[blogId].js
import { useRouter } from "next/router";
import BlogComponent from "../../components/BlogComponent";

const BlogDetails = () => {
  const router = useRouter();
  const { blogId } = router.query;

  if (!blogId) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <BlogComponent blogId={blogId} />
    </div>
  );
};

export default BlogDetails;
