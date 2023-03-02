## Aim:
This is a simple guide to Github use and some commands and the expected standards to use for upcoming projects.

## Workflow
From an existing project, we can fork from the browser GUI to usually by default the User dierctory e.g. ../ramirezstefano dir.

Once the project has been forked it can be worked locally without touching the Main in the web (github).


## New Branch
With the forked project we continue to create a Branch with the appropiate name on what we are working, e.g. exNUpdate, Function modiule foo, work on file x...
This is done with the following command

git branch foo

Where foo will be the new branch.

Once the branch is made we can switch to it with the following command:

git switch foo

foo is the new branch just made.

This two lines can be switchd to just:

git checkout -b foo

## Work Upload

When the desired work has been completed and we want to 'save' or upload the new work done to the web as a seperate branch from main.
We do this with the the following piped commands:

git add . && git commit -m "<useful message>"

This adds the saved local files to the current working repository branch foo.

We then 'push' this to the web with the following command:

git push

## Check Upload  

At this point if we check and refresh the git web app we should be able to see the main and the foo branch in the branches sub menu.

We continue to add and commit and push until we are happy for peer review at which point we want to ask from a merge request towards main. 

This part is done in the web GUI. In the pull request tab we select the main repository and we compare it to the commited branch.
  
## Merge and Cleanup

If we are happy we follow though with the merge and follow the wizard until the end.

Towards the end of the GUI Wizard there will be the option to delete the branch, we do this as to not jam up the branches sub tab and thus have a clean product.

OK, so the Main in Github has all the new changes BUT out PC has an out of date main and the extra branch foo that we wont be using anymore. So we go back to th machine main

git checkout main OR git switch main

We can now delete the extra branches that are not main with the alias command:

prune

this command was made with:

git branch | grep -v "main" | xargs git branch -D
  
we then update our machine loaclly with the following command:
  
git pull
  
And we are done! Both the web and the machine locally are synched and updated with the most fresh main project ;)

