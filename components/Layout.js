import Header from '../components/Header.js'

const Layout = (props) => {
  return (
    <div id="app">
      <Header />
      { props.children }
      <style jsx>{`
        #app {
          font: 16px sans-serif;
        }
      `}</style>
    </div>
  )
}

export default Layout