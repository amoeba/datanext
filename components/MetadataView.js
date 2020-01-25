const MetadataView = props => {
  return (
    <div>
      <div>
        <strong>Title:</strong> {props.doc.title}
      </div>
      <p>{props.doc.abstract || "No abstract"}</p>
    </div>
  );
};

export default MetadataView;
