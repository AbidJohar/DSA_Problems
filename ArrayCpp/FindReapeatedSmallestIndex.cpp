#include <bits\stdc++.h>
using namespace std;

int main(){
    int n;
     cin >> n;
     int a[n];
     for(int i=0; i < n; i++){
        cin >> a[i];
     }
      int N = 10e4;
      int iIndex[N];
     for(int i=0; i < N; i++){
        iIndex[i]=-1;
     }

     int minIndex = INT_MAX;
     for(int i=0; i<n; i++){

        if(iIndex[a[i]] != -1){
            minIndex = min(minIndex, iIndex[a[i]]);
        }
        else{
            iIndex[a[i]] = i;
        }
     }
     if(minIndex == INT_MAX){
        cout<<"not repeat number exist"<<endl;
     }
      else{
        cout<<"Smallest index of number repeatation:"<<minIndex +1<<endl;
      }
      
     
    return 0;
}