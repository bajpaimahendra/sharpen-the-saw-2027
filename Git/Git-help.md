
##### Frequently used commands

	git status
	git checkout -b  feature1 master 	( Create a new branch from another branch )
	git checkout -- <file-path>		( revert local change)
	git chechout branch-name		( swithch to another branch )
	git git add <file-path> / add . 	( Add one or more files to staging (index) )
	git commit -m'message'			( commit added files )
	git push origin branch-name / git push origin -u branch-name / git push origin -f branch-name
	git merge feature1
	git mergetool


##### Viewing unpushed Git commits

	git log origin/master..HEAD
	
	You can also view the diff using the same syntax
	
	git diff origin/master..HEAD
	
#### delete a Git branch locally

	git branch -d <branch_name>
	git branch -D <branch_name> 	(-D, which is an alias for --delete --force ) 
	

#### delete a Git branch  remotely
	
	git push -d <remote_name> <branch_name>
	git branch -d <branch_name>

##### Create a new branch from another branch
	
	git checkout -b  feature1 master

##### .gitignore is now working


	git rm -r --cached .	( rm all files )
	git add .		( add all files as per new .gitignore )
	git commit -m ".gitignore is now working" ( now, commit for new .gitignore to apply)

##### Track newly create remote branch

	git fetch --all
	git branch --track branch-name origin/branch-name

##### Change origin

	git remote set-url origin https://mahendravrn@bitbucket.org/visitatvishal82/tawarmall.git


##### Operation

	1- git init  or git clone

	2- git status 			( status of current branch )

	3- git fetch origin feature1

	4- git difftool origin/future1   ( check defference from current branch )

	5- git merge origin/future1 ( merge to current branch from remote branch )

	6- git mergetool ( launch merge tool to resalve confilict )

	7- git push <remote> <branch>	( push perticula branch to remote repositry )
		git push origin develop 
		git push -u origin develop (first time only to set upstrem)
	 
	8- git checkout develop  ( swithch to branch )


##### To go back to a certain state of the project, use the git checkout command and provide the commit identifier.

	git log
	git checkout 4ea35ab9d43a8d6521bace280ae24477f799f132

	However, you actually don’t need to use the full length of identifier. Usually the first 5 characters are enough:

	git checkout 8d7e4e8


##### Git log

	git fetch origin
	git log origin/feature1  --oneline   ( log of remote branch )

	git config --global alias.lg "log --graph --abbrev-commit --decorate --pretty=format:'%C(red)%h%C(reset) - %C(cyan)%aD%C(reset)%C(green)(%ar)%C(reset)%n%''         %C(yellow)%d%C(reset)%C(white)%s%C(reset) %C(bold blue)<%an>%C(reset)' --all"




https://dzone.com/articles/top-20-git-commands-with-examples
https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/
https://medium.com/@nendhruv/essential-git-commands-every-developer-should-know-1249d4d597b5
https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html
https://guides.github.com/activities/hello-world/
https://www.youtube.com/watch?v=FyAAIHHClqI
https://www.youtube.com/watch?v=UuHxzM9r-0M

https://www.javatpoint.com/git-log

https://www.edureka.co/blog/common-git-mistakes/

https://stackoverflow.com/questions/1441010/the-shortest-possible-output-from-git-log-containing-author-and-date

git log --pretty=format:"%C(yellow)%h %Cblue%>(12)%ad %Cgreen%<(7)%aN%Cred%d %Creset%s"

git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --"


##################################################

git diff
git diff --<fileName>
git diff HEAD
git diff --staged HEAD / git diff --staged /git diff --cached HEAD / git diff --cached

git reset
git revert


#######################################################################
	What is the HEAD in git ?
	https://stackoverflow.com/questions/2529971/what-is-the-head-in-git
























