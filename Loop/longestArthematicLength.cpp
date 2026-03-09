#include <bits\stdc++.h>

using namespace std;
int main(){

  int n;
  cin>>n;
  int ar[n];
   for ( int i = 0; i < n; i++)
   {
    cin>>ar[i];
   }
   int ans =2;
   int current = 2;
   int pd= ar[1] - ar[0];
   int j=2;
   while(j<n){
  if(pd == ar[j] - ar[j-1]){
     current++;
     ans = current;
  }
  else{
    pd = ar[j]-ar[j-1];
    current =2;
  }
  j++;
   }
cout<<"Length of longest arthimatic array:"<<ans;
    return 0;
}