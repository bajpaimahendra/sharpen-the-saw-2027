### initiate git repository

	cd <dirName>

	git init

	git add .  			( adds all the files to staging area.)

	git commit -'okay' 		( commit all the staged files to local repositry )

	git remote add origin https://github.com/bajpaimahendra/node-rest-api-1.git  ( add new origin ) 

	git push origin master 		( push local branch <master> to remote(github,gitlab))

### clone (download) git repository

	git clone https://github.com/bajpaimahendra/sharpen-the-saw-27.git

	git clone https://github.com/bajpaimahendra/sharpen-the-saw-27.git  <directory-name>

	cd <directory-name>

### git status
	
	show status of current branch
		- current branch
		- local changes ( unstaged)
		- added         ( staged )
		- local branch is uptodate with remote branch or not

### branching

	git branch 				( lists only LOCAL branches in the current repository )
	
	git branch -r 				( See only REMOTE branches the current repository )

	git branch -a 				( See both LOCAL and REMOTE branches )

	** Before we create the branch, we should to check if the branch exists on our remote.---

	git fetch --all 			( fetches all registered remotes and their branches )

	git branch <new-branch-name> 		( creates a new branch taking all the code from current branch )
	
	** Create a new branch from another branch, no matter what is current branch
	
	git branch <new-branch> <base-branch> 	e.g.  git branch feature1 master
	
	git branch <new-branch> <tag-name> 	(Create a new branch from specific tag)
	
	

	




