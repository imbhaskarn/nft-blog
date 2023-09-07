import React, { useState, useEffect } from 'react'
import ReactHtmlParser from "react-html-parser";
import axios from "node_modules/axios";
import { useRouter } from "node_modules/next/router";
import CardComponent from "./Card";

const Main = () => {
  const router = useRouter();
  const { page }: any = router.query;
  const isBlogPage = router.pathname.includes("/blog/");
  const [allPosts, setAllPosts] = useState({ posts: [], total: 0 });
  const url = "/api/posts";
  const params = {
    page: page || 1,
  };

  useEffect(() => {
    // Use useEffect to fetch data when the component mounts
    axios
      .get(url, { params })
      .then((result) => {
        // Update allPosts with the received data including 'total'
        setAllPosts({ posts: result.data.posts, total: result.data.total });
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page]); // Make sure to include any dependencies in the array if needed
  const noOfPages = Math.floor(allPosts.total / 10);
  return (
    <main className="h-auto w-full flex flex-col bg-slate-50 justify-center items-center py-16 px-4 flex-grow">
      <div className="relative m-auto flex w-11/12 h-11/12 sm:w-8/12 md:w-8/12 justify-center text-center flex-wrap p-8 gap-4 bg-gray-200 rounded-md">
        {allPosts.posts.map((blog: any) => {
          return (
            <div
              className="text-gray-900 flex-grow flex justify-center"
              key={blog.id}
            >
              <CardComponent
                title={blog.title}
                imageSrc={blog.cover || "/images/nftguy.jpg"}
                content={ReactHtmlParser(blog.content).slice(0, 300)}
                id={blog.id}
              />
            </div>
          );
        })}
      </div>
      <div className="p-4">
        <nav aria-label="Page navigation example">
          <ul className="flex items-center -space-x-px h-10 text-base">
            <li>
              <a
                href={`/?page=${Math.max(parseInt(params.page) - 1, 1)}`}
                className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700  "
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight  border border-blue-500 hover:bg-gray-100 hover:text-gray-700  bg-blue-500 text-white"
              >
                {params.page}
              </a>
            </li>
            <li>
              <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ">
                ...
              </span>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
              >
                {noOfPages}
              </a>
            </li>
            <li>
              <a
                href={`/?page=${Math.min(
                  parseInt(params.page) + 1,
                  noOfPages
                )}`}
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700  "
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default Main;
