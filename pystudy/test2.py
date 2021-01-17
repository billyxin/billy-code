from multiprocessing import Process, Pool, Queue
import os,sys
import random
import time
import subprocess


def task(name):
	print('task name: %s, pid: %s' % (name, os.getpid()))
	start = time.time()
	time.sleep(random.random())
	end = time.time()
	use_time = end - start
	re = 'task name: {0} used time: {1:0.2f}'.format(name, use_time)
	# print(re)
	# print('task name: %s used time: %0.2f' % (name, use_time))
	return re

def pt(str):
	print('this is a process: %s -> time: -> %s' % (str, time.time()))


def write(q):
	for x in range(10):
		print('queue put value: %d' % x)
		q.put(x)
		time.sleep(random.random())


def read(q):
	print('read from queue. my process: %s' % os.getpid())
	while 1:
		v=q.get(True)
		print('get value from queue: %s' %v)


if __name__ == '__main__':
	q = Queue()
	# pw = Process(target=write,args=(q,))
	# pr = Process(target=read,args=(q,))

	# pw.start()
	# pr.start()
	# pw.join()
	# pr.terminate()

	# subprocess.run('ping 192.168.3.1',shell=False)

	# subprocess.call(['chcp 65001'])
	# p = subprocess.Popen(['ping', '192.168.3.1'], stdin=subprocess.PIPE, stdout=sys.stdout, stderr=subprocess.PIPE)
	# output, err = p.communicate(b'\n')
	# print(output.decode('utf-8'))1	
	# print('exit code:', p.returncode)
	# # s = subprocess.call(['ping','192.168.3.1'])
	# # print('exit code :', s)
	# print('parent process %s' % os.getpid())
	pool = Pool(50)
	for i in range(50):
		pool.apply_async(task,args=(i,),callback=lambda x: print('callback'+x))
	print('waiting...')
	pool.close()
	pool.join()
	print('end..')
	# p = Process(target=task, args=('myprocess name',))
	# p.start()
	# p.join()
	# print('end')
