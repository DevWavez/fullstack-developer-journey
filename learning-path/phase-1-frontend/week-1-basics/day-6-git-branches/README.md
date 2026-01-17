# Day 6 – Git Branches & Developer Workflow

## 🎯 Goal of the Day

Understand why developers use branches and how they enable safe, structured development
without breaking the stable main version of a project.

---

## 🧠 What is a Branch?

A branch is a separate line of development created from the current state of the project.
It allows working on new features or fixes without affecting the `main` branch.

---

## ❌ Why not work directly on `main`?

- `main` should always be stable and deployable
- Bugs in `main` affect the entire project
- Multiple changes without isolation lead to chaos

---

## ✅ Benefits of Feature Branches

- Clear separation of concerns
- Broken code stays isolated in the branch
- Better overview of changes
- Industry-standard workflow

---

## 🔁 Typical Workflow

1. Start from a clean `main` branch
2. Create a new branch for a feature or fix
3. Work and commit changes in the branch
4. Merge the branch back into `main` later

---

## 🛠️ Essential Git Commands

```bash
git branch
git switch -c feature/example
git switch main
```
