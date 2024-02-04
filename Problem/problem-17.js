const findTheMovie = (movieTitle, movieYear, arrOfMovies) =>{
    //write your code here
      for ( let i = 0; i < arrOfMovies.length; i++){
      if( arrOfMovies[i]["title"] === movieTitle && arrOfMovies[i]["year"] === movieYear ){
        return arrOfMovies[i]
      }
        }
    //don't forget to write return
    }
    
    console.log(findTheMovie('Star Wars',  1977,  [
            {
                "title":'Star Wars',
                "director":'George Lucas',
                "year":1977
            },
                       
            {
                "title":'The  Dark Knight',
                "director":'Christopher Nolan',
               " year":2008
            }
        ]))