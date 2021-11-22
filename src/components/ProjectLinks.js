import React from 'react';

import { ReactComponent as GitHub } from '../assets/my_github.svg'
import { ReactComponent as OpenInBrowser } from '../assets/openInBrowser.svg'

import './ProjectLinks.css';

function ProjectLinks(props) {
  const { feLink, beLink, pageLink } = props;
  return (
    <div className="project-links">
      <a href={feLink} target="_blank" rel="noreferrer">
        <GitHub />
      </a>
      {beLink && (
        <a href={beLink} target="_blank" rel="noreferrer">
          <GitHub />
        </a>
      )}
      {pageLink && (
        <a href={pageLink} target="_blank" rel="noreferrer">
          <OpenInBrowser />
        </a>
      )}
    </div>
  );
}

export default ProjectLinks;