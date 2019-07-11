/**
 * Storybook Main Project
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.07.11
 */

/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import '@/shared/styles/app.scss';

/**
 * Atomic Component
 */
import IconStorybook from '@/shared/components/atoms/icon/storybook/icon.component.stories';

/**
 * Atomic Markdown
 */
import IconMD from '@/shared/components/atoms/icon/storybook/docs.md';

storiesOf('Atomic Component', module).add('Icon', () => <IconStorybook />, {
    notes: {
        markdown: IconMD
    }
});
