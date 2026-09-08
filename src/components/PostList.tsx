export type Post = {
  id: string;
  data: { title: string; description: string; pubDate: Date };
};

export function PostList({ posts }: { posts: Post[] }) {
  if (!posts.length)
    return <p className="empty-posts">The first essay is on its way. Check back soon.</p>;
  return (
    <div data-post-search>
      <div className="post-search" hidden>
        <label className="sr-only" htmlFor="post-search-input">
          Search posts
        </label>
        <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="m13 13 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <input
          id="post-search-input"
          type="search"
          placeholder="Search posts…"
          autoComplete="off"
          aria-controls="post-results"
        />
        <button type="button" className="search-clear" hidden>
          Clear
        </button>
      </div>
      <p className="search-status" role="status" aria-live="polite" aria-atomic="true"></p>
      <ol id="post-results" className="post-list">
        {posts.map((post) => (
          <li key={post.id} data-search-text={`${post.data.title} ${post.data.description}`}>
            <a href={`/blog/${post.id}/`} className="post-link">
              <div>
                <h2>{post.data.title}</h2>
              </div>
              <time dateTime={post.data.pubDate.toISOString()}>
                {post.data.pubDate.toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                  timeZone: 'UTC',
                })}
              </time>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
