import './salesList.css'
import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline } from '@mui/icons-material'
import { salesRows } from '../../dummyData'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function SalesList() {

  const [data, setData] = useState(salesRows)

  const handleDelete = id => {
    setData(data.filter(item => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'date', headerName: 'Date', width: 120 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: params => {
        return (
          <div className="salesListItem">
            <img className="salesListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        )
      }
    },
    { field: 'customer', headerName: 'Customer', width: 150 },
    { field: 'total', headerName: 'Total', width: 40 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'amount', headerName: 'Amount', width: 120 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => {
        return (
          <>
            <Link to={'/sale/' + params.row.id}>
              <button className="salesListView">View</button>
            </Link>
            <DeleteOutline
              className="salesListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      }
    }
  ]

  return (
    <div className="salesList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
