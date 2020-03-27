import React, {Component} from "react";
import "./portfolio.css";
import Toolbar from "../toolbar";
import ProjectList from "../project-list";
import _data from "../data";

export default class Portfolio extends Component {
  state = {
    filters: ["All", "Websites", "Flayers", "Business Cards"],
    selected: "All",
    projects: _data
  };

  onSelectFilter = filter => {
    if (this.state.selected !== filter) {
      this.setState({selected: filter});
      this.filterProjects(filter);
    }
  };

  filterProjects = filter => {
    if (filter === "All") {
      this.setState({projects: _data});
    } else {
      this.setState({
        projects: _data.filter(project => project.category === filter)
      });
    }
  };

  render() {
    return (
      <div>
        <Toolbar {...this.state} onSelectFilter={this.onSelectFilter} />
        <ProjectList projects={this.state.projects} />
      </div>
    );
  }
}
