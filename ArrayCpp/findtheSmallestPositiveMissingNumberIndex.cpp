#include <bits\stdc++.h>
using namespace std;
int main(){

   int n;
    cin >> n;
    int arr[n];
    for(int i=1; i<n; i++){
        cin>>arr[i];
    }
    int N = 1e6 +1;
      bool check[N];
      for(int i=0; i<N; i++){
        check[i] = false;
      }

      for( int i=1; i<n; i++){
        if(arr[i] >=0 && arr[i]< N){
            check[arr[i]] = true;
        }
      }
      int ans = -1;

      for( int i=1; i<N; i++){
        if(!check[i]){
            ans = i;
            break;
        }
      }
cout<<"small index:"<<ans;

    return 0;
}