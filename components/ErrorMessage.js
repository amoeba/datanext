export default function Error({ data, error }) {
  return <div className="error">

    <div className="error-header">
      {error.name}
    </div>
    <div className="error-body">
      {error.message}
    </div>
  </div>
}
