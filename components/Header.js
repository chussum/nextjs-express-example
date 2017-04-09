import Link from 'next/link'

const linkStyle = {
    marginRight: '1rem'
}

const Header = () => {
    return (
        <div>
            <Link href="/"><a style={linkStyle}>Home</a></Link>
            <Link href="/about"><a style={linkStyle}>About</a></Link>
            <Link href="/search?keyword=test"><a style={linkStyle}>Search</a></Link>
            <Link prefetch href="/post/list"><a style={linkStyle}>SSR</a></Link>
        </div>
    )
}

export default Header
