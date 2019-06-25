//loop through children of tbody
const children = $('tbody').children();
// console.log(children.forEach)

//convert children to an array
let children_array = [];
for(let i = 0; i < children.length; i++){
  children_array.push(children[i]);
}
//building an array of objects
const items = [];
children_array.forEach(element => {

const rowDetails = {
  name: element.getAttribute('data-name'),
  size: parseInt(element.getAttribute('data-size')),
  time: parseInt(element.getAttribute('data-time')),
  html: element.outerHTML
}
items.push(rowDetails);
});
// console.log(items);

//sort status
const sortStatus = {
  name:'none',//none,up,down
  // size:,
  // time:

}


//sort name ascending order
const sort_name = (items,option) =>{
items.sort( (item1,item2 ) => {
  const name1 = item1.name.toUpperCase();
  const name2 = item2.name.toUpperCase();
  if(name1 < name2){
    return -1;
  }
  if(name1 > name2){
    return 1;
  }
  return 0;
});
if(option ==='down'){
  items.reverse();
}
};


// //sort name decending order
// sort_name_down =(items =>{
// sort_name_up(items);
// items.reverse();
// });

//fill the table body with items
const fill_table_body = items => {
  const content = items.map(element => element.html).join('');
  console.log(content); 
  $('tbody').html(content);
};

//event listeners
document.getElementById('name').addEventListener('click', ()=>{
  if(['none','down'].includes(sortStatus.name)){
    //sort in ascending order
    sortStatus.name = 'up';
    sort_name(items,'up');
    console.log(sortStatus);
  }else if(sortStatus.name === 'up'){
    sortStatus.name = 'down';
    sort_name(items,'down');
    console.log(sortStatus);
  }
  fill_table_body(items);
});