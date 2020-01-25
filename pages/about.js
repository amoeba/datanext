import { withRouter } from "next/router";
import useSWR from "swr";
import fetch from "unfetch";

const fetcher = function(key) {
  const url =
    "https://search-stage.test.dataone.org" +
    "/cn/v2/" +
    "query/solr/" +
    "?q=id:" +
    '"' +
    key +
    '"' +
    "&wt=json";

  return fetch(url).then(r => r.json());
};

About.getInitialProps = async ctx => {
  const data = await fetcher(ctx.query.id);
  return { data };
};

function About(props) {
  const { router } = props;
  const id = router.query.id;
  const initialData = props.data;

  const { data } = useSWR(id, fetcher, { initialData });

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>id is {id}</div>
      <div>JSON: {JSON.stringify(data)}</div>
    </div>
  );
}

export default withRouter(About);
