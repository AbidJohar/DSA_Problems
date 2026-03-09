#include <bits\stdc++.h>
using namespace std;

 

int main() {
     int n;
      cin >> n;
      int arr[n];
    for(int i=0; i<n; i++){

        cin>> arr[i];
    }

    int minindex = -1;
    int maxPositiveNumber = 1e6 +2;
    for(int i=0; i<n; i++){
      if( arr[i]>0 && arr[i]<maxPositiveNumber){
        maxPositiveNumber = arr[i];
        minindex = i;
      }
    }
   if(minindex != -1){
    cout<<"Small index of positive number is:"<<minindex;
   }
   else{
    cout<<"Small index of positive number not found:";

    }
    return 0;
}
