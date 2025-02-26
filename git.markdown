// Git Full Cheatsheet

// Basic Commands
// Initialize a new Git repository
git init

// Clone an existing repository
git clone <repository-url>

// Check the status of your repository
git status

// Add changes to the staging area
git add <file>          // Add a specific file
git add .               // Add all changes in the current directory

// Commit changes
git commit -m "Commit message"

// View commit history
git log

// Branching
// Create a new branch
git branch <branch-name>

// Switch to a branch
git checkout <branch-name>

// Create and switch to a new branch
git checkout -b <branch-name>

// Merging
// Merge a branch into the current branch
git merge <branch-name>

// Deleting branches
git branch -d <branch-name> // Delete a branch

// Remote Repositories
// Add a remote repository
git remote add <name> <url>

// View remote repositories
git remote -v

// Push changes to a remote repository
git push <remote> <branch>

// Pull changes from a remote repository
git pull <remote> <branch>

// Stashing Changes
// Stash changes in the working directory
git stash

// Apply stashed changes
git stash apply

// Viewing stashed changes
git stash list

// Tags
// Create a new tag
git tag <tag-name>

// Push tags to remote
git push <remote> --tags

// Undoing Changes
// Unstage a file
git reset <file>

// Revert a commit
git revert <commit-id>

// Reset to a previous commit
git reset --hard <commit-id>

// Configuration
// Set your username
git config --global user.name "Your Name"

// Set your email
git config --global user.email "you@example.com"

// Viewing Configuration
git config --list

// Aliases
// Create a shortcut for a command
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

// More Advanced Commands
// Cherry-picking a commit
git cherry-pick <commit-id> // Apply the changes from a specific commit

// Rebase
git rebase <branch-name> // Reapply commits on top of another base tip

// Viewing Differences
git diff                  // Show changes between working directory and index
git diff <commit-id>      // Show changes between a commit and the working directory

// Cleaning Up
git clean -f              // Remove untracked files
git clean -fd             // Remove untracked files and directories

// Viewing Branches
git branch                // List all branches
git branch -a             // List all branches, including remote

// Fetching Changes
git fetch <remote>        // Fetch changes from a remote repository without merging

// Resetting to a Specific Commit
git reset --soft <commit-id> // Reset to a specific commit, keeping changes in the index
git reset --mixed <commit-id> // Reset to a specific commit, keeping changes in the working directory

// Viewing Commit Details
git show <commit-id>      // Show details of a specific commit

// Working with Remotes
// Rename a remote
git remote rename <old-name> <new-name>

// Remove a remote
git remote remove <name>

// Fetch all branches from a remote
git fetch --all

// Pull changes from the current branch's upstream
git pull

// Push changes to the upstream branch
git push

// Viewing Differences Between Branches
git diff <branch1>..<branch2> // Show differences between two branches

// Interactive Staging
git add -p                  // Stage changes interactively

// Viewing the Commit Graph
git log --graph --oneline --all // View a graphical representation of the commit history


