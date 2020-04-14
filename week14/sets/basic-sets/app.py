# data structure - sets
# - app.py
# - example usage and operations for sets

states_set1 = set(["az", "ca", "id", "mt"])
states_set2 = set(["ca", "nv", "ut", "wa"])

# set union
states_union = states_set1 | states_set2
# set intersection
states_intersect = states_set1 & states_set2
# set difference
states_diff = states_set1 - states_set2

print(states_union)
print(states_intersect)
print(states_diff)