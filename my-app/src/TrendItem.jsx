import React from 'react'

const TrendItem = () => {
  return (
    <div className="latestTrend__item">
                <img src="./img/l1.jpg" alt="l1"/>
                <div className="latestTrend__text">
                    <div className="numDiscount">
                        <p>50%</p>
                    </div>
                    <div className="sex">
                        <p>Men</p>
                    </div>
                </div>
                <div className="latestTrend__item-descrip">
                    <p>Taking inspiration from the world of designers and their muses, the Fall Winter 2019 campaign
                        pays homage to the mythical passion</p>
                </div>
            </div>
  )
}

export default TrendItem