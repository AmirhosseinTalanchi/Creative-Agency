import React from 'react'
import "./Great-team-user.css"

export default function GreatTeamUSer(props) {
  return (
    <div>
        <div className='Great-team-user__box'>
          <img src={props.img} className='Great-team-user__img'/>
          <h3 className='Great-team-user__name h5'>{props.name}</h3>
          <p className='Great-team-user__job body'>{props.job}</p>
        </div>
    </div>
  )
}
