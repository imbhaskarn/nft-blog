import { useRouter } from "node_modules/next/router";
import { useEffect, useState } from "react";
import axios from "node_modules/axios";
import ReactHtmlParser from "react-html-parser";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPage = () => {
  const router = useRouter();
  const { id }: any = router.query;
  if (!id || isNaN(id)) {
    return <div>Invalid blog ID</div>;
  }
  const [blog, setBlog]: any = useState({ total: 0, post: {} });
  if (!id || isNaN(id)) {
    return;
  }
  console.log(blog.post.total);
  useEffect(() => {
    axios
      .get(`/api/blog/`, { params: { id } })
      .then((result) => {
        console.log(result.data);
        setBlog({ total: result.data.total, post: result.data.post[0] });
      })
      .catch((err) => {
        // Handle errors here
        console.error(err);
      });
  }, [id]);
  console.log(blog.post.total);
  return (
    <>
      <Header />{" "}
      <div className="w-full flex justify-center items-center bg-white py-8 flex-col">
        <div className="w-11/12 sm:w-3/6 p-4 sm:p-4 bg-slate-50 rounded-lg">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-800 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14 text-center p-4">
            {blog.post.title}
          </h1>
          <div className="flex justify-center py-8">
            <img
              src={blog.post.cover || "/images/nftguy.jpg"}
              alt={`Cover for ${blog.title}`}
            />
          </div>

          <p className="text-gray-600 text-justify">
            {ReactHtmlParser(blog.post.content)}
          </p>
        </div>

        <div className="w-11/12 sm:w-3/6 p-4 sm:p-4 bg-slate-50 rounded-lg">
          <nav aria-label="Page navigation example ">
            <ul className="flex items-center -space-x-px h-10 text-base justify-between">
              <li>
                <a
                  href={`/blog/${Math.max(parseInt(id) - 1, 1)}`}
                  className="flex items-center justify-center px-4 h-10 ml-0 leading-tight w-24 text-gray-100 bg-indigo-600 border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700  "
                >
                  <span className="">Previous</span>
                </a>
              </li>

              <li>
                <a
                  href={`/blog/${Math.min(parseInt(id) + 1, blog.total)}`}
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-100 w-24 bg-indigo-600 border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700  "
                >
                  <span className="">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
