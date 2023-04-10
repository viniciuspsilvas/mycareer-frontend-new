import { ComponentMeta, ComponentStory } from '@storybook/react'
import { decorators } from 'src/__mocks__/decorators'
import { getMeQueryMocked } from 'src/__mocks__/mockedGetMe'
import AdminPage from '../index'

export default {
  title: 'pages/admin/index',
  component: AdminPage
} as ComponentMeta<typeof AdminPage>

const Template = () => <AdminPage />

export const Primary: ComponentStory<typeof AdminPage> = Template.bind({})
Primary.decorators = decorators
Primary.parameters = { msw: { handlers: [getMeQueryMocked] } }
