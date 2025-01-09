import Link from 'next/link';

export default function Blog() {
  return (
    <div className="container">
      <header className="header">
        <h1>Our Blog</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/services">Services</Link>
        </nav>
      </header>
      <main className="main">
        <h2>Latest Articles</h2>
        <article className="blog-post">
          <h3>Post Title 1</h3>
          <p>A brief summary of the blog post goes here...</p>
        </article>
        <article className="blog-post">
          <h3>Post Title 2</h3>
          <p>A brief summary of another blog post goes here...</p>
        </article>
      </main>
      <footer className="footer">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}