#include<stdio.h>
#include "defs.h"
  
int main(int argc, char* argv[]) {

	/* One deducted as the first argument
	* is the executable's name.
	*/
	int no_of_players = (argc - 1); 

	if (no_of_players == 1) {
		invokeSinglePlayerMode();
	} else if (no_of_players > 1) {
		invokeMultiPlayerMode();
	}

    return 0; 
} 

