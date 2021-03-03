/** @jsx jsx */
import { jsx } from "theme-ui";
import { getItemYear, getYears } from "../../../utils/getYearStuff";
import BlogListItem from "./blog-list-item";

const YearSection = ({ year, children }) => {
  const style = {
    opacity: 0.8,
    fontWeight: "700",
    mt: [3, 4, 5],
    mb: 3,
  };

  return (
    <section>
      <h3 sx={style}>{year}</h3>
      <div>{children}</div>
    </section>
  );
};

const ListingByYear = ({ posts, className, showTags = true }) => {
  const yearsArray = getYears(posts);

  return (
    <div sx={{ mb: [5, 6, 7] }} className={className}>
      {yearsArray.map((year) => {
        return (
          <YearSection key={year} year={year}>
            <div>
              {posts.map((post) => {
                if (getItemYear(post) === year) {
                  return (
                    <BlogListItem
                      key={post.slug}
                      post={post}
                      showTags={showTags}
                    />
                  );
                }
                return undefined;
              })}
            </div>
          </YearSection>
        );
      })}
    </div>
  );
};

export default ListingByYear;
