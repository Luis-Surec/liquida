
//----------------------para option  table_data  bg - warning------------------

fetch('listar.php')
.then(res=>res.json())
.then(data=>{
    let str = '';
    data.map(item => {
        str += `<option> ${item.nombreUs} </option>
                `;
    });
   
    document.getElementById("table_data").innerHTML = str;
  
});





//------------------------------- para  tabla_data1 color bg - info--------------------
fetch('listar.php')
.then(res=>res.json())
.then(data=>{
    let str ='';
    data.map(item =>{
        str += `<tr>
<td>${item.codUs}  </td>
<td>${item.nombreUs}</td>
<td>${item.correoUs}  </td>
</tr>
  `
   });
document.getElementById('table_data1').innerHTML = str;
console.log(data);
});