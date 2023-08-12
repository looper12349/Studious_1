const r = () => {
          
    let n = document.getElementById('search-field').value;
    console.log("hello " ,n);
    console.log("hello " ,n);
    
    let p = "electrostatics";
    let py = "python";
    let result = n.toLowerCase().localeCompare(p.toLowerCase() );
    let res = n.toLowerCase().localeCompare(py.toLowerCase() );
    
    if(result === 0 )
    {
      document.getElementById('physics').style.display = 'flex';
      document.getElementById('h').innerHTML= 'ELECTROSTATICS';
      document.getElementById('h').style.display = 'block';
      

      document.getElementById('python').style.display = 'none';
    }

    else if(res === 0)
    {
      document.getElementById('python').style.display = 'flex';
      document.getElementById('physics').style.display = 'none';
      document.getElementById('h').innerHTML= 'PYTHON';
      document.getElementById('h').style.display = 'block';
      document.getElementById('h').innerHTML= 'PYTHON';
    

     

    } 
    else
      {
        document.getElementById('python').style.display = 'none';
        document.getElementById('physics').style.display = 'none';
        document.getElementById('h').style.display = 'none';
      }
    
    


    
   
  } 


