import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";

import CardComponent from "./Card";
import axios, { all } from "axios";
import { useRouter } from "next/router";
const Main = () => {
  const router = useRouter();
  const { page } = router.query;
  const isBlogPage = router.pathname.includes("/blog/");
  const [allPosts, setAllPosts] = useState([]);
  const url = "http://localhost:5000/api/posts";
  const params: any = {
    page: page || 1,
  };
  axios
    .get(url, { params })
    .then((result) => {
      setAllPosts(result.data.posts);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      <main className="h-auto w-full bg-slate-50 flex justify-center items-center py-24 px-4 flex-grow">
        <div className="relative m-auto flex  w-11/12 h-11/12  sm:w-8/12 md:w-8/12 justify-center text-center  flex-wrap p-4 gap-8">
          {allPosts.map(
            (blog: { title: any; cover: any; content: any; id: any }) => {
              return (
                <div className=" text-gray-900 flex-grow flex justify-center">
                  {" "}
                  <CardComponent
                    title={blog.title}
                    imageSrc={blog.cover || "/images/nftguy.jpg"}
                    content={ReactHtmlParser(blog.content).slice(0, 300)}
                    id={blog.id}
                  />
                </div>
              );
            }
          )}
        </div>
      </main>
    </>
  );
};

export default Main;
