#include <bits/stdc++.h>

using namespace std;

int linearSearch(int array[],int n, int key){

    for (int i = 0; i < n; i++)
    {
        if(array[i] == key)
        return i;
    }
    return -1;
}

int main(){

    int n,key;
   
    int array[n];
    for ( int i = 0; i <n; i++)
    {
         cin>>array[i];
    }
    cin>>key;

    cout<<linearSearch(array,n,key);

    return 0;
}