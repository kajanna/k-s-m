import React from 'react';

import OnHoverScale from '../shered/OnHoverScale';
import { ReactComponent as GitHub } from '../assets/my_github.svg'
import { ReactComponent as ImageCollection } from '../assets/imageCollection.svg'
import { ReactComponent as OpenInBrowser } from '../assets/openInBrowser.svg'

import './ProjectLinks.css';

function ProjectLinks(props) {
    return (
      <div className="project-links">
          <OnHoverScale>
        <div className="project-links__item">
          <GitHub />
        </div>
        </OnHoverScale>
        <OnHoverScale>
        <div className="project-links__item">
          <ImageCollection />
        </div>
        </OnHoverScale>
        <OnHoverScale>
        <div className="project-links__item">
          <OpenInBrowser />
        </div>
        </OnHoverScale>
      </div>
    );
}

export default ProjectLinks;