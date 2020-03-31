# graphs - basic1-egypt - sample query and algorithm
# - app.py
# - basic test usage for graph 
#   - queries family members and Egypt places..
#   - repeated search for duplication of nodes - needs abstraction...

# imports
from collections import deque

# define graph for family members
graph = {}
graph["me"] = [["emma", "cairo"], "daisy", "yvaine"]
graph["daisy"] = ["rose", "violet"]
graph["emma"] = [["violet", "giza"]]
graph["yvaine"] = ["tristram", "cat"]
graph["rose"] = []
graph["violet"] = []
graph["tristram"] = []
graph["cat"] = []

# check name in graph
def visited_giza(name):
    if "giza" in name:
        return name[0]

def search(name):
    # define and create new queue
    name_queue = deque();
    # add all neighbours of 'me' to queue
    name_queue += graph[name]

    # query the queue while not empty
    while name_queue:
        # get first name from queue
        name = name_queue.popleft()
        # print type for name - i.e. does it have a list with places...
        # print(type(name))
        # check if the current node has visited giza
        if visited_giza(name):
            # print family member who has visited Giza...
            print(name)
            return True
        else:
            # check if name is array or not...
            if (isinstance(name, list)):
                # add just the name to queue...
                name_queue += graph[name[0]]
            else:
                # they haven't visited giza - add neighbour nodes...
                name_queue += graph[name]
    print("no family member has visited Giza...")
    # no family member has visited giza
    return False

search("me")