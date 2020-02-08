import time  #built in module for time
#Make sure to include base condition, otherwise the function will call itself infinitely.
def countdown(n):
    #Base condition
    if n <= 0:
        print("Go Go Go...!")
    else:
        print(n)
        time.sleep(1)
        countdown(n-1)
countdown(3)


try:
    num = int(input("Enter a number between 0 and 9:\t")) # \t is a special character for tab-space
    if num % 2 == 0:
        print("{} is Even".format(num))
    else:
        print("{} is Odd".format(num))
except Exception as e:
    print(e)



c = 10  #Verify for other operators
#Another way to write formatted print statement
print("Result is %d" % (c))


#string in list of character
list(greetings)
#String to list of words
#can also split on any character/special-symbol, check documentation
greetings.split()
#joing list of strings into a sentence
#string method
' & '.join(student[4])


