# 2017-11-01 Lecture: Git

## Agenda

### Git under the hood


- commits are nodes in a linked list that points backward in time.

```
    O [commit] commit message
    |
    v
    O [commit] commit message
 O [commit] commit message
 |  |
 v /
 O [commit] commit message
 |
 v
 O [commit] commit message
 |
 v
 O [commit] commit message
 |
 v
```

- branches are just pointers to a particular commit
- content-addressed file system https://en.wikipedia.org/wiki/Content-addressable_storage
  - Git is a content-addressable filesystem. Great. What does that mean? It means that at the core of Git is a simple key-value data store. You can insert any kind of content into it, and it will give you back a key that you can use to retrieve the content again at any time. (From: https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)

### Git status, show, log, reflog, sourcetree (etc...)

#### status

#### show

#### log

`git log --oneline --decorate --all --graph`

`--stat` will show a summary of insertion/deletion information for each commit

`-p` will show the full diff patch for each commit

For instance, this is very useful:

`git log --decorate --all --graph -p`


Git pretty formats: https://git-scm.com/docs/pretty-formats
and: https://www.kernel.org/pub/software/scm/git/docs/git-log.html#_pretty_formats

```
git log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
```

Here's my favorite so far:

```
git log --graph --pretty=format:'%C(auto)%h%d %s %C(magenta)(%ci)%Creset %C(bold blue)<%an>%Creset'
```

Add `-p` to see the diff for each commit

```
git log -p --graph --pretty=format:'%C(auto)%h%d %s %C(magenta)(%ci)%Creset %C(bold blue)<%an>%Creset'
```

#### reflog

#### sourcetree


### Git basics: add, commit, (staging area), clone, checkout, push/pull

- staging area
- commit is node in linked list

- what about when push/pull doesn't work?
  - Often you need to pull first, and then rebase
  - pull --rebase
  - fix the thing, and continue

- "working directory"

- You never lose information until garbage collector runs.

### diff


git diff also has a special mode for highlighting changes with much better granularity: `‐‐color-words`. This mode tokenizes added and removed lines by whitespace and then diffs those.

See: https://git-scm.com/docs/git-diff



### fetch

Get the current status of the remote repository from a particular source

```
//To fetch a branch, you simply need to:

git fetch origin

//This will fetch all of the remote branches for you. With the remote branches
//in hand, you now need to check out the branch you are interested in, giving
//you a local working copy:

git checkout -b test origin/test

//Or

git branch test origin/test
```

In newer versions of git:

```
git fetch
git checkout <branch>
```

USE CASES:
New branch on remote

QUESTION:
What does git checkout . do?


### Branching

See your branches:

`git branch -ra`

- Typical use: feature branch. Also development branch(es).
- Many projects keep `master` clean, meaning that commits to master have to pass all the tests and be completed features.
- Merge commit vs. fast-forward merge vs. squash on commit.
  - See: https://legacy-developer.atlassian.com/blog/2014/12/pull-request-merge-strategies-the-great-debate/
  - See: https://www.atlassian.com/git/articles/git-team-workflows-merge-or-rebase

See: https://www.atlassian.com/git/tutorials/comparing-workflows

Q&A:

- dani

### Rebasing

- "Changing the base"
- It's a way to replay commits on top of a particular branch.
- Useful when working solo. Very bad when other people are working on your branch. Why? Well...
-

### Reset

Resets the branch pointer to point to a different commit

`git reset` resets the branch pointer to point to a different commit
`git reset --hard HEAD^` = reset branch pointer to the second to last commit AND update the working directory

#### Comparison to git checkout

Compared to `git checkout`.

Git checkout updates files in the working tree to match the version in the index or the specified tree. If no paths are given, git checkout will also update HEAD to set the specified branch as the current branch.

Good for *viewing* or *visiting*.

### Revert

`git revert <commit>`

Generate a new commit that undoes all of the changes introduced in <commit>, then apply it to the current branch.

Reverting vs. Resetting
It's important to understand that git revert undoes a single commit—it does not "revert" back to the previous state of a project by removing all subsequent commits. In Git, this is actually called a reset, not a revert.



### Changing history



## Q&A

- How to diff
- How to read diff output
- How to handle merge conflicts, and when they happen.
- What happened when you ran `git rebase feature1 -p` while you were on the feature branch??



### Great Resources

David Baumgold - Advanced Git - PyCon 2015 - https://www.youtube.com/watch?v=4EOZvow1mk4&t=573s
