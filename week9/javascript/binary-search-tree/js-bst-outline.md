### Readme - Binary Search Tree

Basic logic outline of implementing a binary search tree (BST) in JavaScript.

#### Contents
* intro
* logic outline
* analysis

#### Contents

#### Logic outline
* Symbol-table = Map collection
* private inner scoped function
  * define nodes in the binary search tree
  * each node contains a key, a value, a left link, a right link, a count of nodes...
  * left link points to a BST for nodes with smaller keys
  * right link points to a BST for nodes with larger keys
  * instance variable for a node `n`, gives the node count in the subtree - rooted in the node...
* search - recursive search algorithm
  * search for a key in BST
  * if tree is empty - search hit missed (empty result)
  * if search key matches root node - search complete & result returned
  * if no key found - continue search recursively down appropriate subtree
  * recursive `get()` method implements algorithm directly
    * takes a node (root of subtree) as first argument
    * takes a key as second argument
    * starts with root of BST and search key
  * search algorithm starts at root & keeps checking next node values, descending into subtrees where necessary...
* insert - similar to search algorithm
  * search for a key not in current BST - ends at `null` link
  * add new key/value to this null link in BST
  * recursive `put()` method uses similar logic to search
    * if tree (root node) is empty - create a new tree
      * new node with key/value
    * if search key is less than root - set node in left subtree
    * if search key is greater than root - set node in right subtree

#### Analysis

* performance depends on the shape of the tree
  * shape is dependent upon order of insertion