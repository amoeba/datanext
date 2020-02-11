import TokenContext from "../shared/TokenContext";

function TokenButton() {
  return (
    <TokenContext.Consumer>
      {({ updateToken }) => (
        <button
          onClick={() => {
            updateToken("asdf");
          }}
        >
          Refresh Token
        </button>
      )}
    </TokenContext.Consumer>
  );
}

export default TokenButton;
