import "./widgetLg.css" 
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

export default function WidgetLg() {
  return (
    <div className="widgetLg">

      <h3 className="widgetLgTitle">
        Fund Summary
      </h3>

      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Fund Name</th>
          <th className="widgetLgTh">Submitted Portfolio</th>
          <th className="widgetLgTh">Recommended Portfolio</th>
          <th className="widgetLgTh">Difference</th>
          <th className="widgetLgTh">Feedback</th>
          <th className="widgetLgTh">Suggestions</th>
        </tr>
        
        <tr className="widgetLgTr">
          <td className="widgetLgFund">
            <span className="widgetLgFundName">JP Morgan 444</span>
          </td>
          <td className="widgetLgSubmittedPortfolio">10%</td>
          <td className="widgetLgRecommendedPortfolio">9%</td>
          <td className="widgetLgDifference">-1</td>
          <td className="widgetLgFeedback"> <ArrowUpward/> </td>
          <td className="widgetLgSuggestions">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgFund">
            <span className="widgetLgFundName">JP Morgan 4744</span>
          </td>
          <td className="widgetLgSubmittedPortfolio">20%</td>
          <td className="widgetLgRecommendedPortfolio">29%</td>
          <td className="widgetLgDifference">9</td>
          <td className="widgetLgFeedback"> <ArrowDownward/> </td>
          <td className="widgetLgSuggestions">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgFund">
            <span className="widgetLgFundName">JP Morgan 4445</span>
          </td>
          <td className="widgetLgSubmittedPortfolio">30%</td>
          <td className="widgetLgRecommendedPortfolio">39%</td>
          <td className="widgetLgDifference">9</td>
          <td className="widgetLgFeedback"> <ArrowUpward/> </td>
          <td className="widgetLgSuggestions">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgFund">
            <span className="widgetLgFundName">JP Morgan 478</span>
          </td>
          <td className="widgetLgSubmittedPortfolio">0%</td>
          <td className="widgetLgRecommendedPortfolio">30%</td>
          <td className="widgetLgDifference">30</td>
          <td className="widgetLgFeedback"> <ArrowUpward/> </td>
          <td className="widgetLgSuggestions">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </td>
        </tr>
      </table>
      
    </div>
  )
}
