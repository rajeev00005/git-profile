import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserProfile from "./UserProfile";
import RepoList from "./RepoList";
 

function Profile() {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");


useEffect(() => {
  if (!username) return;

  const fetchData = async () => {
    try {
      const userRes = await axios.get(`https://api.github.com/users/${username}`);
      const reposRes = await axios.get(`https://api.github.com/users/${username}/repos`);
      setUserData(userRes.data);
      console.log(userRes.data);
      setRepos(reposRes.data);
      console.log(userRes.data);
      setError("");
    } catch (error) {
      setUserData(null);
      setRepos([]);
      setError("User not found or API error.");
    }
  };

  fetchData();
}, [username]);


  return (
    <div>
      {error && (
        <div className="alert alert-danger mt-4 text-center">
          {error}
        </div>
      )}

      {userData && <UserProfile user={userData} />}

      {repos.length > 0 && <RepoList repos={repos} />}

      {repos.length === 0 && userData && !error && (
        <div className="alert alert-info mt-4 text-center">
          No repositories found for this user.
        </div>
      )}
    </div>
  );
}

export default Profile;
