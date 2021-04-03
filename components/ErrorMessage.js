export default function Error({ error }) {
  return <div className="error">
    <div className="error-header">
      Error {error.status}
    </div>
    <div className="error-body">
      <div dangerouslySetInnerHTML={{ __html: error.info }} />
    </div>
  </div>
}