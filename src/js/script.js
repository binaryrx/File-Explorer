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
  name:'none',  //none,up,down
  size:'none',  //none,up,down
  time:'none'   //none,up,down

}


//sort name ascending order
const sort = (items,option,type) =>{
  items.sort( (item1,item2 ) => {
    let value1;
    let value2;
    if(type === 'name'){
      value1 = item1.name.toUpperCase();
      value2 = item2.name.toUpperCase();
      
    }else if(type === 'size'){
      value1 = item1.size;
      value2 = item2.size;
    }else{
      value1 = item1.time;
      value2 = item2.time;
    }
    if(value1 < value2){
      return -1;
    }
    if(value1 > value2){
      return 1;
    }
    //equal values
    return 0;
  });

  //reverse the array if the option is down
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
  // console.log(content); 
  $('tbody').html(content);
};
sortStatus.name = 'up';
sort(items,'up','name');

//event listeners
document.getElementById('table_head_row').addEventListener('click', event => {
    if(event.target){
     //clear icons
     $('ion-icon').remove();
     if(['none','down'].includes(sortStatus[event.target.id])){
       //sort in ascending order
       sortStatus[event.target.id] = 'up';
       sort(items,'up',event.target.id);
       //add icon 
       // event.target.innerHTML -= ' Down';
       event.target.innerHTML += ' <ion-icon name="arrow-dropup"></ion-icon>';
       
       
     }else if(sortStatus[event.target.id] === 'up'){
       sortStatus[event.target.id] = 'down';
       sort(items,'down',event.target.id);
       //add icon
       // event.target.innerHTML -= ' Up';
       event.target.innerHTML += ' <ion-icon name="arrow-dropdown"></ion-icon>';
       
     }
     fill_table_body(items);
      


    }
});

// document.getElementById('name').addEventListener('click', ()=>{
  
// });