let obj = [{
    name:'Sundar Pichai',
    age:48,
    city:'California',
    salary:650000
},
{
    name:'Jeffrey Preston Bezos',
    age:56,
    city:'Seattle',
    salary:818400
},
{
    name:'Vijay Shekhar Sharma',
    age:42,
    city:'Noida',
    salary:3100000,
},
{
    name:'Mukesh Dhirubhai Ambani',
    age:63,
    city:'Mumbai',
    salary:44500000,
},
{
    name:'Thierry Delaporte',
    age:53,
    city:'Bangalore',
    salary:3427000,
}
]
window.onload=function(){
    let initialvalues=[{
    name:'Sundar Pichai',
    age:48,
    city:'California',
    salary:650000
},
{
    name:'Jeffrey Preston Bezos',
    age:56,
    city:'Seattle',
    salary:818400
},
{
    name:'Vijay Shekhar Sharma',
    age:42,
    city:'Noida',
    salary:3100000,
},
{
    name:'Mukesh Dhirubhai Ambani',
    age:63,
    city:'Mumbai',
    salary:44500000,
},
{
    name:'Thierry Delaporte',
    age:53,
    city:'Bangalore',
    salary:3427000,
}
]
 if(sessionStorage.getItem("objects")==null){
    sessionStorage.setItem("objects",JSON.stringify(initialvalues))
}    
}

function displayObjects(objarray){
    let tabledata = " "
    let sno=1
    objarray.forEach(function(objects,index){
        let currentrow = `<tr>
                          <td>${sno}</td> 
                          <td>${objects.name}</td>
                          <td>${objects.age}</td>
                          <td>${objects.city}</td>
                          <td>${objects.salary}</td>
                          <td><button onclick='deleteData(${index})'>Delete</button></td>
                          </tr>`
                          sno++
                          tabledata+=currentrow
    })

    document.getElementsByClassName('tdata')[0].innerHTML = tabledata
}
displayObjects(obj)


function searchcities(){
    let data = document.getElementById('city').value
    // console.log(data)
    let newData = obj.filter(function(objects){
          return(
           objects.city.toUpperCase().indexOf(data.toUpperCase()) !=-1
          )        
    })
    // console.log(newData)
    displayObjects(newData)
}


function searchnames(){
    let data = document.getElementById('name').value
    // console.log(data)
    let newData = obj.filter(function(objects){
          return(
            objects.name.toUpperCase().indexOf(data.toUpperCase()) !=-1
            )        
    })
    // console.log(newData)
    displayObjects(newData)
}

function deleteData(index){
    obj.splice(index,1)
    displayObjects(obj)   
    console.log(obj)
}
