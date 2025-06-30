# TestLab Admin UI

TestLab Admin UI is a web-based interface for managing experiments, feature flags, and user segments in the TestLab platform. Built with React and Tailwind CSS, it provides an intuitive dashboard for experiment creation, monitoring, and analysis.

## Features

- Create, edit, and delete experiments and feature flags
- Visualize experiment results and user assignments
- Manage user segments and blocks
- Responsive design with modern UI components

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm (v8+ recommended)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/[USERNAME]/testlab-adminUI.git
cd testlab-adminUI
npm install
```

### Running the App

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Building for Production

```bash
npm run build
```

The optimized build will be in the `build/` directory.

### Running Tests

```bash
npm test
```

## Project Structure

- `src/components/` - React components for forms, navigation, lists, modals, and visualizations
- `src/services/` - API service modules for backend communication
- `src/utils/` - Utility functions
- `public/` - Static assets and HTML

## Customization

You can customize the UI by editing Tailwind CSS in `tailwind.config.js` and component styles in `src/`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b my-feature`)
3. Commit your changes (`git commit -am 'Add feature'`)
4. Push to the branch (`git push origin my-feature`)
5. Create a Pull Request

## License

This project is open source under the [MIT License](https://opensource.org/licenses/MIT).
