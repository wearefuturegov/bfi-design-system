import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import Container from '../src/components/bfi-components/Container';

export default {
  title: 'Container',
};

export const container = () => <Container>Content goes inside</Container>;