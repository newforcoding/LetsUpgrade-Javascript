const obj = [{
    name:'Ritesh Agarwal',
    age:26,
    country:'India',
    hobbies: ['Travelling','Driving']
},
{
    name:' Deepanjali Dalmia',
    age: 26,
    country:'India',
    hobbies: ['social working','health awareness']
},
{
    name:'Sundar Pichai',
    age: 48,
    country:'India',
    hobbies: ['development','exploring new tech']
},
{
    name:'Mark Zuckerberg',
    age: 36,
    country:'United State',
    hobbies: ['educating','internet entrepreneur']
},
{
    name:'Satya Nadella',
    age: 53,
    country:'United States',
    hobbies: ['software engiering','Reading Books']
},
];

obj.forEach(function(objects){
    if(objects.age <= 30 || objects.country === 'India') 
    console.log(objects)
})

