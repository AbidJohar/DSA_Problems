#include <bits/stdc++.h>

using namespace std;

int main(){

    int n,key;
   
    int array[n];
    cin>>n;
    for ( int i = 0; i <n; i++)
    {
         cin>>array[i];
    }
     //5 3 2 7 
     for(int i = 0; i<n; i++){
       for(int j=i+1; j<n; j++){
           if(array[j]<array[i]){
            int temp= array[j];
            array[j] = array[i];
            array[i] = temp;
           }
       }

     }
     for(int i=0; i<n; i++){
        cout<<array[i]<<" ";
     }

    return 0;
}