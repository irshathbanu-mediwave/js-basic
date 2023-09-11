let favfruitname = [
  {
    id: "1",
    names: "Sweetsop",
    kg: "1kg",
  },
  {
    id: "2",
    names: "Finger lime",
    kg: "2kg",
  },
  {
    id: "3",
    names: "Passion fruit",
    kg: "3kg",
  },
  {
    id: "4",
    names: "Tangerine",
    kg: "4kg",
  },
  {
    id: "5",
    names: "Hog plum",
    kg: "5kg",
  },

  {
    id: "7",
    names: "	Ice apple",
    kg: "7kg",
  },

  {
    id: "8",
    names: "Cherimoya",
    kg: "8kg",
  },
  {
    id: "9",
    names: "Jackfruit",
    kg: "4kg",
  },
  {
    id: "10",
    names: "Nectarine",
    kg: "10kg",
  },
];
// list of ten item in the first 
// to object in 10 element
function Fruitnamediv(fruits){
    const div=document.createElement('div')
    div.setAttribute('class','card')


    const id=fruits-`${favfruitname['id']}`
    div.setAttribute('id',id)

    const h2=document.createElement('h2')
    h2.innerText=fruits['name'];

    const h3=document.createElement('h3')
    h3.innerText=fruits['kg'];

    const button=document.createElement('button')
    button.setAttribute('id','delete-div')
     
    div.appendChild(h2)
    div.appendChild(h3)
    div.appendChild(button)
    
    for(let i=0; i<favfruitname; i++)
    {
        let result=`${favfruitname[i]['id']} -${favfruitname[i]['names'] } -${favfruitname[i]['kg']}`
         console.log(result);
    }

}

