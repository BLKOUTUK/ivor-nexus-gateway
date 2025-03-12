
# Contributing to IVOR

Thank you for your interest in contributing to IVOR! This document provides guidelines and instructions for contributing to this project.

## 🌟 Code of Conduct

This project adheres to a code of conduct that expects all contributors to be respectful, inclusive, and considerate in all interactions.

## 🔄 Development Workflow

1. **Fork the Repository**: Start by forking the repository to your own GitHub account.

2. **Clone the Repository**: Clone your fork to your local machine.
   ```bash
   git clone https://github.com/YOUR-USERNAME/ivor-app.git
   cd ivor-app
   ```

3. **Set Up Development Environment**:
   ```bash
   npm install
   ```

4. **Create a Branch**: Create a branch for your contribution.
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Make Changes**: Implement your changes, following the coding standards outlined below.

6. **Test Your Changes**: Ensure your changes work as expected and don't break existing functionality.
   ```bash
   npm run dev
   ```

7. **Commit Your Changes**: Write clear, concise commit messages.
   ```bash
   git commit -m "Add feature: brief description of changes"
   ```

8. **Push to Your Fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

9. **Submit a Pull Request**: Navigate to the original repository and create a pull request from your branch.

## 📝 Pull Request Guidelines

When submitting a pull request:

1. **Describe Your Changes**: Provide a clear description of what your changes do and why they should be included.

2. **Reference Issues**: Reference any related issues using the GitHub issue number.

3. **Update Documentation**: If your changes modify behavior or add features, update the relevant documentation.

4. **Keep PRs Focused**: Each pull request should address a single concern or feature.

5. **Be Responsive**: Be prepared to address feedback and make requested changes.

## 🧰 Coding Standards

### JavaScript/TypeScript

- Use TypeScript for all new code
- Follow the existing code style and naming conventions
- Use ES6+ features when appropriate
- Add JSDoc comments for public APIs and complex functions

### React Components

- Use functional components with hooks
- Keep components small and focused on a single responsibility
- Use prop types or TypeScript interfaces for component props
- Follow the file structure conventions of the project

### CSS/Styling

- Use Tailwind CSS utility classes when possible
- Follow the BEM methodology for custom CSS classes
- Keep styles modular and scoped to components

### State Management

- Use React Context for global state that doesn't change frequently
- Use local component state for UI state
- Use TanStack Query for server state management

## 🧪 Testing Guidelines

- Write tests for new features or bug fixes
- Ensure all tests pass before submitting a pull request
- Follow the existing testing patterns in the project

## 📚 Documentation Guidelines

- Keep documentation up-to-date with code changes
- Use clear, concise language
- Include examples when appropriate
- Document both what and why

## 🚀 Feature Requests and Bug Reports

- Use the GitHub issue tracker for feature requests and bug reports
- Provide detailed information about bugs, including steps to reproduce
- For feature requests, describe the use case and expected behavior

## 🌱 Getting Started with Contributions

If you're new to the project, look for issues labeled `good first issue` or `help wanted` in the issue tracker.

## 🙏 Acknowledgment

Your contributions, whether code, documentation, design, or ideas, are valuable to the project. Thank you for helping make IVOR better!

## 📜 License

By contributing to IVOR, you agree that your contributions will be licensed under the project's MIT license.
