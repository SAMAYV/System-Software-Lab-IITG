MAKESHELL = /bin/bash
object= main.o single-player.o multi-player.o AI.o
INCLUDE = include
VPATH= include:samay
vpath %.h $(INCLUDE)
vpath %.c samay
Quest: $(object)
	gcc -o Quest $(object)
	@echo 'making of quest is completed'

%.o: %.c defs.h AI.h
	gcc -c $< -I$(INCLUDE)

.PHONY=clean
clean:
	rm *.o 
	@echo 'remove'