**Why to use Indexes?**

    - There is only one reasons to use Indexing is Just for fast Query.
    - Without Index whole collection will be scanned (COLLSCAN)
    - Index stores sorted field Values.
    - If appropriate index exists, MongoDB performs only index scan (IXSCAN).
    - If speed of data matters to you for query then indexing is for your.
    - If we Arrange Our data in sorted manner we can access it fast, this concepts is apply here also.
    - It has one drawback as the data is in sorted manner, the insertion time complexity will be increased as it has to find it right place to fit.
    -  Default _id Index is unique.
    - So if we Find any data by its object Id then mongodb will not do CollScan as Index is by default Indexes and we can find our data very easily in just one single traversal of documents.
    - so when we create a index it stores as B+ tree, it doesn't sort our documents, it create a separate index in name of field which we want , what it do actually it use pointer to point that location.
    - Indexes are stored in separate document with index value.

**VIST THIS LINK**

    <https://www.cs.usfca.edu/~galles/visualization/BTree.html>
    <https://www.cs.usfca.edu/~galles/visualization/BST.html>



**Find query**
```
db.kittyData.find().pretty()
db.kittyData.find({cat:"National"}).pretty()
db.kittyData.find({cat:"National"}).count()
```

**Create new Index**

        db.collection.createIndex({<keyname> :[-1|1]}, <options>) //options is optional.
        db.kittyData.createIndex({age: 1}) // asc
        db.kittyData.createIndex({name: -1}) // desc

```
db.kittyData.createIndex({cat: 1})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
```


**Return current indexes for certain collection**

```

db.getCollection('collectionName').getIndexes()
or
db.kittyData.getIndexes()

[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_"
        },
        {
                "v" : 2,
                "key" : {
                        "cat" : 1
                },
                "name" : "cat_1"
        }
]
```

**Index Creation Options**

        1. Create index in the background. Other operations will not be blocked.
        - {background:true} // when u want to create Indexes and u have to perform query operation like gate operation then use this other wise it will interrupt your gate operations.
        1. Create unique index
        -  {unique : true}
        3 Specify name for the index // Custom name for indexes. 
        -  {name : "<indexName>"}   



**Example1 : Create Unique index**

```

db.kittyData.createIndex({index: 1},{unique:true})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}

db.getCollection('kittyData').getIndexes()
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_"
        },
        {
                "v" : 2,
                "unique" : true,
                "key" : {
                        "index" : 1
                },
                "name" : "index_1"
        }
]

```

**Example2 : Create Background true**
```

db.kittyData.createIndex({cat: 1},{background:true})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 2,
        "numIndexesAfter" : 3
        "ok" : 1
}

db.getCollection('kittyData').getIndexes()
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_"
        },
        {
                "v" : 2,
                "unique" : true,
                "key" : {
                        "index" : 1
                },
                "name" : "index_1"
        },
        {
                "v" : 2,
                "key" : {
                        "name" : 1
                },
                "name" : "name_1",
                "background" : true
        }
]
```

**Analyze query performance**

        - Returns information about the query
        - db.<collectionName>.explain().<method> 
        - db.<collectionName>.explain("executionStats").<method>


```
db.kittyData.find({cat:"National"}).explain() // IT is a CollectionScan

    - explain() take argument : "queryPlanner" , "executionStats", "allPlaExecution"
    - If we don't pass anyone of them then by default it will be "queryPlanner"

{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "fakeData.kittyData",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "cat" : {
                                "$eq" : "National"
                        }
                },
                "queryHash" : "E4BE777F",
                "planCacheKey" : "E4BE777F",
                "winningPlan" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "cat" : {
                                        "$eq" : "National"
                                }
                        },
                        "direction" : "forward"
                },
                "rejectedPlans" : [ ]
        },
        "serverInfo" : {
                "host" : "DESKTOP-ROTU6D3",
                "port" : 27017,
                "version" : "4.4.5",
                "gitVersion" : "ff5cb77101b052fa02da43b8538093486cf9b3f7"
        },
        "ok" : 1
}


 db.kittyData.find({cat:"National"}).explain('executionStats')
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "fakeData.kittyData",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "cat" : {
                                "$eq" : "National"
                        }
                },
                "winningPlan" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "cat" : {
                                        "$eq" : "National"
                                }
                        },
                        "direction" : "forward"
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 92, // WATCH THIS
                "executionTimeMillis" : 53,
                "totalKeysExamined" : 0,
                "totalDocsExamined" : 50000, // WATCH THIS
                "executionStages" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "cat" : {
                                        "$eq" : "National"
                                }
                        },
                        "nReturned" : 92,
                        "executionTimeMillisEstimate" : 4,
                        "works" : 50002,
                        "advanced" : 92,
                        "needTime" : 49909,
                        "needYield" : 0,
                        "saveState" : 50,
                        "restoreState" : 50,
                        "isEOF" : 1,
                        "direction" : "forward",
                        "docsExamined" : 50000
                }
        },
        "serverInfo" : {
                "host" : "DESKTOP-ROTU6D3",
                "port" : 27017,
                "version" : "4.4.5",
                "gitVersion" : "ff5cb77101b052fa02da43b8538093486cf9b3f7"
        },
        "ok" : 1
}

```

```

 db.kittyData.find({cat:"National"}).explain('executionStats')
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "fakeData.kittyData",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "cat" : {
                                "$eq" : "National"
                        }
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN", // INDEX SCAN
                                "keyPattern" : {
                                        "cat" : 1
                                },
                                "indexName" : "cat_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "cat" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "cat" : [
                                                "[\"National\", \"National\"]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 92, // WATCH THIS
                "executionTimeMillis" : 2,
                "totalKeysExamined" : 92,  // WATCH THIS
                "totalDocsExamined" : 92, // WATCH THIS
                "executionStages" : {
                        "stage" : "FETCH",
                        "nReturned" : 92,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 93,
                        "advanced" : 92,
                        "needTime" : 0,
                        "needYield" : 0,
                        "saveState" : 0,
                        "restoreState" : 0,
                        "isEOF" : 1,
                        "docsExamined" : 92,
                        "alreadyHasObj" : 0,
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "nReturned" : 92,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 93,
                                "advanced" : 92,
                                "needTime" : 0,
                                "needYield" : 0,
                                "saveState" : 0,
                                "restoreState" : 0,
                                "isEOF" : 1,
                                "keyPattern" : {
                                        "cat" : 1
                                },
                                "indexName" : "cat_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "cat" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "cat" : [
                                                "[\"National\", \"National\"]"
                                        ]
                                },
                                "keysExamined" : 92,
                                "seeks" : 1,
                                "dupsTested" : 0,
                                "dupsDropped" : 0
                        }
                }
        },
        "serverInfo" : {
                "host" : "DESKTOP-ROTU6D3",
                "port" : 27017,
                "version" : "4.4.5",
                "gitVersion" : "ff5cb77101b052fa02da43b8538093486cf9b3f7"
        },
        "ok" : 1
}

```

**To find a Regular Expression**

    db.kittyData.find({"owner.firstName" : /mit/i}).count()
    db.kittyData.find({"owner.firstName" : /mitchel/i}).pretty()


**Delete Indexes**

    db.collection.dropIndex({<fieldName>:1})
    db.collection.dropIndexes() // All Indexes drop except _id

