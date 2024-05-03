import React, { useEffect, useState } from 'react'


const WorkerDetails = ({worker}) => {


    useEffect(() => {
        //console.log(worker)
    })
  return (
    <a href={`/profile/${worker._id}`}>
    <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img src={""} width="50" height="50" />
              {worker.name}
            </div>
            <h3 class="fs-2 text-body-emphasis">{worker.type}</h3>
            <p>{worker.skills}</p>
            <p>Price Range: $80 - $150</p>
            <a href="#" class="icon-link">
              Book Now
              <svg class="bi"><use href="#chevron-right"></use></svg>
            </a>
          </div>
            </a>

  )
}

export default WorkerDetails