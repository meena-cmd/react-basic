import { RES_URL } from "../utils/constants";

const ResContainer=({resdata})=>{
    const {cuisines,avgRating,costForTwo}=resdata?.info
     return (
    
            <div className="res-card" style={{background:"#f0f0f0"}}>
                <img className="res-img" src={ RES_URL +resdata.info.cloudinaryImageId}/>
                {/* <h5>{name}</h5> */}
                <h6>{cuisines.join(',')}</h6>
                <h6>{avgRating}</h6>    
                <h6>{costForTwo}</h6>
                <h6>{resdata.info.sla.deliveryTime} mins</h6>
            </div>
             )
    }

export default ResContainer;