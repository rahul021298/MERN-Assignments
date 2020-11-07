function createTable()
{
row = window.prompt("Input number of rows", 1);
col = window.prompt("Input number of columns",1);

 for(var r=0;r<parseInt(row);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(col);c++)
    {
     var y=  x.insertCell(c);
     y.innerHTML="cell "+r+c;
    }
   }
}