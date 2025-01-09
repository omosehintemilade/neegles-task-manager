# Task Manager Dashboard

A simple and intuitive Kanban-style task management dashboard built with React, Vite, and TailwindCSS.

## Features

- Kanban board with three columns: Pending, Ongoing, and Completed
- Task filtering by status or priority
- Dark mode / Light mode toggle
- Responsive design for desktop and mobile devices

## Technologies Used

- React
- Vite
- TailwindCSS
- TypeScript
- lucide-react (for icons)

## Setup and Installation

Clone the repository:

```
git clone https://github.com/omosehintemilade/neegles-task-manager.git
```

Install dependencies:

```
npm install
```

Start the server:

### In development mode

```
npm run dev
```

then in another shell (still in the same directory)

```
npm run buildcss:watch
```

> **_NOTE:_** This command runs tailwind css in watch mode so no restart is needed after changes

### In production mode

```
npm run build
```

To preview the application after a successful build, run

```
npm run preview
```
