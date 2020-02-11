function Loaders({ n }) {
  const loaders = [...Array(n)].map((x, i) => i);

  return (
    <div>
      <span>Loading at most {n} results. Hang on tight...</span>
      <ul>
        {loaders.map(i => {
          return <li className="loading" key={i}></li>;
        })}
      </ul>
      <style jsx>{`
        ul {
          list-style-type: none;
          margin: 0.5rem 0 0 0;
          padding: 0;
        }

        li {
          background-color: #eee;
          height: 1.5rem;
          margin: 0.25rem;
        }
      `}</style>
    </div>
  );
}

export default Loaders;
