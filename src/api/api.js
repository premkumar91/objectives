export let fetchObjectives = function(){
  return new Promise((resolve,reject)=>{
    fetch('https://okrcentral.github.io/sample-okrs/db.json').then((response)=>{
        resolve(response.json())
      //console.log('response',response.json());
    }).catch((error)=>{
      console.log('error');
    })  
  })
}