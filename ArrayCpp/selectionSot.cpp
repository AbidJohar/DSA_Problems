#include <iostream>
#include <string>
using namespace std;

 class Person {
   public:
     string name;
     int age;
     Person(){}
     Person(string a, int b) : name(a), age(b){};
 };
     ostream& operator<<(ostream& os, const Person& p) {
    os << "Name: " << p.name << ", Age: " << p.age;
    return os;
     }

int main() {
    
        Person people[3] = {
            Person("Abid", 30),
            Person("Ali", 25),
            Person("Hussain", 50),
        };
    for (int i = 0; i < 3; i++) {
         
        for (int j = i + 1; j < 3; j++) {
            if (people[j].age < people[i].age) {
            Person temp = people[i];
            people[i] = people[j];
            people[j] = temp;
            }
        }
    }
     cout << "Sorted array: "<<endl;
    for (int i = 0; i < 3; i++) {
           
    cout<<people[i]<<" "<<endl;
    }

    return 0;
}