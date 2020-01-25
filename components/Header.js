import Link from 'next/link'

const Header = () => {
  return <div>
    <h1><Link href="/"><a>datanext</a></Link></h1>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
    </ul>
    <style jsx>{`
      a {
        color: blue;
        text-decoration: none;
      }

      a:hover {
        color: blue;
        text-decoration: underline;
      }

      h1 {
        margin: 0 0 0.5rem 0;
        padding: 0;
      }

      h1 a {
        color: black;
      }

      ul {
        display: flex;
        flex-wrap: row wrap;
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      li {
        margin-right: 1.5rem;
      }
    `}</style>
  </div>
}


export default Header