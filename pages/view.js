import { withRouter } from "next/router";
import Layout from "../components/Layout.js";
import MetadataView from "../components/MetadataView.js";

const Package = props => {
  const { router } = props;
  const id = router.query.id;

  return (
    <Layout>
      <MetadataView id={id} />
    </Layout>
  );
};

export default withRouter(Package);
