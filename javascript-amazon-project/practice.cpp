#include <iostream>
using namespace std;

int main(){
    int n;
    cin >> n;
    int home[n];
    int host[n];
    for(int i = 0; i < n; i++){
        cin >> home[i] >> host[i];
    }

    int count = 0;

    for(int i = 0; i < n; i++){
        for (int j = 0; j < n; j++){
            if (home[i] == host[j]){
                count++;
            }
        }
    }
    
    cout<<count;
}