#include <stdio.h>

void adjustLevel(void) {
	int i = 0;
	int j = 0;
	int counter = 0;
	
	printf("Adjusting levels!\n");
	
	for (i = 0; i < 3; i++)
		for (j = 0; j < 3; j++) {
			counter++;
		}

	printf("counter is %d\n", counter);

  return;
}

/* For debugging purposes
 */
/*
 * void main(void) {
	adjustLevel();
}
*/
