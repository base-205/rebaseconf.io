import Link from 'next/link'
import Footer from './footer.js';


export default () =>
  <div>
    Click{' '}
    <Link href="/footer">
      <a>here</a>
    </Link>{' '}
    for the footer
  </div>
