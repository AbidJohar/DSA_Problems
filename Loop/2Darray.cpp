#include <bits\stdc++.h>
using namespace std;
int main(){

    int n,m,x;
    cin>>n>>m>>x;


    int arr[n][m];

    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            cin>>arr[i][j];
        }
    }
    int found = false;

    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
           if(arr[i][j] == x){
             cout<<"Element found"<<endl;
             found = true;
             break;
           }
           cout<<arr[i][j]<<" ";
        }
      if(found){
        break;
      }
           cout<<endl;
    }


    return 0;
}