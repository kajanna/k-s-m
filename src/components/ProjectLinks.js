import React from 'react';

import OnHoverScale from '../shered/OnHoverScale';
import { ReactComponent as GitHub } from '../assets/my_github.svg'
import { ReactComponent as OpenInBrowser } from '../assets/openInBrowser.svg'

import './ProjectLinks.css';

function ProjectLinks(props) {
  const { feLink, beLink, pageLink } = props;
  return (
    <div className="project-links">
      <OnHoverScale>
        <div className="project-links__item">
          <a href={feLink} 
            target="_blank"
            rel="noreferrer">
            <GitHub />
          </a>
        </div>
      </OnHoverScale>
      {beLink && (
        <OnHoverScale>
          <div className="project-links__item">
            <a href={beLink} 
            target="_blank"
            rel="noreferrer">
              <GitHub />
            </a>
          </div>
        </OnHoverScale>
      )}
      { pageLink && <OnHoverScale>
        <div className="project-links__item">
          <a href={pageLink} 
          target="_blank"
          rel="noreferrer">
            <OpenInBrowser />
          </a>
        </div>
      </OnHoverScale>}
    </div>
  );
}

export default ProjectLinks;