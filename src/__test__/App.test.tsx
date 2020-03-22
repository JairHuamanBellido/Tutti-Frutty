import React from "react";
import { shallow } from 'enzyme';
import App from "../App";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('link', () => {
  it('Renders link to Google', () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
})
