module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          VUE_DEV : true,
        },
      },
    ],
  ],
};
