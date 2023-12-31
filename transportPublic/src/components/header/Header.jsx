import {
  faTrain,
  faCalendarDays,
  faBus,
  faTrainSubway,
  faTrainTram,
  faBed,
  faPlug,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";

const Header = ({ type }) => {
  const { user } = useContext(AuthContext);
  const [openSearch, setsearch] = useState(false);
  const [destination, setDestination] = useState("");
  const [selectedTime, setSelectedTime] = useState("00:00");

  const navigate = useNavigate();

  const handleSearch = () => {
    if (user) {
      setsearch(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBus} />
            <span>Bus</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTrainTram} />
            <span>Metro</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTrainSubway} />
            <span>train</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            {user ? <h1 className="headerTitle">
              Your journey begins with us&nbsp;&nbsp; <span style={{ color: 'orange'}}>{user.user.username}</span>
            </h1>
                :
            <h1 className="headerDesc">
             Welcome aboard your journey of possibilities, where every destination is a new beginning.
            </h1>}
            <div className="ListsSearch">
      <div className="headerSearchItem">
        
        <div className="ListsSearchItem">
          <FontAwesomeIcon icon={faBed} className="ListsIcon" />
          <input
            type="text"
            placeholder="From?"
            className="ListsSearchInput"
          />
        </div>
        <div className="ListsSearchItem">
          <FontAwesomeIcon icon={faBed} className="ListsIcon" />
          <input
            type="text"
            placeholder="To?"
            className="ListsSearchInput"
          />
        </div>
        
        <input
          format="HH:mm"
          type="time"
          className="searchTime"
        />
        <div className="ListsSearchItem">
          <button className="ListsBtn" onClick={handleSearch}>Search</button>
        </div>
     </div>
     </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
