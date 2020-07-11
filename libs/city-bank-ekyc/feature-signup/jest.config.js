module.exports = {
  name: 'city-bank-ekyc-feature-signup',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/city-bank-ekyc/feature-signup',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
