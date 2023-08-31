import { useRouter } from "next/router";
import data from "../../../data/data.json";
import Layout from "@/components/Layout";
const BlogPage = () => {
  const router = useRouter();
  const { id }: any = router.query;
  if (isNaN(id)) {
    return <div>Invalid blog ID</div>;
  }

  const blog = data.blogs[parseInt(id) - 1];

  if (!blog) {
    return (
      <Layout>
        <div>Blog not found</div>;
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="w-full flex justify-center items-center bg-white py-8">
        <div className=" w-11/12 sm:w-3/6  p-4 sm:p-4 bg-slate-50 rounded-lg">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14 text-center p-4">
            <div className="text-gray-700">{blog.title}</div>
          </h1>
          <div className="flex justify-center py-8">
            <img src={blog.cover} alt={`Cover for ${blog.title}`} />
          </div>

          <p className="text-gray-600 text-justify">{blog.content}</p>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
