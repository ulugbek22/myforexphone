/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import ListingByYear from "./listing-by-year";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";
import usePostTags from "../../../hooks/use-post-tags";
import TagsList from "./tags-list";

const Tag = ({ posts, pageContext }) => {
  const tags = usePostTags();

  return (
    <Layout>
      <SEO title={`Tag: ${pageContext.name}`} />
      <TagsList list={tags} />
      <ListingByYear posts={posts} sx={{ mt: [0, 0] }} />
    </Layout>
  );
};

export default Tag;
