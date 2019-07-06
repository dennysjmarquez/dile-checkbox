import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { DileCheckbox } from '../dile-checkbox.js';
import '../dile-checkbox.js';

import readme from '../README.md';

storiesOf('dile-checkbox', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(DileCheckbox), { notes: { markdown: readme } })
  .add(
    'Default checkbox',
    () => html`
      <dile-checkbox>Element label</dile-checkbox>
    `,
  )
  .add(
    'Styled checkbox',
    () => html`
      <style>
        .customized {
          --dile-checkbox-checked-color: #006;
          --dile-checkbox-unchecked-color: #f66;
          --dile-checkbox-fill-color: #fcc;
          --dile-checkbox-unchecked-fill-color: #666;
          --dile-checkbox-label-color: #c57;
          --dile-checkbox-font-weight: bold;
          font-size: 1.5em;
        }
        </style>
      <dile-checkbox class="customized">Mark as danger!</dile-checkbox>
    `,
  ).add(
    'Disabled checkbox',
    () => html`
      <dile-checkbox disabled>Disabled checkbox</dile-checkbox>
    `,
  );
