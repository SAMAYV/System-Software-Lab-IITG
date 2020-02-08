#!/usr/bin/env python3
import pickle
dict_={1:"a",2:"b"}
out=open("file","wb")
pickle.dump(dict_,out)
out.close()
out1=open("file","rb")
final=pickle.load(out1)
print(final)
