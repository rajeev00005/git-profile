import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      navigate(`/profile/${username.trim()}`);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form
            className="input-group shadow-lg"
            onSubmit={handleSubmit}
            style={{ borderRadius: '0.75rem', overflow: 'hidden' }}
          >
            <input
              type="text"
              className="form-control border-end-0"
              placeholder="🔍 Enter GitHub username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                padding: '12px',
                fontSize: '16px',
                borderTopLeftRadius: '0.75rem',
                borderBottomLeftRadius: '0.75rem',
              }}
            />
            <button
              className="btn btn-primary px-4"
              type="submit"
              style={{
                fontWeight: 'bold',
                borderTopRightRadius: '0.75rem',
                borderBottomRightRadius: '0.75rem',
              }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
