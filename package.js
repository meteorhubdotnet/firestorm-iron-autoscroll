Package.describe({
  name: 'meteorhubdotnet:iron-autoscroll',
  version: '1.0.15',
  summary: 'Fork of okgrow:router-autoscroll for Firestorm',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-autoscroll',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@2.11.0');
  api.use('promise');
  api.use('reactive-dict');
  api.use('reload');
  api.use('meteorhubdotnet:firestorm-iron-router@1.0.15', 'client', { weak: true });
  api.addFiles('client/hot-code-push.js', 'client');
  api.addFiles('client/router-autoscroll.js', 'client');
  api.export('RouterAutoscroll', 'client');
});

