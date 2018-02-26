import React from 'react';
import './tabs.css'

const Tabs = ({}) => {
  const component = (
    <div>
      <nav>
        <div className="nav nav-tabs mt-5" id="nav-tab" role="tablist">
          <a className="nav-item nav-link text-muted active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Repos</a>
          <a className="nav-item nav-link text-muted" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Starred</a>
        </div>
      </nav>

      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">Home</div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">Profile</div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Contact</div>
      </div>
    </div>
  );
  return component;
}

export default Tabs;
