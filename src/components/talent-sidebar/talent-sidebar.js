import React, {useEffect} from 'react'
import './TalentSidebar.scss'
import AOS from "aos";
import TalentCloseBtn from '../talents-sidebar-close-btn/talentCloseBtn';
import TalentSidebarLeft from '../talent-sidebar-left/talent-sidebar-left';
import TalentSidebarRight from '../talent-sidebar-right/talent-sidebar-right';

const TalentSidebar = (props) => {
  const {closeSidebar } = props;

  useEffect(() => {
    AOS.init()
  });
  return (
    <div className='talent-sidebar'
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
         >
          <div className='TalentCloseBtn'>

            <TalentCloseBtn closeSidebar={closeSidebar} />
          </div>

           <div className='talent-sidebar-left'>
              <TalentSidebarLeft/>
          </div>

          <div className='talent-sidebar-right'>
            <TalentSidebarRight newTabBtn={true}/>
          </div>
    </div>
  )
}

export default TalentSidebar;