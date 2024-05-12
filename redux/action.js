import axios from "axios"


const mainData=[
    {
        image: "https://www.newworldhotels.com/wp-content/uploads/2014/05/Desktop-NWBJG_Exterior-%E9%85%92%E5%BA%97%E5%A4%96%E8%A7%82%E5%9B%BE.jpg",
    name: "Hotel Himo",
    price: "110",
    rate: "3.4",
    },
    {
       image: "https://static.toiimg.com/img/104753278/Master.jpg",
    name: "Madrid",
    price: "610",
    rate: "4.4",
    },
    {
       image: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandgoa-goa/images/overview/hotel-expereince/sustainability.png",
    name: "Yahoo",
    price: "310",
    rate: "3.4",
    },
    {
      image: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandgoa-goa/images/overview/hotel-expereince/cuisine.png",
    name: "Beach view",
    price: "2910",
    rate: "4.1",
    },
    {
      image: "https://www.planetware.com/photos-tiles/best-islands-bora-bora-5.jpg",
    name: "Aziz view",
    price: "5510",
    rate: "4.9",
    },
    {
      image: "https://www.planetware.com/photos-tiles/usa-best-places-miami-5.jpg",
    name: "Lake view",
    price: "4910",
    rate: "4.4",
    },

]


export const GET_DATA_REQUEST="GET_DATA_REQUEST"
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const GET_DATA_FAILURE="GET_DATA_FAILURE"


const getDataRequest=()=>{
    return({
        type:GET_DATA_REQUEST
    })
}

const getDataSuccess=(data)=>{
    return({
        type:GET_DATA_SUCCESS,
        payload:data
    })
}

const getDataFailure=()=>{
    return({
        type:GET_DATA_FAILURE
    })
}


export const getData=(data)=>(dispatch)=>{
    console.log("actiondata.....",data)
    dispatch(getDataRequest())
 
        dispatch(getDataSuccess(mainData))
        console.log("object.....",data)

        dispatch(getDataFailure())
}
