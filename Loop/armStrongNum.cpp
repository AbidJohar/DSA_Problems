 #include <iostream>
 #include <math.h>

using namespace std; 

int main(){
  
  int num,sum=0;
   cout<<"Enter the number:";
   cin>>num;
   int gennum = num;
   while(num>0){
   int ld = num%10;
    
    sum += pow(ld,3);
    num=num/10;
    
   }
   if(sum==gennum){
    cout<<"It is a armstrong number";
   }else{
    cout<<"It is not a armstrong number";

   }

    return 0;
}