import axios from 'axios'



export default (type,url,params,callback) =>{
  if(type=="get"){
    axios.get(url,{
      params:params
    }).then(function (response) {
      //console.log(response);
      if(response.status==200){
        callback(response.data);
      }
    })
      .catch(function (error) {
        console.log(error);
      });
  }else{
    axios.post(url,{
      data:params
    }).then(function (response) {
      //console.log(response);
      if(response.status==200){
        callback(response.data);
      }
    })
      .catch(function (error) {
        console.log(error);
      });
  }
}

