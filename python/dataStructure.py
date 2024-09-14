
from ipaddress import collapse_addresses
from typing import Dict, MutableMapping


List = []
Tuple = ()
Set = {}
Dictionaries =  {"name":"John"}

List 
> Mutable collections of Item
> Allow Duplicate Element
> Element Can be of different data types


Tuple
> immutable
> order collaction
> fixeds


Set
>> Mutable
>> Unique

Dict
> mutable
> key value

cars = ['Audi','BMW','Merc']


>>> cars = ['Audi','BMW','Merc']
>>> type(cars)
<class 'list'>
>>> cars = ['Audi','BMW','Merc','BMW']
>>> type(cars)

<class 'list'>
>>> cars[0]
'Audi'
>>> cars[1]
'BMW'
>>> cars = ['Audi','BMW','Merc','Volve']
>>> cars[-1]
'Volve'
>>> cars[1:3]
['BMW', 'Merc']
>>> cars[:3]
['Audi', 'BMW', 'Merc']
>>> cars[3:]
['Volve']
>>> cars[::2]
['Audi', 'Merc']
>>> cars = ['Audi','BMW','Merc','Volve','Skoda','Woxva']
>>> cars[::2]
['Audi', 'Merc', 'Skoda']
>>> cars[::3]
['Audi', 'Volve']
>>> cars.append('Kia')
>>> cars
['Audi', 'BMW', 'Merc', 'Volve', 'Skoda', 'Woxva', 'Kia']
>>> cars.insert(3,'Maserati')
>>> cars
['Audi', 'BMW', 'Merc', 'Maserati', 'Volve', 'Skoda', 'Woxva', 'Kia']
>>> cars.remove('Skoda')
>>> cars
['Audi', 'BMW', 'Merc', 'Maserati', 'Volve', 'Woxva', 'Kia']
>>> cars.pop()
'Kia'
>>> cars.index('Volve')
4
>>> cars.index('BYD')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: 'BYD' is not in list
>>> cars.reverse()
>>> cars
['Woxva', 'Volve', 'Maserati', 'Merc', 'BMW', 'Audi']
>>> caes.sort()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'caes' is not defined
>>> cars.sort()
>>> cars
['Audi', 'BMW', 'Maserati', 'Merc', 'Volve', 'Woxva']
>>> 


Tuple
> immutable
> order collaction
> fixeds

>>> fruits = ("Apple","Orange","Mango")
>>> fruits
('Apple', 'Orange', 'Mango')
>>> type(fruits)
<class 'tuple'>
>>> fruits = ("Apple","Orange","Mango")
>>> 
>>> fruits[1]
'Orange'
>>> fruits[1:]
('Orange', 'Mango')
>>> fruits[1:2]
('Orange',)
>>> a = (1,2,3)
>>> b = (4,5,6)
>>> a = a+b
>>> a
(1, 2, 3, 4, 5, 6)
>>> len(a)
6
>>> fruits.index('Banana')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: tuple.index(x): x not in tuple
>>> fruits.index('Apple')
0
>>> 

SETS
>> Mutable
>> Unique

mySet = {1,2,3,4}
>>> mySet = {1,2,3,4}
>>> type(mySet)
<class 'set'>
>>> mySet.add('Test')
>>> mySet
{1, 2, 3, 4, 'Test'}
>>> list = [1,3,5,3,2,6,8]
>>> Set(list)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'Set' is not defined
>>> a = set(list)
>>> a
{1, 2, 3, 5, 6, 8}
>>> 


Dict

mydict = {
    "name":"Sarah",
    "age":25,
    "city":"Amsterdam"
}

>>> mydict = {
...     "name":"Sarah",
...     "age":25,
...     "city":"Amsterdam"
... }
>>> mydict['name']
'Sarah'
>>> mydict['email']="a@a.com"
>>> mydict
{'name': 'Sarah', 'age': 25, 'city': 'Amsterdam', 'email': 'a@a.com'}
>>> mydict.pop("age")
25
>>> mydict
{'name': 'Sarah', 'city': 'Amsterdam', 'email': 'a@a.com'}
>>> mydict.clear()
>>> mydict
{}
>>> 