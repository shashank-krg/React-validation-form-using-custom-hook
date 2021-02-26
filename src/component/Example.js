import React, { Component, useState } from 'react';

import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


export default class Example extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }




function App()
{
  const [country ,setCountry] = useState('');
  const [region ,setRegion] = useState('');
};

const selectCountry = e => {
  setCountry({ country: val });
};
const selectRegion = e => {
  setRegion({ region: val });
};
















    const { country, region } = this.state;
    return (
      <div>
        <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)} />
      </div>
    );
  }
}