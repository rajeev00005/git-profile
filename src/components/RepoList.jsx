import React from 'react';

function RepoList({ repos }) {
  return (
    <div className="mt-4">
      <h4 className="text-center mb-3">Repositories</h4>
      {repos.length === 0 ? (
        <p className="text-center text-muted">No repositories found.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-3">
          {repos.map((repo) => (
            <div key={repo.id} className="col">
              <div className="border rounded p-3 h-100">
                <h5 className="mb-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark"
                  >
                    {repo.name}
                  </a>
                </h5>
                <p className="mb-1 text-muted small">{repo.description || 'No description'}</p>
                <div className="small text-muted">
                  ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RepoList;
