/** @jsx jsx */
import React from "react";
import { jsx, Link as TLink } from "theme-ui";
import { Box } from "@theme-ui/components";
import { Link } from "gatsby";
import ItemTags from "./item-tags";

const BlogListItem = ({ post, showTags = true }) => (
  <Box mb={4}>
    <TLink
      as={Link}
      to={post.slug}
      sx={{ fontSize: [2, 3, 4], color: `text`, fontWeight: 900 }}
    >
      {post.title}
    </TLink>
    {post.description && <p sx={{ fontSize: [1, 1, 2] }}>{post.description}</p>}
    <p
      sx={{
        color: `secondary`,
        mt: 1,
        a: { color: `secondary` },
        fontSize: [1, 1, 2],
      }}
    >
      <time>{post.date}</time>
      {post.tags && showTags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
    </p>
  </Box>
);

export default BlogListItem;
