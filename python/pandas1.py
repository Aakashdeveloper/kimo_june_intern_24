import pandas as pd

data = {
    'Name':['John','Aline','Karan'],
    "Age":[20,30,35],
    'City':['Delhi','Amsterdam','Paris']
}

df = pd.DataFrame(data)
print(df)

filtered = df[df['Age'] > 30]
print(filtered)