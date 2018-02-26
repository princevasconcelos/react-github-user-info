import React from 'react';
import './tabs.css'

const Tabs = ({}) => {
  const component = (
    <div>
      <nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist">
    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
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


{/* <div>
<ul className='nav nav-tabs mt-5' id="myTab" role="tablist">
  <li className='nav-item'>
    <a className='nav-link text-muted active' id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Repos</a>
  </li>
  <li className='nav-item'>
    <a className='nav-link text-muted'     id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Starred</a>
  </li>
</ul>

<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">1</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">2</div>
</div>
</div> */}
