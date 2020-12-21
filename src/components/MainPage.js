import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import 'tachyons';
import './MainPage.css';

class MainPage extends React.Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter((robot) =>
      robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
    );
  }

  render() {

    const { searchField, onSearchChange, robots, isPending } = this.props;

    return isPending ?
      <h1>Loading...</h1> : (
        <div className="tc" >
          <Header />
          <SearchBox searchField={searchField} searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundary>
          </Scroll>
        </div>
      )
  }
}

export default MainPage;