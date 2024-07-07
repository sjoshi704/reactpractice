import React from 'react'

export default function StockAvailability() {

  var products = [
    { Name: "TV", Price: 5624.00, stock: true },
    { Name: "Mobile", Price: 56245.20, stock: false },
    { Name: "Laptop", Price: 568542.55, stock: true },
    { Name: "Home Theater", Price: 56245.20, stock: false },
    { Name: "Oven", Price: 56245.20, stock: false },
    { Name: "Refrigerator", Price: 56245.20, stock: false },
    { Name: "Washing Machine", Price: 56245.20, stock: false },
  ]

  var Menus=[
    {Category:"Electronic",Products:["Tv","Mobile","Refirgerator",]},
    {Category:"Footwear",Products:["Sport Shoes","Loafters","Sandals"]},
    {Category:" Mens Fashion",Products:["Shirts","Jeans","Trouser"]},
    {Category:"Womens Fashion",Products:["Plazo","Kurti","Sari"]},

];
  return <>
    <div className='text-center bg-danger'>
      <h2 className='bg-danger text-white'> Stocks Availability</h2>
    </div>
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th> Product Name</th>
          <th> Product Price</th>
          <th> Product Availability</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map((item, index) => {
            return <tr key={index}>
              <td> {item.Name}</td>
              <td> {item.Price} <span className='text-success h5 font-weight-bold'> &#8377;</span></td>
              <td>{item.stock ? "Yes" : "No"}</td>
            </tr>

          })
        }
      </tbody>


    </table>
<hr/>

<div class="col-md-4">
 <label className='col-form-label h5 font-weight-bold'> Select Dress</label>
 <select className='form-control'>
 <option disabled> Select Type</option>

 {
  Menus.map((menu)=>{
    return <optgroup key={menu} label={menu.Category}> 
    
    {menu.Products.map((item,index)=>{
      return <option key={index}>{item}</option>
    })}
    
    </optgroup>
  })
 }

 </select>
</div>
  </>
}
