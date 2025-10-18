import React from "react";
import Event from "./Event";
import PropTypes from "prop-types";

function PageBoard({ events, title }) {
  return (
    <div className="board-container">
      <h1 className="board-title">{title}</h1>
      <div className="grid">
        {events.slice(0, 6).map((ev, i) => (
          <Event
            key={i}
            name={ev.name}
            location={ev.location}
            speaker={ev.speaker}
            start={ev.time.start}
            end={ev.time.end}
            type={ev.type}
          />
        ))}
      </div>
    </div>
  );
}

PageBoard.propTypes = {
  title: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.string,
      speaker: PropTypes.string,
      time: PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string,
      }),
      type: PropTypes.string,
    })
  ).isRequired,
};

export default PageBoard;
