function Input() {
  const { what, handler, label, after, ...rest } = this.props;

  return (
    <div>
      <label>{label}</label>
      <input
        {...rest}
        onChange={e => {
          handler(what, e.target.value);
        }}
      />
      {after}
    </div>
  );
}

export default Input;
