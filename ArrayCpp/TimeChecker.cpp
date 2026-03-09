#include <iostream>
#include <chrono>

using namespace std;

int main() {
    long long int n = 100000;
    int array[n];
    auto start = chrono::high_resolution_clock::now();
    for (int i = 0; i < n; ++i) {
        array[i] = i;
    }
    int sum = 0;
    for (int i = 0; i < n; ++i) {
        sum += array[i];
    }
    auto end = chrono::high_resolution_clock::now();

    // Calculate the duration
    chrono::duration<double> duration = end - start;

    cout << "Time taken: " << duration.count() << " seconds" << endl;
    cout << "Sum: " << sum << endl;  // Just to use the sum and avoid optimization out

    return 0;
}
