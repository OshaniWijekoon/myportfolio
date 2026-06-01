import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Multi Todo App',
    description: 'A sleek and user-friendly React todo application with multiple pages, featuring dark mode, task completion animations, and intuitive task management for an enhanced productivity experience.',
    tech: ['React', 'JavaScript', 'CSS'],
    type: 'Individual',
    github: 'https://github.com/OshaniWijekoon/multi-todo-app',
    live: '',
    color: '#e8eef7',
  },
  {
    id: 2,
    title: 'React Quiz App',
    description: 'A simple and interactive React quiz application with a modern UI, allowing users to test their knowledge across various topics.',
    tech: ['React', 'JavaScript', 'CSS'],
    type: 'Individual',
    github: 'https://github.com/OshaniWijekoon/react-quiz-app',
    live: '',
    color: '#e8eef7',
  },
  {
    id: 3,
    title: 'GitHub Profile Analyzer',
    description: 'A web tool that analyzes and visualizes GitHub user profiles, displaying repositories, stats, and activity in a clean dashboard.',
    tech: ['CSS', 'JavaScript', 'GitHub API'],
    type: 'Individual',
    github: 'https://github.com/OshaniWijekoon/github-profile-analyzer',
    live: '',
    color: '#e8eef7',
  },
  {
    id: 4,
    title: 'Small CRUD App',
    description: 'A full-stack CRUD application demonstrating create, read, update, and delete operations with a clean JavaScript interface.',
    tech: ['JavaScript', 'Node.js', 'MongoDB'],
    type: 'Individual',
    github: 'https://github.com/OshaniWijekoon/Small-Crud-App',
    live: '',
    color: '#e8eef7',
  },
  {
    id: 5,
    title: 'Playwright Testing — IT3040',
    description: 'University assignment implementing automated end-to-end testing using Playwright framework for web application quality assurance.',
    tech: ['JavaScript', 'Playwright', 'Testing'],
    type: 'University',
    github: 'https://github.com/OshaniWijekoon/IT23821804_IT3040_Asignment1',
    live: '',
    color: '#e8eef7',
  },
  
];

const filters = ['All', 'Individual', 'University'];


function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.type === active);

  return (
    <div className="projects-page">
      <div className="projects-bg">
        <div className="pbg-circle c1"></div>
        <div className="pbg-circle c2"></div>
        <div className="pbg-grid"></div>
      </div>

      <div className="projects-content">
        <div className="projects-header">
          <div className="badge">My Work</div>
          <h1 className="projects-title">
            Featured <span className="accent">Projects</span>
          </h1>
          <p className="projects-sub">
            A collection of projects I've built — from individual experiments
            to university collaborations.
          </p>

          <div className="filter-tabs">
            {filters.map(f => (
              <button
                key={f}
                className={`filter-btn ${active === f ? 'active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="project-card-top" style={{ background: project.color }}>
                <span className="project-emoji">{project.emoji}</span>
                <span className={`project-type ${project.type === 'University' ? 'uni' : 'ind'}`}>
                  {project.type}
                </span>
              </div>
              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="proj-link github-link">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="proj-link live-link">
                      🔗 Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <p>Want to see more?</p>
          <a href="https://github.com/OshaniWijekoon" target="_blank" rel="noreferrer" className="btn-github">
            View All on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;