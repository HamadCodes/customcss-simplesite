import Link from 'next/link';

export default function Services() {
  return (
    <div className="container">
      <header className="header">
        <h1>Our Services</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </header>
      <main className="main">
        <h2>What We Offer</h2>
        <ul>
          <li>Web Development</li>
          <li>SEO Optimization</li>
          <li>Content Creation</li>
        </ul>
      </main>
      <footer className="footer">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}