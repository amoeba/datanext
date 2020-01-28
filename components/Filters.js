const Filters = props => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a search term..."
        onBlur={props.handleChange}
      />
      <style jsx>{`
        input {
          font-size: 100%;
          width: 100%;
          box-sizing: border-box;
          border-radius: 3px;
          border: 1px solid #ccc;
          padding: 0.25rem;
        }
      `}</style>
    </div>
  );
};

export default Filters;
