Package.describe({
  name: 'nfl:react-helmet',
  version: '2.2.0',
  summary: 'react-helmet (official): A document head manager for React',
  git: 'https://github.com/thereactivestack/meteor-react-helmet.git',
  documentation: 'README.md'
});

Npm.depends({
  'exposify': '0.5.0',
  'react-helmet': '2.2.0'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2');

  api.use(['react-runtime@0.14.0', 'cosmos:browserify@0.8.0']);
  api.imply(['react-runtime@0.14.0']);

  api.add_files([
    'react-helmet.browserify.options.json',
    'react-helmet.browserify.js'
  ]);

  api.export('ReactHelmet');
});
