import React from 'react';
import Search from '../search/search';
import Repos from '../repository/repository'
import './tabs.css'

const Tabs = ({repos, starred}) => {
  
  const component = (
    <div className='ml-5'>
      <nav>
        <div className="nav nav-tabs mt-4" id="nav-tab" role="tablist">
          <a className="nav-item nav-link text-muted active" id="nav-repo-tab" data-toggle="tab" href="#repositories" role="tab" aria-controls="repositories" aria-selected="true">Repos</a>
          <a className="nav-item nav-link text-muted" id="nav-starred-tab" data-toggle="tab" href="#starred" role="tab" aria-controls="starred" aria-selected="false">Starred</a>
        </div>
      </nav>

      <Search />

      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="repositories" role="tabpanel" aria-labelledby="nav-repo-tab"> <Repos data={repos} /> </div>
        <div className="tab-pane fade" id="starred" role="tabpanel" aria-labelledby="nav-starred-tab"> <Repos data={starred} /> </div>
      </div>
    </div>
  );
  return component;
}

export default Tabs;
