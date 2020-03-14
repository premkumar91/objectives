import _ from 'lodash'
export const utils = {
  mapParentChildObjective:function(data){
    //filter child items
    let hashItems,childItems,parentChildItems={};
    if(data && data.data){
      hashItems = _.groupBy(data.data,(item)=>{
        return item.id;
      });
      childItems = _.filter(data.data,(d)=>{return d.parent_objective_id !== ""});
      childItems.map((childItem)=>{
        if(hashItems.hasOwnProperty(childItem.parent_objective_id)){
          if(parentChildItems.hasOwnProperty(childItem.parent_objective_id)){
            parentChildItems[childItem.parent_objective_id].childItems = parentChildItems[childItem.parent_objective_id].childItems || [];  
          }else{
            parentChildItems[childItem.parent_objective_id] =  hashItems[childItem.parent_objective_id][0];
            parentChildItems[childItem.parent_objective_id].childItems = [];
          }
          parentChildItems[childItem.parent_objective_id].childItems.push(childItem);
          //parentChildItems[childItem.parent_objective_id] =  hashItems[childItem.parent_objective_id][0];
          //parentChildItems[childItem.parent_objective_id].childItem = childItem;
        }
      })
      //console.log('parent-child items',parentChildItems)
      return parentChildItems;
    }
    return [];
  }
}