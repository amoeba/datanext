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
    </div>
  );
}

export default Loaders;
