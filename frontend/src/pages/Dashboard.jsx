import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./dashboard.css";

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="frameshift">Welcome, {userEmail || "Loading..."}</h1>
        <p className="subtitle">Learn and improve your ASL skills!</p>
      </div>

      <div className="dashboard-content">
        <div className="card">
          <h2>Getting Started with ASL</h2>
          <iframe 
            width="100%" 
            height="215" 
            src="https://www.youtube.com/watch?v=6w1ZDaE-whc" 
            title="Learn ASL Alphabet" 
            frameBorder="0" 
            allowFullScreen
          ></iframe>
        </div>

        <div className="card">
          <h2>More ASL Phrases</h2>
          <iframe 
            width="100%" 
            height="215" 
            src="https://www.youtube.com/watch?v=0FcwzMq4iWg&pp=ygUSMjUgYmFzaWMgYXNsIHNpZ25z" 
            title="25 Basic ASL Phrases" 
            frameBorder="0" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
