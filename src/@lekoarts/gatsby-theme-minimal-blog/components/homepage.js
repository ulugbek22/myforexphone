/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import useMinimalBlogConfig from "../../../hooks/use-minimal-blog-config";
import useSiteMetadata from "../../../hooks/use-site-metadata";
import Blog from "./blog";

const Homepage = ({ posts }) => {
  return (
    <Layout>
      <Blog />
    </Layout>
  );
};
