import React from 'react';
import AlgorithmContainer from '../components/AlgorithmContainer';
import logo from '../assets/images/logo.png';
import githubIcon from '../assets/icons/icon-github.png';
import linkedinIcon from '../assets/icons/icon-linkedin.png';
import '../styles/algorithmsStyle.css';

export default function Algorithms() {
  return (
    <div className="algorithms-content">
      <div className="algorithms-header-section">
        <div className="algorithms-left-header">
          <div className="algorithms-logo-wrapper">
            <a href="/">
              <img src={logo} alt="logo" className="algorithms-logo" />
            </a>
          </div>
        </div>
        <div className="algorithms-right-header">
          <div className="algorithms-icon-wrapper">
            <a
              href="https://www.linkedin.com/in/kurt-reynolds-447ab632/"
              target={'_blank'}
              rel="noreferrer"
            >
              <img
                src={linkedinIcon}
                alt="linkedin icon"
                className="algorithms-icon"
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
                className="algorithms-icon algorithms-margin-for-icon"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="algorithms-body">
        <AlgorithmContainer />
      </div>
    </div>
  );
}
