import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class EsclubFooter extends React.Component {
  render() {
    return (
      <footer style={{ backgroundColor: "maroon", marginTop: "100px" }}>
        <div className="container-fluid footer">
          <div className="row">
            <div className="col-md-12">
              <ul className="pull-right list-unstyled">
                <li
                  className="text-center"
                  style={{ marginTop: "15px", color: "white" }}
                >
                  © Microsoft {new Date().getFullYear()} Copyright: EsClub
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
