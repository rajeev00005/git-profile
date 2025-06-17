import React from 'react';

function UserProfile({ user }) {
  return (
    <div className="card mb-4 shadow-lg border-0">
      <div className="card-body text-center">
        <img
          src={user.avatar_url}
          alt="avatar"
          className="rounded-circle border"
          width="140"
          height="140"
        />
        <h3 className="mt-3 mb-0">{user.name || user.login}</h3>
        <p className="text-muted">@{user.login}</p>
        <p className="mt-2">{user.bio || '🚫 No bio available'}</p>

        <div className="d-flex justify-content-center gap-4 mt-3">
          <div>
            <h6 className="mb-0">👥 Followers</h6>
            <strong>{user.followers}</strong>
          </div>
          <div>
            <h6 className="mb-0">🔁 Following</h6>
            <strong>{user.following}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
