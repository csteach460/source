# hash table - user accounts
# - app.py
# - basic test usage for user accounts and queries with hash table

# create hash table for address book
user_accounts = dict()

# perform check for passed username
def check_users(name):
    if user_accounts.get(name):
        print("try again - username '" + name + "' already exists...")
    else:
        user_accounts[name] = "active"
        print("user account created...")

# check user accounts
check_users("daisy")
check_users("emma")
check_users("daisy")

# check hash table values...
print("test of users = ", user_accounts)