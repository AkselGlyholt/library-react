import React from "react";
import Highlight from "./ui/Highlight.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              para="Get access to the book you purchased online instantly"
              title="Ease and Quick"
              icon={<FontAwesomeIcon icon="bolt" />}
            />
            <Highlight
              para="Library has books in all your favorite categories"
              title="10,000+ Books"
              icon={<FontAwesomeIcon icon="book-open" />}
            />
            <Highlight
              para="Get your hands on populare books for as little as $10."
              title="Affordable"
              icon={<FontAwesomeIcon icon="tags" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
