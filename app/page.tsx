import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to My Website</h1>
        <nav>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </header>
      <main className="main">
        <h2>Discover Amazing Content</h2>
        <p>This is the home page. Explore more using the navigation links above.</p>
        <section className="highlight">
          <h3>Featured</h3>
          <p>Check out our latest updates and services designed to help you succeed.</p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}