#include <bits/stdc++.h>
using namespace std;

int main(){
    int n, k;
    cin>>n>>k;

    int problemsSolved = 0;
    int time = 0;
    for (int i = 1; i <= n; i++){
        if (5*i+time+k <= 240){
            problemsSolved++;
            time += 5*i;
        }
    }
    cout<<problemsSolved<<endl;
    return 0;   
}