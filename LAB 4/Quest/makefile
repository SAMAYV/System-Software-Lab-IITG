CFLAGS=-I.
object= main.o single-player.o multi-player.o AI.o
Quests.c: $(object)
	gcc -o Quest $(object)
	@echo $@ 
	@echo $%
	@echo $<
	@echo $?
	@echo $*
.PHONY: clean samay Quest1
clean: 
	rm Quest $(object)
	@echo 'removed'
samay: 
	@echo 'samay'

