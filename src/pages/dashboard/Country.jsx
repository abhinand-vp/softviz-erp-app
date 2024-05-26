import { useState } from 'react'

const Country = () => {
  const [edit, setEdit] = useState(false)
  return (
    <div className='country_table'>
      {edit &&
        <h1>Modal</h1>
      }
      <h3>Country Details</h3>
      <table>
        <tr className='heading_border'>
          <th>sL.No</th>
          <th>Country</th>
          <th>Code</th>
          <th>Edit</th>
          <th>View</th>
        </tr>
        <tr>
          <td>1</td>
          <td>India</td>
          <td>IND</td>
          <td><img src="/public/icons/Create.svg" onClick={() => setEdit(!edit)} alt="" /></td>
          <td><img src="/public/icons/Eye.svg" alt="" /></td>
        </tr>
        <tr>
          <td>1</td>
          <td>India</td>
          <td>IND</td>
          <td><img src="/public/icons/Create.svg" alt="" /></td>
          <td><img src="/public/icons/Eye.svg" alt="" /></td>
        </tr>
      </table>
    </div>
  )
}

export default Country