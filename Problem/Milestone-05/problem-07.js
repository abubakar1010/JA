const deleteProperty =(arr)=>{
    // Write your code here.
      if(arr[0].hasOwnProperty("fname")){
        delete arr[0]["fname"]
        return "yes"
      }
      else{
        return "No"
      }
    }
    
    let myArr = [
        {
         "fname":'John',
        },'fname'
      ]
    // console.log(deleteProperty([
    //     {
    //      "fname":'John',
    //     },'fname'
    //   ]))

    console.log(Object.keys(myArr[0]));

