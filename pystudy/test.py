#%%
def log(fn):
        # def wrapper(*argv, **kws):
        print('start go log.')
        #     return fn(*argv, **kws)
        print('log end.')
        return fn


class animal(object):
    def __init__(self, name):
        self.name = name

    # def log(fn):
    #     def wrapper(*argv, **kws):
    #         print('start go log.')
    #         return fn(*argv, **kws)
    #         print('log end.')
    #     return wrapper

    @log
    def aname(self, subname):
        print('print name is:', self.name + '---' + subname)
        return self.name

    def bite(self, words):
        print(words)

    def __str__(self):
        return 'the name is: ' + self.name


dog = animal('wangwang')
print(dog)
dog.bite('gogogo')
n = dog.aname('mysub...........')
print(n)
print('*'*28)
print(dir(animal))

dir(animal)
# ['__class__',
#  '__delattr__',
#  '__dict__',
#  '__dir__',
#  '__doc__',
#  '__eq__',
#  '__format__',
#  '__ge__',
#  '__getattribute__',
#  '__gt__',
#  '__hash__',
#  '__init__',
#  '__init_subclass__',
#  '__le__',
#  '__lt__',
#  '__module__',
#  '__ne__',
#  '__new__',
#  '__reduce__',
#  '__reduce_ex__',
#  '__repr__',
#  '__setattr__',
#  '__sizeof__',
#  '__str__',
#  '__subclasshook__',
#  '__weakref__',
