import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPage = () => {
  const router = useRouter();
  const { id }: any = router.query;

  const [blog, setBlog]: any = useState({});

  useEffect(() => {
    if (!id || isNaN(id)) {
      return;
    }

    axios
      .get(`/api/blog/`, { params: { id } })
      .then((result) => {
        setBlog(result.data.post[0]);
      })
      .catch((err) => {
        // Handle errors here
        console.error(err);
      });
  }, [id]);

  if (!id || isNaN(id)) {
    return <div>Invalid blog ID</div>;
  }
  console.log(blog, "blog");
  return (
    <>
      <Header />{" "}
      <div className="w-full flex justify-center items-center bg-white py-8">
        <div className="w-11/12 sm:w-3/6 p-4 sm:p-4 bg-slate-50 rounded-lg">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-800 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14 text-center p-4">
            {blog.title}
          </h1>
          <div className="flex justify-center py-8">
            <img
              src={blog.cover || "/images/nftguy.jpg"}
              alt={`Cover for ${blog.title}`}
            />
          </div>

          <p className="text-gray-600 text-justify">
            {ReactHtmlParser(blog.content)}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
