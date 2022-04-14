import React from 'react'

interface IProps {
  header: string;
  icon: string;
  bgPicture: string;
}

const Card: React.FC<IProps> = ({header, icon, bgPicture}) => {
  return (
    <div className="card" style={{ 
      backgroundImage: `url(${bgPicture})` 
    }}>
      <div className="circleIcon"><i className={icon}></i></div>
      <h3><span>{header}</span></h3>
    </div>
  )
}

export default Card;