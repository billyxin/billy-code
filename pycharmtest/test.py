class Dog:
    def __init__(self, att):
        self.att = att

    def __call__(self):
        print(self.att)

    def __str__(self):
        return self.att

    __repr__ = __str__


d1 = Dog('dog1')
d2 = Dog('dog2')
d3 = Dog('dog3')

l1 = [d1, d2, d3]

import logging

logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s : %(levelname)s : %(name)s : \n%(message)s'
)
log = logging.getLogger('test_module')

log.debug(l1)


l2 =  l1
log.debug(id(l1))
log.debug(id(l2))

del l1[0]
# l1.clear()
# log.debug()


log.debug(d1)

# log.debug(l1[0])

# log.debug(d1)

# print(d1)
# logging(d1())
# print(l1)
