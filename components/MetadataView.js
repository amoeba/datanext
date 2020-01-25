function MetadataView(props) {
  const document = props.data.response.docs[0];

  return (
    <div>
      <h2>{document.title || document.identifier}</h2>
      <p>Abstract: {document.abstract || "No abstract"}</p>
    </div>
  );
}

export default MetadataView;
