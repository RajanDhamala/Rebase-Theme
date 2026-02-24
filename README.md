# Git Rebase Learning Repository

This repository is dedicated to learning and practicing **Git Rebase** in a structured and practical way.

---

## Objective

The goal of this repository is to:

- Understand what `git rebase` is
- Learn the difference between merge and rebase
- Practice rebasing branches
- Handle rebase conflicts properly
- Use interactive rebase
- Squash and edit commits
- Maintain a clean commit history

---

## What is Git Rebase?

`git rebase` is a Git command that moves or reapplies commits from one branch onto another branch.

It helps to:

- Keep a linear commit history
- Avoid unnecessary merge commits
- Clean up commit structure before merging
- Maintain a cleaner project timeline

---

## Merge vs Rebase

### Git Merge
- Preserves complete branch history
- Creates a merge commit
- Keeps branch structure visible

### Git Rebase
- Rewrites commit history
- Creates a clean, linear history
- Does not create an extra merge commit

---

## Basic Workflow

### 1. Create a new branch

```bash
git checkout -b feature-branch
