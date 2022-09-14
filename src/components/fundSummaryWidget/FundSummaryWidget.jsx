import "./fundSummaryWidget.css"
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90, hide: true },
  {
    field: 'fundName',
    headerName: 'Fund Name',
    width: 180,
    editable: false,
  },
  {
    field: 'submittedPortfolio',
    headerName: 'Submitted',
    width: 140,
    align: 'right',
    editable: false,
  },
  {
    field: 'recommendedPortfolio',
    headerName: 'Recommended',
    width: 170,
    align: 'right',
    editable: false,
  },
  {
    field: 'difference',
    headerName: 'Difference',
    width: 150,
    align: 'right',
    editable: false,
  },
  {
    field: 'feedback',
    headerName: 'Feedback',
    width: 150,
    align: 'center',
    editable: false,
  },
  {
    field: 'suggestions',
    headerName: 'Suggestions',
    width: 250,
    editable: false,
  },
];

const rows = [
  { 
    id: 1, 
    fundName: 'JP Morgan 444', 
    submittedPortfolio: '10%', 
    difference: '-1',
    recommendedPortfolio: '9%',
    feedback: 'true',
    suggestions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  { 
    id: 2, 
    fundName: 'JP Morgan 4744', 
    submittedPortfolio: '20%', 
    difference: '9',
    recommendedPortfolio: '29%',
    feedback: 'true',
    suggestions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  { 
    id: 3, 
    fundName: 'JP Morgan 4445', 
    submittedPortfolio: '30%', 
    difference: '9',
    recommendedPortfolio: '39%',
    feedback: 'true',
    suggestions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  { 
    id: 4, 
    fundName: 'JP Morgan 478', 
    submittedPortfolio: '0%', 
    difference: '30',
    recommendedPortfolio: '30%',
    feedback: 'true',
    suggestions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
];


export default function FundSummaryList() {
  return (
    <div className="fundSummaryWidget">

     <h3 className="fundSummaryWidgetTitle">
        Fund Summary 
      </h3>
 
      <div className="dataTable">
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            
            disableSelectionOnClick
          />
        </div>
      </div>

    </div>
  )
}
