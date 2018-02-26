import React from 'react';
import Search from '../search/search';
import Repos from '../repository/repository'
import './tabs.css'

const Tabs = ({repos, starred}) => {
  
  const component = (
    <div className='ml-5'>
      <nav>
        <div className="nav nav-tabs mt-4" id="nav-tab" role="tablist">
          <a className="nav-item nav-link text-muted active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Repos</a>
          <a className="nav-item nav-link text-muted" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Starred</a>
        </div>
      </nav>

      <Search />

      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"> <Repos repos={repos} /> </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"> <Repos repos={starred} /> </div>
      </div>
    </div>
  );
  return component;
}

export default Tabs;
