export const LibraryCard = () => {
  return (
    <div className="system-card library-card">
      <div className="card-header">
        <img
          src="/logos/library-logo.png"
          alt="Library System"
          className="system-logo"
        />
        <h2>Library System</h2>
      </div>

      <div className="card-content">
        <button className="access-button">Enter Library</button>
        <div className="quick-links">
          <a href="#">Search Catalog</a>
          <a href="#">My Loans</a>
          <a href="#">Reservations</a>
        </div>
      </div>

      <div className="card-footer">
        <span className="last-sync">Synced 2 min ago</span>
      </div>
    </div>
  );
};
