import * as React from 'react';
import { boolean, color, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import SectionTitle from '.';

const stories = storiesOf('Section Title', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <>
    <h1>Section</h1>
    <SectionTitle
      bold={boolean('Bold Font', false)}
      text={text('Title Text', 'Become a Web Developer—from Anywhere')}
      color={color('Text Color', '#333')}
    />
  </>
));
