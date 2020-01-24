import Link from 'next/link'

function Header() {
  return <div>
    <h1>datanext</h1>
    <ul>
      <li><Link href='/'><a>Home</a></Link></li>
    </ul>
  </div>
}


export default Header