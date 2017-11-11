import * as React from 'react';
import { SearchResults } from './SearchResults';

import './SearchResultsWifi.css';

class SearchResultsWifi extends SearchResults {

  render() {
    console.log('Rendering wifi search result');

    const result = this.props.result;

    return (
      <div className="media">
        <div className="media-left">
          <p>
            <span className="icon is-large">
              <i className="mdi mdi-48px mdi-wifi"></i>
            </span>
          </p>
          <div className="distanceDiv has-text-centered">
            <span className="tag is-white">{this.distancePrettifier(result.distance)}</span>
          </div>
        </div>
        <div className="media-content">
          <div className="content">
            <span className="title">
              <span>{result.name} &nbsp; </span>
              <span className="tag is-dark">W-LAN</span> &nbsp;
              <span className={'tag ' + (this.isRunning(result.properties.WLAN_STATUS) ? 'is-success' : 'is-danger')}>
                {result.properties.WLAN_STATUS}
              </span>
            </span>
            <div className="is-clearfix">
              {result.properties.ADRESSE}
            </div>
            <p className="has-text-danger">
              <span className="icon">
                <i className="mdi mdi-walk"></i>
              </span>
              {this.getMinutesByFeet(result.distance)}
              &bull;
              <span className="icon">
                <i className="mdi mdi-car"></i>
              </span>
              {this.getMinutesByCar(result.distance)}
            </p>
          </div>
        </div>
      </div>
    );
  }

  protected isRunning(wlanStatus: string): boolean {
    return wlanStatus === 'in Betrieb';
  }
}

export default SearchResultsWifi;
