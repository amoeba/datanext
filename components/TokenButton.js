import TokenContext from "../shared/token-context";

function TokenButton() {
  return (
    <TokenContext.Consumer>
      {({ updateToken }) => (
        <button
          onClick={() => {
            console.log("updateToken");
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
