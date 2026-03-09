#include <iostream>
using namespace std;

int main() {
  int a=0,b=1,num,next;
  cout<<"Enter the number:";
  cin>>num;

  cout<<a<<" "<<b<<" ";
  for(int i=3; i<=num; i++){
    next = a+b;
    cout<<next<<" ";
    a=b;
    b=next;

  }
  cout<<endl;
  
    return 0;
}
