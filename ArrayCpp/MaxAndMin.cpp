#include <bits/stdc++.h>

using namespace std;

int main(){

    int maxNo,minNo,n;
    cout<<"Enter the size of array:";
    cin>>n;
    int array[n];
    for ( int i = 0; i <n; i++)
    {
         cin>>array[i];
    }
    maxNo = array[0];
    minNo= array[0];
    for (int i = 0; i < n; i++)
    { 
         maxNo = max(maxNo, array[i]);
         minNo = min(minNo, array[i]);
     
    }
    cout<<"min number ="<<minNo<<endl;
    cout<<"Max number ="<<maxNo<<endl;
    
    

    return 0;
}