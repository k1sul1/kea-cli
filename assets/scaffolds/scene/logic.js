import { kea } from 'kea'
import PropTypes from 'prop-types'

// const outerActions = selectActionsFromLogic([
//   otherScene, [
//     'doSomething'
//   ]
// ])

export default kea({
  path: () => ['scenes', '$$camelScene$$', 'index'],

  constants: () => [
    // 'SHOW_ALL',
    // 'SHOW_ACTIVE',
    // 'SHOW_COMPLETED'
  ],

  actions: ({ constants }) => ({
    // showAll: true,
    // setVisibilityFilter: filter => ({ filter }),
  }),

  reducers: ({ actions, constants }) => ({
    // visibilityFilter: [constants.SHOW_ALL, PropTypes.string, {
    //   [actions.showAll]: () => constants.SHOW_ALL,
    //   [actions.setVisibilityFilter]: (_, payload) => payload.filter
    //   [outerActions.doSomething]: (state, payload) => payload.keep ? state : payload.new
    // }]
  }),

  selectors: ({ constants, selectors }) => ({
    // todoCount: [
    //   () => [selectors.todos],
    //   (todos) => todos.length,
    //   PropTypes.number
    // ]
  })
})
