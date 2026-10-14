function Product(props){
    
    return (
        <div>
            <h1>Product Details</h1>
            <br />

            Product_Title :{props.product_title}
            <br />
            Description : {props.description}
            <br />
            Price :{props.price}
            

        </div>
    )
}

export default Product