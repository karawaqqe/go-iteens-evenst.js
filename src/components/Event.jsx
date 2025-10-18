import React from "react";
import { FaMapMarkerAlt, FaUser, FaClock, FaRegCalendarAlt } from "react-icons/fa";
import PropTypes from "prop-types";

function Event({ name, location, speaker, start, end }) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const durationHrs = Math.round((endDate - startDate) / (1000 * 60 * 60));

  return (
    <div className="event-card">
      <h3 className="event-title">{name}</h3>
      <ul className="event-list">
        <li><FaMapMarkerAlt className="icon" /> <b>Место:</b> {location}</li>
        <li><FaUser className="icon" /> <b>Спикер:</b> {speaker}</li>
        <li>
          <FaRegCalendarAlt className="icon" />{" "}
          <b>Дата:</b>{" "}
          {startDate.toLocaleDateString("ru-RU", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })},{" "}
          {startDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </li>
        <li><FaClock className="icon" /> <b>Длительность:</b> {durationHrs} часов</li>
      </ul>
    </div>
  );
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Event;
