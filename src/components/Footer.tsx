import { PROFILE } from '../consts';

export function Footer() {
  return (
    <footer className="site-column site-footer">
      <nav aria-label="Footer navigation">
        <a href="/about/">About</a>
        <a href={`mailto:${PROFILE.email}`}>Email</a>
        <a href="/rss.xml">RSS</a>
      </nav>
    </footer>
  );
}
