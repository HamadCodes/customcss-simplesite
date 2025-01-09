import Link from 'next/link';

export default function Contact() {
  return (
<div className="container">
      <header className="header">
        <h1>Contact Us</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </header>
      <main className="main">
        <h2>Get in Touch</h2>
        <p>Email: contact@website.com</p>
        <p>Phone: +1-234-567-8900</p>
        <p>Address: 1234 Example Lane, City, Country</p>
      </main>
      <footer className="footer">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}