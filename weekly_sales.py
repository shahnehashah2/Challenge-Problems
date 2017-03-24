def average_per_week(saleslist):
    total = 0
    for i in saleslist:
        total += i
    return total / len(saleslist)

def total_sales(sales):
    averages = []
    for week in sales:
        averages.append(average_per_week(week))
    return averages

sales = [[1512.30, 1555.72, 1989.77, 2101.33, 1884.45, 1333.33, 1456.23],
[1215.340, 1565.99, 2989.34, 2301.77, 1234.81, 1923.44, 2282.39]]
print(total_sales(sales)))
