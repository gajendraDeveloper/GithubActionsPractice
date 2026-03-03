import { Link } from "react-router-dom";

const CommonList = ({ tabs, styleContainer, styleTab, isActive }) => {
  return (
    <div >
      <div className={`${styleContainer} `}>
        {tabs.map((item) => {
          return (
            <li className={`${styleTab} ${item.isActive ? `${isActive}` : ""}`} key={item.label || item.name}>
              <Link to={item.path} >{item.label || item.name}  </Link>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default CommonList;
