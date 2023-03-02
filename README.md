# GitHub Basic Use Guide Readme

## Aim
This is a simple guide to GitHub use, some commands and the expected standards to use for upcoming projects.

## Workflow
From an existing project e.g. (https://github.com/ramirezStefano/GitHubProj), we can fork from the browser GUI to the default User dierctory e.g. ../ramirezstefano dir. OR a directory can be specified e.g. ../foo/bar/foo

Once the project has been forked it can be worked locally without touching the Main in the web (github). We want to create a branch for the work updates.

## New Branch
We continue to create a Branch with the appropiate name on what we are working, e.g. exNUpdate, Function module foo, work on file x...
This is done with the following command

```shell
git branch foo
```

Where foo will be the new branch.

Once the branch is made we can switch to it with the following command:

```shell
git switch foo
```

foo is the new branch just made.

This two lines can be switchd to just:

```shell
git checkout -b foo
```

## Work Upload

When the desired work has been completed and we want to 'save' or upload the new work done to the web as a seperate branch from main.
We do this with the the following sequential commands simplified as such:

```shell
git add . && git commit -m "<useful message>"
```

This adds the saved local files to the current working repository branch foo.

We then **'push'** this to the web with the following command:
NOTE: the push is done from the current branch to push such branch e.g. git push from ./main not the same as git push from ./foo 

```shell
git push
```

## Check if Work is Uploaded

At this point if we check and refresh the GitHub repository e.g. (https://github.com/ramirezStefano/GitHubProj) we should be able to see the main branch and the foo branch in the branches sub menu.

We continue to add and commit and push until we are happy for peer review, at which point we want to ask from a merge request towards main to the owner of the repository. 

***This part is done in the web GUI. ***

In the pull request tab we select the main repository and ask to compare it to the commited working branch *e.g. branch foo.*
  
## Merge to Main

If we are happy we follow though with the pull request to merge and follow the wizard until the end. If one is not the owner of the repo one can just request not merge unless given privilages.

The owner can then review the pull request and follow though the wizard until finishing with a hopefully sucessfull merge.

## Cleanup

Towards the end of the GUI Wizard, right after merging there will be the option to ***delete the branch***, we do this as to not jam up the branches sub tab and thus have a clean product and nicer presentation.

OK, so the Main in Github has all the new changes *BUT* our machine has an out of date main (the one since we forked :disappointed_relieved: ) and the extra branch foo that we wont be using anymore.

So we go back to the main branch:

```shell
git checkout main
``` 
OR 
```shell 
git switch main
```

We can now delete all the extra branches that are not main with the alias command: (Thx Ed!, set in .zshsrc)

```shell
prune
```

this alias command was made with the piped commands:

```shell
git branch | grep -v "main" | xargs git branch -D
``` 

## Updating Local Machine

With only our old main in the local machine and all the work merged in the main on the web we follow to updating the local main with the one on the web:

```shell
git pull
```
  
And we are done!

Both the web and the local machine main branches are synched right after running the command one would usually want to pull before any work is done to always start with the most recent reviewed version. :space_invader:

