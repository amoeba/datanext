export default function DebugBox({ title, children }) {
  return <div className="debug-box">
    <div className="debug-box-header">{title || "No Title"}</div>
    <div className="debug-box-body">{children}</div>
  </div>
}