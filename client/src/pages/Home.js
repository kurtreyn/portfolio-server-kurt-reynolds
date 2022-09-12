import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar';
import { ipAddress } from '../shared/sharedData';
import ProjectsContainer from '../components/ProjectsContainer';
import projectsIcon from '../assets/icons/icon-web-development.png';
import logo from '../assets/images/logo.png';
import githubIcon from '../assets/icons/icon-github.png';
import linkedinIcon from '../assets/icons/icon-linkedin.png';
import '../styles/homeStyle.css';

export default function Home({ isLoggedIn }) {
  const [showProjects, setShowProjects] = useState(false);
  const [showSideBar, setShoSideBar] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://${ipAddress}/posts`);
      let data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [posts.length]);

  // console.log('posts on HOME', posts);

  const handleShowProjects = () => {
    setShowProjects(!showProjects);
  };
  return (
    <div className="home-container">
      {!showProjects && (
        <div className="home-content">
          <div className="header-section">
            <div className="left-header">
              <div className="logo-wrapper">
                <img src={logo} alt="logo" className="home-logo" />
              </div>
            </div>
            <div className="right-header">
              <div className="icon-wrapper">
                <a
                  href="https://www.linkedin.com/in/kurt-reynolds-447ab632/"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <img
                    src={linkedinIcon}
                    alt="linkedin icon"
                    className="home-icon"
                  />
                </a>
                <a
                  href="https://github.com/kurtreyn?tab=repositories"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <img
                    src={githubIcon}
                    alt="github icon"
                    className="home-icon margin-for-icon"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="body-section">
            <div className="left-body">
              <div className="left-top">
                <span className="left-top-text text-color">Welcome</span>
              </div>
              <div className="left-bottom">
                <span className="left-bottom-text text-color">
                  My name is Kurt Reynolds, and I am a full stack software
                  engineer with a focus on front-end and mobile.
                  <br />I have a passion for creating and learning and have used
                  that to develop numerous projects, including mobile apps,
                  e-commerce, back-end servers, and more.
                </span>
              </div>
            </div>
            <div className="right-body">
              <div className="right-top">
                <span className="right-top-text text-color">Projects</span>
              </div>
              <div className="right-bottom">
                <div
                  className="home-projects-icon-wrapper"
                  onClick={handleShowProjects}
                >
                  <img
                    src={projectsIcon}
                    alt="projects icon"
                    className="home-projects-icon"
                  />
                  <span className="home-projects-text text-color">
                    View Projects
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <div
              className="sidebar-block"
              onClick={() => setShoSideBar(!showSideBar)}
            ></div>
            {showSideBar && <SideBar isLoggedIn={isLoggedIn} />}
          </div>
        </div>
      )}

      {showProjects && (
        <ProjectsContainer
          showProjects={showProjects}
          setShowProjects={setShowProjects}
          posts={posts}
        />
      )}
    </div>
  );
}
