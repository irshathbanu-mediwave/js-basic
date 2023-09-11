let favfruitname = [
  {
    id: "1",
    name: "Sweetsop",
    kg: "1kg",
  },
  {
    id: "2",
    name: "Finger lime",
    kg: "2kg",
  },
  {
    id: "3",
    name: "Passion fruit",
    kg: "3kg",
  },
  {
    id: "4",
    name: "Tangerine",
    kg: "4kg",
  },
  {
    id: "5",
    name: "Hog plum",
    kg: "5kg",
  },

  {
    id: "7",
    name: "	Ice apple",
    kg: "7kg",
  },

  {
    id: "8",
    name: "Cherimoya",
    kg: "8kg",
  },
  {
    id: "9",
    name: "Jackfruit",
    kg: "4kg",
  },
  {
    id: "10",
    name: "Nectarine",
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
     
    div.appendChild(h2)
    div.appendChild(h3)

}

