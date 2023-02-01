import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'
export default {
  component: AppFrame,
  title: 'App Frame'
}

export const AppFrameExample = () => (
  <Router>
    <AppFrame>
      sdf df df sdf s df sdf f s fds
    </AppFrame>
  </Router>
)
