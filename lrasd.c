# include <stdio.h>
# include <stdlib.h>
# include <stdbool.h>

int money[] = {3,3,3,3,3,3,3,3,3,3};
bool checkIfWon();
bool hasMoney();
void passMoney();
void winner();
int centerMoney = 0;

typedef enum faciem {LEFT , RIGHT , CENTER , PASS } faces ;
faces die [] = {LEFT , RIGHT , CENTER , PASS , PASS , PASS };


const char *names[] = {"Whoopi", "Dale", "Rosie", "Jimmie", "Barbara", "Kyle", "Raven", "Tony", "Jenny", "Clint"};

int main(void){

   bool gameOver = false;
   unsigned int seed;
   int randomNumber;
   int numPlayers;
