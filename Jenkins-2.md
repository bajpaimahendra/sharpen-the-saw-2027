https://github.com/repocontec/makeifly-v2/settings/hooks
in above page login with repo owner

Payload URL (to trigger jenkins on git push)

http://41.86.146.88:8080/github-webhook/


New Item -> to create the new Job
<Project first_job>  ->  Build Now to run the particular(selected) job

on server , where only git pull without password
use git clone with token of repo owner
git clone https://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@github.com/repocontec/makeifly-v2.git

### Build Triggers

	GitHub hook trigger for GITScm polling ( job will run when github webhook will called by github )

https://www.youtube.com/watch?v=63HEKFh8T2c&list=PLhW3qG5bs-L_ZCOA4zNPSoGbnVQ-rp_dG&index=7

http://41.86.146.88:8080/restart
$ cd /home/bajpai/Desktop/jenkins-cli/ ( jenkins-cli.jar is downloaded here )
$ java -jar jenkins-cli.jar -s http://41.86.146.88:8080 -auth admin:admin,
java -jar jenkins-cli.jar -s http://localhost:8080 -auth username:password

### Build -> Execute shell Command

	#!/bin/bash
	cd /var/www/html/makeifly-v2
	pwd
	#git config --global --add safe.directory /var/www/html/makeifly-v2
	git checkout master
	git pull origin master
	git status
	#git fetch --all

	https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Jenkins-GitHub-Webhook-example-no-403-crumb-error

	https://www.youtube.com/watch?v=FX322RVNGj4

	https://www.jenkins.io/blog/2021/08/19/git-credentials-binding-work-report/

#### pipelines

	https://www.jenkins.io/pipeline/getting-started-pipelines/



### Delivery Pipeline plugin
https://www.youtube.com/watch?v=ndLbn24OwQg&list=PLhW3qG5bs-L_ZCOA4zNPSoGbnVQ-rp_dG&index=15

### Build Pipeline plugin
https://www.youtube.com/watch?v=zf6ogW0HKLY&list=PLhW3qG5bs-L_ZCOA4zNPSoGbnVQ-rp_dG&index=16

### Build Monitor View plugin


### Extended E-mail Notification plugin



1- The declarative pipeline is defined within a ‘pipeline’ block, while the scripted pipeline is defined within a ‘node’ block.

2- We can refer to the Environment variables in declarative pipeline using the ${} syntax


### difference between freestyle project and pipeline in jenkins
Freestyle Project : 
 	run simple jobs like allowing you to specify the version control system from which you required to extract code and build it and call tests if available.

Pipeline Project :






	


