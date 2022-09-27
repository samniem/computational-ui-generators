import Link from 'next/link'

function Navigation() {
    return <div>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/generate-ui">Generate UI</Link>
            </li>
        </ul>
    </div>
}

export default Navigation