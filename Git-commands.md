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

	git branch 		( lists only LOCAL branches in the current repository )

	Before we create the branch, we want to check if the branch exists on our remote.

	git fetch --all 	( fetches all registered remotes and their branches )

	git branch -r 	( See only REMOTE branches the current repository )

	git branch -a 	( See both LOCAL and REMOTE branches )

	git branch <branchName> 	( creates a new branch taking all the code from current branch )

	git checkout -b  feature1 master 	( Create a new branch from another branch )

	



