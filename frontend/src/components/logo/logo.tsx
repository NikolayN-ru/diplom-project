import Image from 'next/image';
import Link from 'next/link';

const Logo = () => <Link href="/"><a><Image src="/logo.png" alt="Logo" width="157" height="94" /></a></Link>

 export default Logo;