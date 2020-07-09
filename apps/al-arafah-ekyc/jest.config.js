module.exports = {
  name: 'al-arafah-ekyc',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/al-arafah-ekyc',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
