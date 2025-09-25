import products from "./productos"

function getMockApiData(){
    const promiseProducts = new Promise((resolve, reject)=>{
        setTimeout( ()=>{
            resolve(products)
        }, 500)
    })
    return promiseProducts
}

export function getProductById(idRequested){
    const reqProduct = products.find(product => product.id === Number(idRequested))
    const promiseProduct = new Promise((resolve, reject)=>{
        setTimeout( ()=>{
            if(reqProduct){
                resolve(reqProduct)
            } else{
                reject("Producto no encontrado")
            }
        }, 500)
    })
    return promiseProduct
}

export function getProductByCategoria(categRequested) {
    const reqProduct = products.filter(product => product.category === categRequested)
    const promiseProduct = new Promise ((resolve, reject) =>{
        setTimeout( ()=>{
            if(reqProduct.length >= 1){
                resolve(reqProduct)
            } else{
                reject("Producto no encontrado")
            }
        }, 500)
    })
    return promiseProduct

}

export default getMockApiData