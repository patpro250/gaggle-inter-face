export const InstitutionCard = () => {
  return (
    <div className="system-card institution-card">
      <div className="card-header">
        <img
          src="/logos/institution-logo.png"
          alt="Institution System"
          className="system-logo"
        />
        <h2>Institution System</h2>
      </div>

      <div className="card-content">
        <button className="access-button">Enter Institution</button>
        <div className="quick-links">
          <a href="#">Courses</a>
          <a href="#">Grades</a>
          <a href="#">Announcements</a>
        </div>
      </div>

      <div className="card-footer">
        <span className="last-sync">Synced 1 min ago</span>
      </div>
    </div>
  );
};
