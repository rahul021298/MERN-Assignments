// JavaScript source code
var longestSubstring="";
function longestToken(str){

	for(i=0;i<str.length;i++){

		if(str[i]!='a' && str[i]!='b'){

			for(j=i+1;j<str.length;j++){

				if(str[j]!='a' && str[j]!='b'){

				continue;
				
				}else{
				
				if(longestSubstring.length < (str.substr(i,j-i).length)){
				longestSubstring = (str.substr(i,j-i));
				}
				
				i=j+1;
				break;
				
				}
			}	
		}else{
			i=i+1;
		}
	}
	console.log(longestSubstring);
} 

longestToken("ababcdababefgababhiab");
document.getElementById("string").innerHTML = "Given string is: ababcdababefgababhiab";
document.getElementById("substring").innerHTML = "Longest substring without a and b is: " + longestSubstring;