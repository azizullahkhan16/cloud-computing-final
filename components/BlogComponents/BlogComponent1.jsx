import { Row } from "antd";
import CustomCard from "./CustomCard";
import blogs from "./blogs";

const BlogComponent1 = () => {
  return (
    <section className="my-16 faq mb-12 lg:mb-20 lg:mt-28 sm:mt-10">
      <Row justify="left" gutter={[32, 32]} className="max-md:px-8">
        {blogs.map((blog, index) => (
          <CustomCard
            key={index}
            image={blog.image}
            heading={blog.heading}
            publicationDate={blog.publicationDate}
            blogSlug={blog.slug}
          />
        ))}
      </Row>
    </section>
  );
};

export default BlogComponent1;
