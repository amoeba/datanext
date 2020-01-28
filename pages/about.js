import Layout from "../components/Layout.js";

const About = function() {
  return (
    <Layout>
      <p>
        datanext is an experiment to learn{" "}
        <a href="https://nextjs.org">Next.js</a> and{" "}
        <a href="https://swr.now.sh">SWR</a>. See more at the{" "}
        <a href="https://github.com/amoeba/datanext">GitHub repo</a>.
      </p>
    </Layout>
  );
};

export default About;
