/* eslint-disable react/prop-types */

const History = ({children}) => {
  return (
      <div className="text-white p-3 border">
          <ul>
              <ol>{ children}</ol>
          </ul>
    </div>
  )
}

export default History