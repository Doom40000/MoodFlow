import { render } from '@testing-library/react-native';
import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import Journal from '../Journal/Journal';
import MockedNavigator from '../../components/MockNavigationForTests/MockNavigation';

jest.useFakeTimers();

describe(Journal, () => {
  const tree = renderer.create(<MockedNavigator component={Journal} params={{}} />).toJSON();
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
  it('should display heading', () => {
    
  })
});
