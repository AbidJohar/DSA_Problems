#include <bits\stdc++.h>
using namespace std;
using namespace chrono;

int main(){

    int n;
    cin>> n;
    int arr[n];

    for(int i=0; i<n; i++ ){
        cin>> arr[i];
    }
//    int maxSum =INT_MIN;
//      for(int i=0; i<n; i++){ 
//         for(int j=i; j<n; j++){
//             int sum = 0;
//             for(int k=i; k<=j; k++){
//                 cout<<arr[k]<<" ";
//                  sum += arr[k];
//             }
//             cout<<"       ="<<sum<<endl;
//             maxSum = max(maxSum, sum);
//         }
//      }
//  Its  alternative method with least time complexity O(n) 
  auto stop = high_resolution_clock::now();
   int currentSum = 0;
   int maxSum = INT_MIN;

 for(int i=0; i<n; i++){  // [2, -1, 5]
    currentSum += arr[i];
     if(currentSum <0){
        currentSum=0;
     }
     maxSum = max(maxSum, currentSum);
 }  
 auto start = high_resolution_clock::now();
  auto duration = duration_cast<microseconds>(stop - start);
    cout<<"max sum is"<<maxSum;
 cout << "Time taken is: " << duration.count() << " microseconds" << endl;
     
    return 0;
}