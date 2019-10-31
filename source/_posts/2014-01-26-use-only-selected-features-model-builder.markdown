---
title: Use Only Selected Features in Model Builder
date: 2014-01-26 21:00:00 Z
tags:
- esri
layout: post
---
This little trick came from GIS stack exchange. To run a model using only selected features, open your model and in the model builder window right click and select 'Model Only Tools/Calculate Value'. In the 'Expression' box type:
```
hasSelection ("%your input layer here%")
```

Then in the 'Code Block' type:
```javascript
def hasSelection(layer):
    desc = arcpy.Describe(layer)
    fidset = desc.FIDSet
    if fidset =="":
        return "False"
    else:
        # A selection exists so OK to execute
        return "True"
```
Finally the 'Data type' should be set to Boolean and be sure to save your model.

Now when you run your model you do not need to set up various definition queries, you just need to select the features you want to run your model on. This works well in tandem with the iterate features using selection tool.
