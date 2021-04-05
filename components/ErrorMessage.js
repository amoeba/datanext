export default function Error({ error }) {
  console.log("Error is", error)

  return <div className="error">
    <div className="error-header">
      Error {error.status || ""}
    </div>
    <div className="error-body">
      <div dangerouslySetInnerHTML={{ __html: error.info }} />
    </div>
  </div>
}