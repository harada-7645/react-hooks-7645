import React, { useContext } from 'react'

import AppContext from '../contexts/AppContext'

const OperationLogs = ({ operationLog }) => {
  const { dispatch } = useContext(AppContext)
  return (
    <tr>
      <td>{operationLog.description}</td>
      <td>{operationLog.operatedAt}</td>
    </tr>
  )
}

export default OperationLogs