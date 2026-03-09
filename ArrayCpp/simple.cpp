#include <iostream>
using namespace std;

int firstOcc(int arr[], int n, int key) {
    int s = 0;
    int e = n - 1;
    int mid;
    int ans = -1;
    while (s <= e) {
        mid = s + ((e - s) / 2);
        if (arr[mid] == key) {
            ans = mid;
            e = mid - 1;
        } else if (arr[mid] > key) {
            e = mid - 1;
        } else {
            s = mid + 1;
        }
    }
    return ans;
}

int lastOcc(int arr[], int n, int key) {
    int s = 0;
    int e = n - 1;
    int mid;
    int ans = -1;
    while (s <= e) {
        mid = s + ((e - s) / 2);
        if (arr[mid] == key) {
            ans = mid;
            s = mid + 1;
        } else if (arr[mid] > key) {
            e = mid - 1;
        } else {
            s = mid + 1;
        }
    }
    return ans;
}

int main() {
    int key1, n;
    cout << "Enter the size of array: ";
    cin >> n;
    int arr[n];
    cout << "Enter the elements of the array: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    cout << "Enter the key: ";
    cin >> key1;

    int firstIndex = firstOcc(arr, n, key1);
    int lastIndex = lastOcc(arr, n, key1);

     cout<<"first occurence at index:"<<firstIndex;
     cout<<"Second occurence at index:"<<lastIndex;

     int repeatNum = (lastIndex - firstIndex) + 1;
     cout<<"repeat Number is:"<<repeatNum;

    return 0;
}
