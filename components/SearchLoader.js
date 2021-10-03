export default function SearchLoader() {
  return <div>Loading<span className="pulse">...</span>
    <style jsx>{`
      div {
        display: flex;
        align-items: center;
        height: 75vh;
        justify-content: center;
      }
      `}
    </style>
  </div>
}
