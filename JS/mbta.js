//object literal notation
let Subway = {
    red : ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
    green : ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"],
    orange : ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
}

function isExist(array, station){
  
  for(let i=0 ; i<array.length ; i++){
    if(array[i] == station){
      return 'true';
    }
  }
  
  return 'false';
}

 function stopsBetweenStations(startLine, startStation, endLine, endStation){
   let stops = 0;
   let startLineColor = startLine;
   let endLineColor = endLine;

   if( startLine === 'red' || startLine === 'green' || startLine === 'orange'){
      
       if(endLine === 'red' || endLine === 'green' || endLine === 'orange') {
          
         if(startLine === 'red'){
           startLine = Subway.red;
         } else if(startLine === 'green'){
           startLine = Subway.green;
         } else if(startLine === 'orange'){
           startLine = Subway.orange;
         }

         if(endLine === 'red'){
           endLine = Subway.red;
         }else if(endLine === 'green'){
           endLine = Subway.green;
         }else if(endLine === 'orange'){
           endLine = Subway.orange;
         }

         if(isExist(startLine, startStation) === 'true' && isExist(endLine, endStation) === 'true'){
         

         let start = startLine.indexOf(startStation); 
         let end = endLine.indexOf(endStation); 

         if(startLine === endLine){   
           stops = Math.abs(start - end);

         }else if(startLine !== endLine){
          let indexOfIntersection = startLine.indexOf('Park Street');
          start = Math.abs(start  - indexOfIntersection);

          indexOfIntersection = endLine.indexOf('Park Street');
          end = Math.abs(end - indexOfIntersection);
          
          stops = Math.abs(start + end);
       }


       }else if (isExist(startLine, startStation) === 'false' || isExist(endLine, endStation) === 'false'){
       return "There is no station with that name in this line";
       }

       }else{
       return "There is no end line station with this color";
       }

   }else{
    return "There is no start line station with this color";
   }
   
   let travile = "There was " + stops + " stops, starts from " + startStation + " in " + startLineColor + " line to " + endStation + " in " + endLineColor + " line";
   
   return travile;
}//end stop function.
