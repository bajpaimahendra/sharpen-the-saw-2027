
### initiate git repository
```console

cd <dirName>

git init

git add .  			( adds all the files to staging area.)

git commit -'okay' 		( ** commit all the staged files to local repositry ** )

git remote add origin https://github.com/bajpaimahendra/node-rest-api-1.git  ( add new origin ) 

git push origin master 		( push local branch <master> to remote(github,gitlab))

```

### clone (download) git repository

```console

git clone https://github.com/bajpaimahendra/sharpen-the-saw-27.git

git clone https://github.com/bajpaimahendra/sharpen-the-saw-27.git  <directory-name>

cd <directory-name>
```

### git status

```console

show status of current branch
	- current branch
	- local changes ( unstaged)
	- added         ( staged )
	- local branch is uptodate with remote branch or not
		
```

### --- branching ---

##### Create a new branch( staging ) from another branch ( master ) , No matter what is current branch

    git branch staging master

    OR

    git checkout -b  staging staging

    git push -u origin staging

##### Delete Local Branch

	$  git branch -d <branch_name>	    (-d, which is an alias for --delete )
	$  git branch -D <branch_name> 	    (-D, which is an alias for --delete --force )

	e.g.

	$  git branch -D feature2 
	
##### Delete Remote Branch
	
	$  git push -d <remote_name>  <branch_name>

	e.g.

	$  git push -d origin  feature2





```console

git branch 				( lists only LOCAL branches in the current repository )

git branch -r 				( See only REMOTE branches the current repository )

git branch -a 				( See both LOCAL and REMOTE branches )

** Before we create the branch, we should to check if the branch exists on our remote **

git fetch --all 			( fetches all registered remotes and their branches )

git branch <new-branch-name> 		( creates a new branch taking all the code from current branch )

Create a new branch from another branch, no matter what is current branch

git branch <new-branch> <base-branch> 	e.g.  git branch feature1 master

git branch <new-branch> <tag-name> 	(Create a new branch from specific tag)

```

### git merge <branchName>


https://dzone.com/articles/top-20-git-commands-with-examples

`

