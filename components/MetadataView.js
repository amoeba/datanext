const MetadataView = props => {
  return (
    <div>
      <h2>{props.doc.title}</h2>
      <p>Abstract: {props.doc.abstract || "No abstract"}</p>
    </div>
  );
};

export default MetadataView;
