import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "motion/react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

import BlogCard from "./BlogCard";

import { BlogType } from "../types";

const Blogs = () => {
  const [data, setData] = useState<BlogType[]>([]);

  const QUERY = `query { publication(host: "n4ryn.hashnode.dev") { posts(first: 3) { edges { node { title url brief publishedAt } } } } }`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  const fetchBlogs = async () => {
    try {
      const response = await axios.post(
        "https://gql.hashnode.com/",
        { query: QUERY, variables: { page: 0 } },
        { headers: { "Content-Type": "application/json" } }
      );

      setData(response.data?.data?.publication?.posts?.edges ?? []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <motion.section
      className="mb-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className="font-semibold italic text-xl text-text-primary mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Recent Writing
      </motion.h2>

      <motion.div variants={containerVariants}>
        {data.length > 0 &&
          data.map((post, index) => (
            <BlogCard post={post} key={post.node.url} index={index} />
          ))}

        {data.length === 0 && (
          <p className="mt-4 mb-6 text-sm font-light text-text-primary">
            <span className="font-semibold">Oops!</span> We couldn’t find any
            posts at the moment.
            <br />
            The API might be down.
            <br />
            Try clicking <span className="font-semibold">Load More</span> to
            refresh, or try again later.
          </p>
        )}
      </motion.div>

      <motion.a
        href="https://n4ryn.hashnode.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary text-xs flex justify-center items-center gap-2 w-36"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={contentVariants}
      >
        Load More
        <LiaLongArrowAltRightSolid className="h-4 w-4" />
      </motion.a>
    </motion.section>
  );
};

export default Blogs;
