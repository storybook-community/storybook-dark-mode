import { setProjectAnnotations } from '@storybook/react-vite'
import { beforeAll } from 'vitest'
import * as projectAnnotations from './preview'

// https://github.com/storybookjs/storybook/issues/33057
const annotations = setProjectAnnotations([projectAnnotations as any])

beforeAll(() => annotations.beforeAll())
