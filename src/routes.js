import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Dashboard1 = React.lazy(() => import('./views/dashboard/Dashboard1'))

const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const ChurchEdit = React.lazy(() => import('./views/forms/church-edit/ChurchEdit'))
const PledgeAdd = React.lazy(() => import('./views/forms/pledge-add/PledgeAdd'))
const ChurchForm = React.lazy(() => import('./views/forms/church-form/ChurchForm'))
const PledgedCategory = React.lazy(() => import('./views/forms/pledged-category/PledgedCategory'))
const ReportForm = React.lazy(() => import('./views/forms/report-form/ReportForm'))
const ChurchProfile = React.lazy(() => import('./views/forms/church-profile/ChurchProfile'))
const UserProfile = React.lazy(() => import('./views/forms/user-profile/UserProfile'))
const ContributionTable = React.lazy(() =>
  import('./views/forms/contribution-table/ContributionTable'),
)
const PeopleTable = React.lazy(() => import('./views/forms/people-table/PeopleTable'))
const UserContributionTable = React.lazy(() =>
  import('./views/forms/user-contribution-table/UserContributionTable'),
)
const OrganizationTable = React.lazy(() =>
  import('./views/forms/organization-table/OrganizationTable'),
)
const UserReportForm = React.lazy(() => import('./views/forms/user-report-form/UserReportForm'))
const ContributionForm = React.lazy(() =>
  import('./views/forms/contribution-form/ContributionForm'),
)
const ChurchTable = React.lazy(() => import('./views/forms/church-table/ChurchTable'))
const OrganizationForm = React.lazy(() =>
  import('./views/forms/organization-form/OrganizationForm'),
)
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/dashboard1', name: 'Dashboard', element: Dashboard1 },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/church-form', name: 'Church Form', element: ChurchForm },
  { path: '/forms/pledged-category', name: 'Pledged Category', element: PledgedCategory },
  { path: '/forms/report-form', name: 'ReportForm', element: ReportForm },
  { path: '/forms/church-profile', name: 'ChurchProfile', element: ChurchProfile },
  { path: '/forms/church-edit', name: 'ChurchEdit', element: ChurchEdit },
  { path: '/forms/user-profile', name: 'UserProfile', element: UserProfile },
  { path: '/forms/user-report-form', name: 'UserReportForm', element: UserReportForm },
  { path: '/forms/contribution-form', name: 'Contribution Form', element: ContributionForm },
  { path: '/forms/church-table', name: 'Church Table', element: ChurchTable },
  { path: '/forms/people-table', name: 'People Table', element: PeopleTable },
  { path: '/forms/pledge-add', name: 'PledgeAdd', element: PledgeAdd },
  { path: '/forms/organization-table', name: 'Organization Table', element: OrganizationTable },
  { path: '/forms/organization-form', name: 'Organization Form', element: OrganizationForm },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/contribution-table', name: 'ContributionTable', element: ContributionTable },
  {
    path: '/forms/user-contribution-table',
    name: 'UserContributionTable',
    element: UserContributionTable,
  },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
