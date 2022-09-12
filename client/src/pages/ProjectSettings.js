import React, { useState } from 'react';
import { ipAddress } from '../shared/sharedData';
import '../styles/projectSettingsStyle.css';

export default function ProjectSettings() {
  const [loading, setLoading] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [pageUrl, setPageUrl] = useState('');
  const [codeUrl, setCodeUrl] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const resetFields = () => {
    setProjectName('');
    setPageUrl('');
    setCodeUrl('');
    setDescription('');
    setImage('');
    setLoading(false);
  };

  const handlePost = async () => {
    const bearer = 'Bearer ' + localStorage.getItem('token');
    const theHeaders = new Headers();
    theHeaders.append('Authorization', bearer);
    theHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      title: projectName,
      pageUrl: pageUrl,
      codeUrl: codeUrl,
      description: description,
      image: image,
    });

    const requestOptions = {
      method: 'POST',
      headers: theHeaders,
      body: raw,
      redirect: 'follow',
    };
    setLoading(true);
    try {
      const response = await fetch(
        `https://${ipAddress}/posts`,
        requestOptions
      );
      if (response.status === 200) {
        alert('Post created successfully');
        resetFields();
      } else {
        alert(response.statusText);
      }
    } catch (errors) {
      console.log(errors);
      alert(errors.message);
    }
  };

  return (
    <div className="project-settings-container">
      <div className="project-settings-header">
        <h1 className="project-settings-header-text">Project Settings</h1>
      </div>
      <div className="project-settings-inner-container">
        <div className="project-settings-body">
          <form action="" className="project-settings-form">
            <input
              type="text"
              placeholder="project name"
              className="project-settings-input"
              onChange={(e) => setProjectName(e.target.value)}
            />

            <input
              type="text"
              placeholder="page url"
              className="project-settings-input"
              onChange={(e) => setPageUrl(e.target.value)}
            />
            <input
              type="text"
              placeholder="code url"
              className="project-settings-input"
              onChange={(e) => setCodeUrl(e.target.value)}
            />
            <textarea
              type="text"
              placeholder="project description"
              className="project-settings-input"
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              type="text"
              placeholder="image url"
              className="project-settings-input"
              onChange={(e) => setImage(e.target.value)}
            />

            {/* <input
              type="file"
              id="file"
              placeholder="upload image"
              className="project-settings-file-selector"
            />
            <label htmlFor="file">Select Image</label> */}
          </form>
          <div className="project-settings-button-wrapper">
            <button
              className="project-settings-button"
              disabled={loading}
              onClick={handlePost}
            >
              <span className="project-settings-button-text">Submit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
