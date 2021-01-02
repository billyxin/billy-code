#!/usr/bin/env python
# coding: utf-8

# In[1]:

import sys

def printr(str):
	r = str.encode(encoding='utf-8')
	print(r)
	
print('这里是一个exe文件，哈哈')


# In[3]:


print('nice'.center(20,'-'))

print(sys.argv)


a=100;
print(a)

while a<200:
	print (a)
	a+=20


# while 1:
# 	a = input('inputs:')
# 	print(a)