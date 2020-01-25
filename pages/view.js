import { withRouter } from "next/router";
import useSWR from "swr";
import Layout from "../components/Layout.js";
import MetadataView from "../components/MetadataView.js";
import MetadataFetcher from "../lib/MetadataFetcher.js";

Package.getInitialProps = async ctx => {
  const data = await MetadataFetcher(ctx.query.id);

  return { data };
};

function Package(props) {
  const { router } = props;
  const id = router.query.id;
  const initialData = props.data;

  const { data } = useSWR(id, MetadataFetcher, { initialData });

  return (
    <Layout>
      <MetadataView data={data} />
    </Layout>
  );
}

export default withRouter(Package);
