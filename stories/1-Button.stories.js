import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import Heading from '../src/components/bfi-components/Heading';

export default {
  title: 'Heading',
};

export const heading1 = () => <Heading>Hello World</Heading>;

export const heading2 = () => (<Heading as="h2">Hello World</Heading>);

export const heading3 = () => (<Heading as="h3">Hello World</Heading>);
