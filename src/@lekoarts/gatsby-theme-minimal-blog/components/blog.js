/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import ListingByYear from "./listing-by-year";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";
import usePostTags from "../../../hooks/use-post-tags";
import TagsList from "./tags-list";

const Blog = ({ posts }) => {
  const tags = usePostTags();

  return (
    <Layout>
      <SEO title="Home" />
      <TagsList list={tags} />
      <ListingByYear posts={posts} sx={{ mt: [0, 5] }} />
    </Layout>
  );
};

export default Blog;
