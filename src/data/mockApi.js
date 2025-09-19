import products from "./productos"

function getMockApiData(){
    const promiseProducts = new Promise((resolve, reject)=>{
        setTimeout( ()=>{
            resolve(products)
        }, 2000)
    })
    return promiseProducts
}

export default getMockApiData