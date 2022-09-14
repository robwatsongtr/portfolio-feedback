import "./widgetLg.css" 
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"


export default function WidgetLg( {theadData, tbodyData} ) {
  return (
    <div className="widgetLg">

      <h3 className="widgetLgTitle">
        Fund Summary
      </h3>

      <table className="widgetLgTable">

        <thead>
            <tr className="widgetLgTr">
              { 
                theadData.map( heading => {
                  return <th className="widgetLgTh">{heading}</th>
                })
              } 
            </tr>
        </thead>

        <tbody>
          <tr className="widgetLgTr">
            {
              tbodyData.map( (row, index) => {
                return <tr key={index}> 
                  {
                    theadData.map((key, index) => {
                        return <td classname='widgetLgTr'key={row[key]}>{row[key]}</td>
                   })
                  }
                </tr>
              })
            }
          </tr>
         </tbody>
        
      </table>
      
    </div>
  )
}
