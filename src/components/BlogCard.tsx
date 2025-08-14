import { motion } from "motion/react";

import { BlogType } from "../types";

const BlogCard = ({ post, index }: { post: BlogType; index: number }) => {
  const formattedDate = new Date(post.node.publishedAt).toLocaleDateString(
    "en-US",
    { month: "short", day: "numeric", year: "numeric" }
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
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

  const briefVariants = (index: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 + 0.3 },
    },
  });

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={contentVariants}
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <a
          className="text-md font-semibold text-text-primary hover:cursor-pointer hover:underline"
          href={post.node.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {post.node.title}
        </a>
        <p className="mt-0 text-xs font-normal text-text-secondary">
          Published on {formattedDate}
        </p>
      </motion.div>

      <motion.p
        className="mt-4 text-xs font-light text-text-primary line line-clamp-1"
        variants={briefVariants(index)}
      >
        {post.node.brief}
      </motion.p>

      <motion.div
        className="h-[1px] w-full bg-[#14eba3] mt-4 mb-6"
        variants={briefVariants(index)}
      />
    </motion.div>
  );
};

export default BlogCard;
