# def add(a,b,c):
#     return a+b+c


# print(add(3,6,3))

def sum_all(*args):
    total = 0
    for num in args:
        total += num
    return total

print(sum_all(3,7,4,6))