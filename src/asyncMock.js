const products = [
    {
        "id": "argentina",
        "title": "Camiseta de rugby de Argentina",
        "price": 50,
        "description": "Camiseta deportiva de la seleccion de rugby de Argentina",
        "category": "arg",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "stock": 20
    },
    {
        "id": "nuevaz",
        "title": "Camiseta de rugby de Nueva Zelanda",
        "price": 60,
        "description": "Camiseta deportiva de la seleccion de rugby de Nueva Zelanda",
        "category": "nz",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "stock":10
    },
    {
        "id": "australia",
        "title": "Camiseta de rugby de Australia",
        "price": 70,
        "description": "Camiseta deportiva de la seleccion de rugby de Australia",
        "category": "aus",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "stock": 14
    }
]

export const getProducts=() =>{
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=>prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(prod=>prod.category === categoryId))
        },500)
    })

}


