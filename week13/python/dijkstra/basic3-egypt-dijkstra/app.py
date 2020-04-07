# graphs - basic3-egypt-dijkstra - sample query using Dijkstra's algorithm
# - app.py
# - basic test usage for graph with Dijkstra's algorithm

# store already checked nodes - avoid duplicated effort
nodes_checked = []

# graph table
# define graph for locations
graph = {}
# define neighbours and weights - graph start point
graph["cairo"] = {}
graph["cairo"]["giza"] = 60
graph["cairo"]["memphis"] = 20
# update other graph nodes and weights
graph["giza"] = {}
graph["giza"]["saqqara"] = 10
graph["memphis"] = {}
graph["memphis"]["giza"] = 30
graph["memphis"]["saqqara"] = 50
# no current neighbour nodes for saqqara - graph end point
graph["saqqara"] = {}

# cost table - weighted edges from start node
infinity = float("inf")
cost = {}
cost["giza"] = 60
cost["memphis"] = 20
cost["saqqara"] = infinity

# parents table - parent nodes in graph
parents = {}
# define inital parents
parents["giza"] = "cairo"
parents["memphis"] = "cairo"
# parent for end point - updated during execution...
parents["saqqara"] = None

print(graph)
print("initial costs") 
print(cost)

#print(graph["cairo"].keys())
#print(graph["cairo"]["giza"])

# dijkstra's algorithm
# basic test implementation...

def find_low_cost_node(cost):
    low_cost = float("inf")
    low_cost_node = None
    # check each node
    for node in cost:
        # get current cost
        node_cost = cost[node]
        # check if current cost is lowest & hasn't been processed...
        if node_cost < low_cost and node not in nodes_checked:
            # update as current lowest cost node...
            low_cost = node_cost
            low_cost_node = node
    return low_cost_node

# execute check for lowest cost node that has not been processed...
node = find_low_cost_node(cost)
# loop through nodes to check - exit when all nodes are processed
while node is not None:
    node_cost = cost[node]
    # add neighbour nodes to hash table
    neighbours = graph[node]
    # loop through all neighbours of current node
    for neighbour in neighbours.keys():
        # update cost where available
        new_node_cost = node_cost + neighbours[neighbour]
        # check updated cost to see if it's now cheaper
        if cost[neighbour] > new_node_cost:
            # update cost for this node
            cost[neighbour] = new_node_cost
            # current node becomes new parent for this neighbour
            parents[neighbour] = node
    # mark node as now processed...
    nodes_checked.append(node)
    # find next node to process - then loop through again...
    node = find_low_cost_node(cost)
    
print("updated lowest cost from start to each node: ") 
print(cost)