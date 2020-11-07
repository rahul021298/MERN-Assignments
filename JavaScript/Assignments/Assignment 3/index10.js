function person(fname,lname,age,skills,dateofbirth,address,married,profession)
{
this.fname=fname;
this.lname=lname;
this.age=age;
this.skills=skills;
this.dateofbirth=dateofbirth;
this.address=address;
this.married=married;
this.profession=profession;
}
amithab=new person("amithab","bachan",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sr analyst")

abhisheik=new person("abhisheik",amithab.lname,21,"HTML","08/06/1997",amithab.address,"false","jr analyst")

aaradhya = new person("aaradhya",abhisheik.lname,12,"singing","00/00/0000",amithab.address,"false","just a kid")
print=function()
{
console.log(amithab);
console.log(abhisheik);
console.log(aaradhya);
}();