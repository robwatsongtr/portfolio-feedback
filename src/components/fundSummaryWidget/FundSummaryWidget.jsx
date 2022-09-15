import "./fundSummaryWidget.css"
import { DataGrid } from '@material-ui/data-grid';
// import { makeStyles } from '@material-ui/styles';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const columns = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 90, 
    hide: true },
  {
    field: 'fundName',
    headerName: 'Fund Name',
    width: 220,
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
    width: 140,
    align: 'right',
    editable: false,
  },
  {
    field: 'feedback',
    headerName: 'Feedback',
    width: 150,
    renderCell: (params) => {
      if(params.value === 'true') {
        return <> <ThumbUpOffAltIcon /> </>
      } else {
        return <> <ThumbDownOffAltIcon /> </>
      }
    },
    align: 'center',
    editable: false,
  },
  {
    field: 'suggestions',
    headerName: 'Suggestions',
    width: 800,
    renderCell: (params) => {
      return  <> <OpenInNewIcon /> {params.row.suggestions} </> 
    },
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
    suggestions: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse 
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
      cupidatat non proident, sunt in culpa qui officia deserunt mollit 
      anim id est laborum.`
  },
  { 
    id: 2, 
    fundName: 'JP Morgan 4744', 
    submittedPortfolio: '20%', 
    difference: '9',
    recommendedPortfolio: '29%',
    feedback: 'false',
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
    feedback: 'false',
    suggestions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  { 
    id: 5, 
    fundName: 'JP Morgan 478', 
    submittedPortfolio: '0%', 
    difference: '30',
    recommendedPortfolio: '30%',
    feedback: 'false',
    suggestions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  { 
    id: 6, 
    fundName: 'JP Morgan 478', 
    submittedPortfolio: '0%', 
    difference: '30',
    recommendedPortfolio: '30%',
    feedback: 'false',
    suggestions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  { 
    id: 7, 
    fundName: 'JP Morgan 478', 
    submittedPortfolio: '0%', 
    difference: '30',
    recommendedPortfolio: '30%',
    feedback: 'false',
    suggestions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  { 
    id: 8, 
    fundName: 'JP Morgan 478', 
    submittedPortfolio: '0%', 
    difference: '30',
    recommendedPortfolio: '30%',
    feedback: 'false',
    suggestions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  { 
    id: 9, 
    fundName: 'JP Morgan 478', 
    submittedPortfolio: '0%', 
    difference: '30',
    recommendedPortfolio: '30%',
    feedback: 'false',
    suggestions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  { 
    id: 10, 
    fundName: 'JP Morgan 478', 
    submittedPortfolio: '0%', 
    difference: '30',
    recommendedPortfolio: '30%',
    feedback: 'false',
    suggestions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  { 
    id: 11, 
    fundName: 'JP Morgan 478', 
    submittedPortfolio: '0%', 
    difference: '30',
    recommendedPortfolio: '30%',
    feedback: 'false',
    suggestions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },

];

// const useStyles = makeStyles({
//   root: {
//     '& .super-app-theme--header': {
//       backgroundColor: 'rgba(255, 7, 0, 0.55)',
//     },
//   },
// });



export default function FundSummaryList() {
  return (
    <div className="fundSummaryWidget">

     <h3 className="fundSummaryWidgetTitle">
        Fund Summary 
      </h3>
 
      <div className="dataTable">
        <div style={{ height: 800, width: '100%' }}>
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
