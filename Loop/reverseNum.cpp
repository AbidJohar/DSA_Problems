#include <iostream>
using namespace std;

int main(){

  int num,reverse;

    cout<<"Enter the number:";
    cin>>num;

    while(0<num){

       int ld = num%10;
       reverse = reverse*10 + ld;
       num = num/10;

    }
    cout<<"reverse of the number is :"<<reverse;

    return 0;
}