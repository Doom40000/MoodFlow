import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import Home from '../Home/Home';

describe(Home, () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <NavigationContainer>
          <Home />
        </NavigationContainer>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have multiple child components', () => {
    const tree = renderer
      .create(
        <NavigationContainer>
          <Home />
        </NavigationContainer>,
      )
      .toJSON() as ReactTestRendererJSON;
    expect(tree.children?.length).toBeGreaterThan(0);
  });

  it('renders the quote header text', () => {
    const { getByText } = render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>,
    );
    const textElement = getByText('Here is your quote of the day:');
    expect(textElement).toBeDefined();
  });

  it('should render the App logo', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>,
    );
    const logoImage = getByTestId('Logo');
    expect(logoImage).toBeDefined();
  });
});
