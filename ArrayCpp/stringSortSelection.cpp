#include <iostream>
#include <string>
using namespace std;
int main() {
    // Initialize the array of strings
     string arr[] = {"banana", "apple", "orange", "mango"};
    int size = sizeof(arr) / sizeof(arr[0]);

    // Print the original array
     cout << "Original array: ";
    for (int i = 0; i < size; ++i) {
         cout << arr[i] << " ";
    }
     cout <<  endl;

    // Selection Sort Algorithm
    for (int i = 0; i < size - 1; ++i) {
         
        for (int j = i + 1; j < size; ++j) {
            if (arr[j] < arr[i]) {
            string temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            }
        }
    }
    
     cout << "Sorted array: ";
    for (int i = 0; i < size; ++i) {
         cout << arr[i] << " ";
    }
     cout <<  endl;

    return 0;
}