# greedy algorithms - approximation
# - app.py
# - example approximation algorithm
# - used for example set-covering problem...

# set of states for checking base station coverage
# set used to ensure no duplicate entries
states = set(["az", "ca", "id", "mt", "nv", "or", "ut", "wa"])

# define hash table for the stations
base_stations = {}
# add station with state coverage
base_stations["station_one"] = set(["or", "nv", "ca"])
base_stations["station_two"] = set(["wa", "id", "mt"])
base_stations["station_three"] = set(["ca", "az"])
base_stations["station_four"] = set(["id", "nv", "ut"])
base_stations["station_five"] = set(["nv", "ut"])

final_stations = set()

# while states still exist to check...
while states:
    # define current best base station
    best_base_station = None
    # all states per base_station not yet covered...
    states_covered = set()
    # check each station in base stations hash table - find best option
    for base_station, states_per_station in base_stations.items():
        # create an intersection of sets...
        covered = states & states_per_station
        # check set intersection
        if len(covered) > len(states_covered):
            # record best base station option
            best_base_station = base_station
            # update states now covered...
            states_covered = covered

    # update states to cover...
    states -= states_covered
    # add matched base station to final stations for coverage...
    final_stations.add(best_base_station)

print(final_stations)




