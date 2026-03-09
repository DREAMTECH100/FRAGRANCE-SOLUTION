import { useEffect, useState } from "react";

function Products(){

const [products,setProducts] = useState([]);

useEffect(()=>{

fetch("http://localhost:5000/api/products")
.then(res=>res.json())
.then(data=>setProducts(data))

},[])


const deleteProduct = async(id)=>{

await fetch(`http://localhost:5000/api/products/${id}`,{
method:"DELETE"
})

setProducts(products.filter(p=>p._id !== id))

}


return(

<div style={{padding:"40px"}}>

<h1>Products</h1>

<table border="1" cellPadding="10" style={{marginTop:"20px"}}>

<thead>

<tr>
<th>Name</th>
<th>Price</th>
<th>Category</th>
<th>Stock</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{products.map(product=>(

<tr key={product._id}>

<td>{product.name}</td>
<td>₦{product.price}</td>
<td>{product.category}</td>
<td>{product.stock}</td>

<td>
<button onClick={()=>deleteProduct(product._id)}>
Delete
</button>
</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

export default Products