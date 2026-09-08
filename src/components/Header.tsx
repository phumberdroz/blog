import { PROFILE } from '../consts';

export function Header() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-column site-header">
        <a className="site-name" href="/">
          {PROFILE.name}
        </a>
        <nav aria-label="Main navigation">
          <a href="/">Writing</a>
          <a href="/about/">About</a>
        </nav>
      </header>
    </>
  );
}
