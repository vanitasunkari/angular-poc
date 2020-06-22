
https://www.w3schools.com/sql/sql_join.asp


# What is Partition By
PARTITION BY Divides the result set into partitions. The window function is applied to each partition separately and computation restarts for each partition.

```
select SUM(Mark) OVER (PARTITION BY id) AS marksum, firstname from TableA
```
