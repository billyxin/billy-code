# try:
# 	print('try...')
# 	i = 20/0
# 	print(i)
# # except ZeroDivisionError as e:
# # 	print('error',e)
# except ValueError as v:
# 	print('error:',v)
# else:
# 	print('everthing good...')
# finally:
# 	print('finally...')
#%%
import logging

def pr():
	i=20/0
	print(i)
	print('thxxxxx')

def main():
	try:
		pr()
	except Exception as e:
		logging.exception(e)
main()

print('gogogogo')