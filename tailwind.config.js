module.exports = {
  purge: {
    mode: "all",
    content: ["./pages/_app.js"]
  },
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "250px auto"
      }
    }
  }
};
