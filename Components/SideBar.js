import {Link, useLocation} from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
import Man4RoundedIcon from '@mui/icons-material/Man4Rounded';
import { FcAbout } from "react-icons/fc";

import About from '../pages/About/About'
const findActive = (value) => {
  let active = 0
  switch(value){
    case "/age": 
      active = 3
    break;
    case "/water":
      active = 1
    break;
    case "/food":
      active = 2
    break;
    case "/About":
      active = 4
    break;
    default:
      active = 0
  }
  return active
}
function SideBar({isOpen}) {
  const loc = useLocation(); 
  const currentURL = loc.pathname;
  const links = [
      {
        name: 'Home', 
        path: '/',
        icon: <HomeRoundedIcon />,
        title: "Daf Tech HOme"
      },
      {
        name: 'Water Intake Calculator', 
        path: '/water',
        icon: <WaterDropRoundedIcon />,
        title: "Daf Water"
      },
      {
        name: 'Food Intake', 
        path: '/food',
        icon: <LocalDiningRoundedIcon />,
        title: "Daf Food"
      },
      {
        name: 'Personality Predector', 
        path: '/age',
        icon: <Man4RoundedIcon />,
        title: "Daf Age"
      },

      {
        name: 'About', 
        path: '/About',
        icon: <FcAbout />,
        title: "About "
      }
  ]
  const listLinks = links.map((list, index) => {
    let classNameList = 'link'
    if(findActive(currentURL)==index) classNameList = 'link active'
      return (
        <li className='list' key={index} >
          <Link to={list.path} className={classNameList}>
            <span className='icon'>{list.icon}</span>
            <span className='name'>{list.name}</span>
          </Link>
        </li>
      )
  }) 
  return (
    <div className={isOpen?'sidebar': 'sidebar active'}>
        <ul className='lists'>
          {listLinks}
        </ul>
    </div>
  )
}

export default SideBar 