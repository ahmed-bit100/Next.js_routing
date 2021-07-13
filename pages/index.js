import Link from 'next/link';
import {useRouter} from 'next/router';

function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log('redirecting to products...');
    router.push('/product');
  };
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Product</a>
      </Link>
      <button onClick={handleClick}>view products</button>
    </div>
  );
}

export default Home;
