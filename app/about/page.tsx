import Link from 'next/link';

export default function About() {
  return (
    <div className="container">
      <header className="header">
        <h1>About Us</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </header>
      <main className="main">
        <h2>Who We Are</h2>
        <p>Our website aims to provide high-quality content and services to our visitors. Our team is dedicated to making your experience seamless.</p>
      </main>
      <footer className="footer">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
