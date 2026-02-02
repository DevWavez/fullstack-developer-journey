# Week 4 – Task Manager Project

## 📌 Overview

This project is the **capstone of Phase 1**, combining all concepts learned in the previous weeks.  
It is a **fully interactive Task Manager**, where users can:

- Add tasks
- Mark tasks as completed
- Delete tasks
- Edit tasks
- Filter tasks by state (All / Active / Completed)
- Persist tasks using **localStorage**
- Track completed tasks with a counter

The project demonstrates **JavaScript DOM manipulation**, **event handling**, **localStorage usage**, and **dynamic rendering**.

---

## 🗂 Project Structure

week-4-task-manager/
day-1-setup/ # Project setup & basic HTML/CSS structure
day-2-add-tasks/ # Add tasks functionality
day-3-state-render/ # Render tasks dynamically
day-4-localstorage/ # Persist tasks in localStorage
day-5-complete-toggle/# Toggle tasks completed / styling
day-6-filters-counter/# Filter tasks and show completion counter
day-7-polish-refactor/# Edit tasks, delete tasks, final polish

Each day builds on the previous day, gradually adding features and complexity.

---

## ⚙️ Features

1. **Add Tasks**
   - Input field with button (and Enter key support)
   - Tasks stored as objects with unique IDs and `completed` state

2. **Complete & Toggle Tasks**
   - Click a task to mark it as completed
   - CSS `.completed` applies strike-through, gray text, and opacity

3. **Delete Tasks**
   - ❌ Button to remove individual tasks
   - State persisted in `localStorage`

4. **Edit Tasks**
   - Double-click on a task to edit
   - Press Enter or blur to save changes

5. **Filters**
   - View all tasks, only active, or only completed tasks

6. **Counter**
   - Shows number of completed tasks / total tasks dynamically

7. **Persistence**
   - All tasks stored in `localStorage`
   - Tasks remain after page reload

---

## 🛠 Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Browser **localStorage** for state persistence

---

## 💡 Learning Outcomes

- DOM selection, event listeners, and delegation
- Dynamic element creation and updates
- Working with arrays of objects
- Storing and retrieving structured data from `localStorage`
- UX improvements (Enter key support, double-click editing, inline deletion)
- Project structure and progressive feature addition

---

## 📌 Notes

- Designed for **desktop view**
- Fully modular – each day builds on the previous
- Follows clean **Phase 1 / Week 4 structure** for easy navigation
