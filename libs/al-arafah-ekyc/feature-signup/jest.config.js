module.exports = {
  name: 'al-arafah-ekyc-feature-signup',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/al-arafah-ekyc/feature-signup',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
