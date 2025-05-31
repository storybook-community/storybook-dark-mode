import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useDarkMode } from '.'

export default {
  title: 'useDarkMode',
} satisfies Meta

export const Default: StoryObj = {
  render() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const isDark = useDarkMode()
    return <div>Dark mode: {isDark ? 'on' : 'off'}</div>
  }
}
